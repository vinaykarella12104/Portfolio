import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Upload, Eye, EyeOff, Lock, Plus, FileText, Link, AlertCircle, CheckCircle, Sparkles, Shield, Home } from 'lucide-react';

interface AdminPageProps {
  onAddProject?: (data: any) => void;
  onAddCertification?: (data: any) => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ onAddProject, onAddCertification }) => {
  const navigate = useNavigate();
  const { type } = useParams<{ type: 'project' | 'certification' }>();
  
  const [step, setStep] = useState<'password' | 'form'>('password');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    details: [''],
    tags: [''],
    link: '',
    year: new Date().getFullYear().toString(),
    status: type === 'project' ? 'completed' : 'active'
  });
  
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Admin password
  const ADMIN_PASSWORD = 'vinay2024';

  useEffect(() => {
    // Reset form when type changes
    resetForm();
  }, [type]);

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      details: [''],
      tags: [''],
      link: '',
      year: new Date().getFullYear().toString(),
      status: type === 'project' ? 'completed' : 'active'
    });
    setFile(null);
    setFilePreview(null);
    setErrors({});
    setIsSubmitting(false);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setStep('form');
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      
      // Create preview for images
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFilePreview(e.target?.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleArrayChange = (field: 'details' | 'tags', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'details' | 'tags') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'details' | 'tags', index: number) => {
    if (formData[field].length > 1) {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].filter((_, i) => i !== index)
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (formData.details.every(detail => !detail.trim())) {
      newErrors.details = 'At least one detail is required';
    }

    if (formData.tags.every(tag => !tag.trim())) {
      newErrors.tags = 'At least one tag is required';
    }

    if (type === 'project' && !file) {
      newErrors.file = 'Project image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate file upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      const submissionData = {
        ...formData,
        details: formData.details.filter(detail => detail.trim()),
        tags: formData.tags.filter(tag => tag.trim()),
        file: file,
        filePreview: filePreview,
        id: Date.now(),
        type: type
      };

      // Store in localStorage for persistence
      const storageKey = type === 'project' ? 'admin_projects' : 'admin_certifications';
      const existingData = JSON.parse(localStorage.getItem(storageKey) || '[]');
      existingData.push(submissionData);
      localStorage.setItem(storageKey, JSON.stringify(existingData));

      // Call the appropriate callback
      if (type === 'project' && onAddProject) {
        onAddProject(submissionData);
      } else if (type === 'certification' && onAddCertification) {
        onAddCertification(submissionData);
      }

      // Navigate back to home with success message
      navigate('/?success=' + encodeURIComponent(`${type === 'project' ? 'Project' : 'Certification'} added successfully!`));
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-liquid"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-liquid delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl animate-float delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={goBack}
                className="p-2 rounded-lg glass-effect hover-glow hover-magnetic transition-all duration-300 text-white/70 hover:text-white group"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 animate-pulse hover-magnetic">
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white gradient-text">
                    Admin Panel
                  </h1>
                  <p className="text-white/70">
                    Add New {type === 'project' ? 'Project' : 'Certification'}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={goBack}
              className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg hover-glow hover-magnetic transition-all duration-300 text-white/70 hover:text-white"
            >
              <Home className="h-4 w-4" />
              <span>Back to Portfolio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {step === 'password' ? (
          <div className="max-w-md mx-auto animate-slide-in-up">
            <div className="glass-effect rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-8">
                <div className="relative w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center animate-bounce hover-magnetic">
                  <Lock className="h-10 w-10 text-white relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-ping opacity-30"></div>
                  <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-200 animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 gradient-text">Admin Access Required</h2>
                <p className="text-white/70">This feature is protected. Please enter the admin password to continue.</p>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full px-4 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover-lift text-lg"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all duration-300 hover-magnetic"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {passwordError && (
                  <div className="flex items-center space-x-2 text-red-400 animate-slide-in-left">
                    <AlertCircle className="h-5 w-5" />
                    <span>{passwordError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!password.trim()}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed hover-lift text-lg py-4"
                >
                  <Lock className="mr-2 h-5 w-5" />
                  Authenticate
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="glass-effect rounded-2xl p-8 shadow-2xl border border-white/20 animate-slide-in-up">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2 gradient-text">
                Add New {type === 'project' ? 'Project' : 'Certification'}
              </h2>
              <p className="text-white/70">Fill in the details below to add your new {type}.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder={`Enter ${type} title`}
                      className={`w-full px-4 py-4 rounded-lg bg-white/10 border ${errors.title ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover-lift`}
                    />
                    {errors.title && (
                      <p className="mt-2 text-sm text-red-400 flex items-center animate-slide-in-left">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.title}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      Description *
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder={`Brief description of the ${type}`}
                      rows={4}
                      className={`w-full px-4 py-4 rounded-lg bg-white/10 border ${errors.description ? 'border-red-400' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none hover-lift`}
                    />
                    {errors.description && (
                      <p className="mt-2 text-sm text-red-400 flex items-center animate-slide-in-left">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Year and Status */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-3">
                        Year
                      </label>
                      <input
                        type="number"
                        value={formData.year}
                        onChange={(e) => handleInputChange('year', e.target.value)}
                        min="2020"
                        max="2030"
                        className="w-full px-4 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover-lift"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-3">
                        Status
                      </label>
                      <select
                        value={formData.status}
                        onChange={(e) => handleInputChange('status', e.target.value)}
                        className="w-full px-4 py-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover-lift"
                      >
                        {type === 'project' ? (
                          <>
                            <option value="completed">Completed</option>
                            <option value="in-progress">In Progress</option>
                            <option value="featured">Featured</option>
                          </>
                        ) : (
                          <>
                            <option value="active">Active</option>
                            <option value="expired">Expired</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  {/* Link */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      Link (Optional)
                    </label>
                    <div className="relative">
                      <Link className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                      <input
                        type="url"
                        value={formData.link}
                        onChange={(e) => handleInputChange('link', e.target.value)}
                        placeholder="https://example.com"
                        className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover-lift"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      {type === 'project' ? 'Project Image *' : 'Certificate File'}
                    </label>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative border-2 border-dashed ${errors.file ? 'border-red-400' : 'border-white/30'} rounded-lg p-8 text-center cursor-pointer hover:border-teal-400 transition-all duration-300 group hover-lift hover-magnetic`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileChange}
                        accept={type === 'project' ? 'image/*' : '.pdf,.jpg,.jpeg,.png'}
                        className="hidden"
                      />
                      
                      {file ? (
                        <div className="space-y-4">
                          {filePreview ? (
                            <div className="relative w-40 h-40 mx-auto">
                              <img
                                src={filePreview}
                                alt="Preview"
                                className="w-full h-full object-cover rounded-lg hover-lift"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          ) : (
                            <FileText className="h-20 w-20 text-teal-400 mx-auto animate-bounce" />
                          )}
                          <div>
                            <p className="text-white font-medium gradient-text text-lg">{file.name}</p>
                            <p className="text-white/50">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Upload className="h-20 w-20 text-white/50 group-hover:text-teal-400 mx-auto transition-all duration-300 group-hover:animate-bounce" />
                          <div>
                            <p className="text-white group-hover:gradient-text transition-all duration-300 text-lg">Click to upload file</p>
                            <p className="text-white/50">
                              {type === 'project' ? 'PNG, JPG up to 10MB' : 'PDF, PNG, JPG up to 10MB'}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    {errors.file && (
                      <p className="mt-2 text-sm text-red-400 flex items-center animate-slide-in-left">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.file}
                      </p>
                    )}
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      Tags *
                    </label>
                    <div className="space-y-3">
                      {formData.tags.map((tag, index) => (
                        <div key={index} className="flex space-x-3">
                          <input
                            type="text"
                            value={tag}
                            onChange={(e) => handleArrayChange('tags', index, e.target.value)}
                            placeholder={`Tag ${index + 1}`}
                            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover-lift"
                          />
                          {formData.tags.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeArrayItem('tags', index)}
                              className="px-4 py-3 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300 hover-magnetic"
                            >
                              ×
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => addArrayItem('tags')}
                        className="text-teal-400 hover:text-teal-300 flex items-center transition-all duration-300 hover-magnetic"
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Tag
                      </button>
                    </div>
                    {errors.tags && (
                      <p className="mt-2 text-sm text-red-400 flex items-center animate-slide-in-left">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.tags}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  {type === 'project' ? 'Key Features *' : 'Details *'}
                </label>
                <div className="space-y-3">
                  {formData.details.map((detail, index) => (
                    <div key={index} className="flex space-x-3">
                      <input
                        type="text"
                        value={detail}
                        onChange={(e) => handleArrayChange('details', index, e.target.value)}
                        placeholder={`${type === 'project' ? 'Feature' : 'Detail'} ${index + 1}`}
                        className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover-lift"
                      />
                      {formData.details.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('details', index)}
                          className="px-4 py-3 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300 hover-magnetic"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('details')}
                    className="text-teal-400 hover:text-teal-300 flex items-center transition-all duration-300 hover-magnetic"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add {type === 'project' ? 'Feature' : 'Detail'}
                  </button>
                </div>
                {errors.details && (
                  <p className="mt-2 text-sm text-red-400 flex items-center animate-slide-in-left">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.details}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4 pt-8 border-t border-white/10">
                <button
                  type="button"
                  onClick={goBack}
                  className="px-8 py-4 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover-lift hover-magnetic"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center hover-lift px-8 py-4 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Adding...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5 animate-pulse" />
                      Add {type === 'project' ? 'Project' : 'Certification'}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
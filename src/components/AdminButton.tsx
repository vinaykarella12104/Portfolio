import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Shield, Sparkles } from 'lucide-react';

interface AdminButtonProps {
  type: 'project' | 'certification';
}

const AdminButton: React.FC<AdminButtonProps> = ({ type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin/${type}`);
  };

  return (
    <button
      onClick={handleClick}
      className="group relative inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-500 overflow-hidden hover-lift hover-magnetic interactive-element"
      style={{
        background: 'linear-gradient(135deg, #14b8a6, #3b82f6, #8b5cf6)',
        backgroundSize: '200% 200%',
        animation: 'gradient-xy 4s ease infinite'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/50 to-blue-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      {/* Content */}
      <div className="relative flex items-center text-white z-10">
        <div className="relative mr-3">
          <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
          <div className="absolute inset-0 bg-white/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
        </div>
        <span className="relative">
          Add {type === 'project' ? 'Project' : 'Certification'}
          <Sparkles className="absolute -top-1 -right-6 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
        </span>
        <Shield className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-white/10 scale-0 group-active:scale-100 transition-transform duration-200 rounded-xl"></div>
      </div>
    </button>
  );
};

export default AdminButton;
        </div>
      </button>

      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        type={type}
      />
    </>
  );
};

export default AdminButton;
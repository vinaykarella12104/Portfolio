import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, ChevronDown, ChevronUp, Download, Eye } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  credential?: string;
  certificatePdf?: string;
}

const Certifications = () => {
  const [expandedCert, setExpandedCert] = useState<number | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Oracle Cloud Infrastructure Foundations Associate',
      issuer: 'Oracle',
      date: '2023',
      description: 'Validated knowledge of Oracle Cloud Infrastructure services, including compute, storage, and networking concepts.',
      credential: '1Z0-1085-23',
      certificatePdf: '/certificates/oracle-cloud-foundations.pdf'
    },
    {
      id: 2,
      title: 'Microsoft Certified: Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      description: 'Demonstrated understanding of machine learning and AI concepts, as well as related Azure services.',
      credential: 'AI-900',
      certificatePdf: '/certificates/azure-ai-fundamentals.pdf'
    },
    {
      id: 3,
      title: 'Oracle Fusion Cloud Applications HCM Foundations Associate',
      issuer: 'Oracle',
      date: '2023',
      description: 'Verified knowledge of Oracle Fusion Cloud Human Capital Management applications and functionality.',
      certificatePdf: '/certificates/oracle-hcm-foundations.pdf'
    },
    {
      id: 4,
      title: 'AWS Cloud Virtual Internship',
      issuer: 'AWS Academy and EduSkills Foundation',
      date: '2023',
      description: 'Completed a virtual internship program focused on AWS cloud services, architecture, and best practices.',
      certificatePdf: '/certificates/aws-virtual-internship.pdf'
    }
  ];

  const toggleCertificate = (id: number) => {
    setExpandedCert(prev => (prev === id ? null : id));
  };

  const handleViewCertificate = async (pdfPath: string, title: string) => {
    try {
      const response = await fetch(pdfPath, { method: 'HEAD' });
      if (response.ok) {
        window.open(pdfPath, '_blank');
      } else {
        alert(`Certificate PDF not found. Please add ${pdfPath.split('/').pop()} to the public/certificates folder.`);
      }
    } catch {
      alert(`Certificate PDF not found. Please add ${pdfPath.split('/').pop()} to the public/certificates folder.`);
    }
  };

  const handleDownloadCertificate = async (pdfPath: string, title: string) => {
    try {
      const response = await fetch(pdfPath, { method: 'HEAD' });
      if (!response.ok) {
        alert(`Certificate PDF not found. Please add ${pdfPath.split('/').pop()} to the public/certificates folder.`);
        return;
      }

      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = `${title.replace(/\s+/g, '_')}_Certificate.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      alert(`Certificate PDF not found. Please add ${pdfPath.split('/').pop()} to the public/certificates folder.`);
    }
  };

  const achievements = [
    "Secured 2nd place in AWS Cloud Hackathon conducted at Sri Vasavi Engineering College — 2023",
    "Received official appreciation circular from the college for contribution to the Learning Management System project",
    "Consistently maintained a top academic standing in the department"
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title">Certifications & Achievements</h2>

        <div ref={ref} className={`fade-in ${inView ? 'appear' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">Certifications</h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
                  >
                    <div
                      className="p-4 cursor-pointer flex justify-between items-start"
                      onClick={() => toggleCertificate(cert.id)}
                    >
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-teal-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-slate-800 dark:text-white">{cert.title}</h4>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">
                            {cert.issuer} • {cert.date}
                          </p>
                          {cert.credential && (
                            <span className="inline-block mt-1 px-2 py-0.5 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded text-xs">
                              {cert.credential}
                            </span>
                          )}
                        </div>
                      </div>

                      {expandedCert === cert.id ? (
                        <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                      )}
                    </div>

                    {expandedCert === cert.id && (
                      <div className="px-4 pb-4 pt-0 border-t border-slate-100 dark:border-slate-700 mt-2">
                        {cert.description && (
                          <p className="text-slate-600 dark:text-slate-300 text-sm pl-8 mb-3">
                            {cert.description}
                          </p>
                        )}
                        <div className="pl-8 flex flex-wrap gap-3">
                          {cert.certificatePdf && (
                            <>
                              <button
                                onClick={() => handleViewCertificate(cert.certificatePdf!, cert.title)}
                                className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View Certificate
                              </button>
                              {/* <button
                                onClick={() => handleDownloadCertificate(cert.certificatePdf!, cert.title)}
                                className="inline-flex items-center text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium transition-colors"
                              >
                                <Download className="h-4 w-4 mr-1" />
                                Download PDF
                              </button> */}
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">Achievements</h3>

              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 dark:text-teal-400 mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-sm font-medium">{index + 1}</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-lg border border-teal-100 dark:border-teal-900/30">
                <h4 className="font-medium text-slate-800 dark:text-white mb-3">Ready for New Challenges</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Actively seeking opportunities to apply my skills in real-world projects and internships.
                  Let's connect and explore possibilities for collaboration!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

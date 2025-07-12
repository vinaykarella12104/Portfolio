import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, ShieldCheck } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div 
          ref={ref}
          className={`grid md:grid-cols-5 gap-8 items-start fade-in ${inView ? 'appear' : ''}`}
        >
          <div className="md:col-span-3 space-y-6">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
             I am a motivated Computer Science student at Sri Vasavi Engineering College with practical experience in building scalable web applications and backend APIs using technologies like Django and Spring Boot. My academic background has equipped me with a strong foundation in software engineering, database design, and secure authentication practices.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I have applied these skills to develop real-world solutions such as grievance management systems, learning management platforms, and secure banking APIs. These projects reflect my ability to design and implement user-centric applications that are both functional and reliable, while working effectively in collaborative environments.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              What drives me is the opportunity to create technology that addresses real problems and adds value. I am committed to continuous learning and actively explore new tools, frameworks, and industry trends to sharpen my technical skills and stay future-ready.


            </p>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card p-6">
                <Code className="h-8 w-8 text-teal-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">Web Development</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Creating responsive and user-friendly web applications using modern frameworks.
                </p>
              </div>
              
              <div className="card p-6">
                <Server className="h-8 w-8 text-teal-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">Backend Development</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Building robust APIs and server-side logic with Django and Spring Boot.
                </p>
              </div>
              
              <div className="card p-6">
                <Database className="h-8 w-8 text-teal-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">Database Design</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Designing efficient database schemas and optimizing queries.
                </p>
              </div>
              
              <div className="card p-6">
                <ShieldCheck className="h-8 w-8 text-teal-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">Security</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Implementing secure authentication and authorization mechanisms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
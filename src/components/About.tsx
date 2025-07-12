import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, ShieldCheck, Zap, Target, Users, Award } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { icon: <Code className="h-6 w-6" />, number: "15+", label: "Projects Completed" },
    { icon: <Award className="h-6 w-6" />, number: "4+", label: "Certifications" },
    { icon: <Target className="h-6 w-6" />, number: "8.91", label: "CGPA" },
    { icon: <Users className="h-6 w-6" />, number: "2nd", label: "Hackathon Place" },
  ];
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        {/* Stats Section */}
        <div 
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${inView ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 glass-effect rounded-xl hover-lift animate-scale-in hover-magnetic interactive-element`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-3 text-teal-500 animate-bounce" style={{ animationDelay: `${index * 100}ms` }}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold gradient-text mb-1 animate-text-reveal" style={{ animationDelay: `${index * 150}ms` }}>{stat.number}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 animate-fade-in-rotate" style={{ animationDelay: `${index * 200}ms` }}>{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div 
          className={`grid md:grid-cols-5 gap-8 items-start ${inView ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}
        >
          <div className="md:col-span-3 space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-blue-500 rounded-full animate-pulse"></div>
              <p className={`text-slate-600 dark:text-slate-300 leading-relaxed pl-6 text-lg transition-all duration-700 hover-lift ${inView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
             I am a motivated Computer Science student at Sri Vasavi Engineering College with practical experience in building scalable web applications and backend APIs using technologies like Django and Spring Boot. My academic background has equipped me with a strong foundation in software engineering, database design, and secure authentication practices.
              </p>
            </div>
            <p className={`text-slate-600 dark:text-slate-300 leading-relaxed text-lg transition-all duration-700 hover-lift ${inView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              I have applied these skills to develop real-world solutions such as grievance management systems, learning management platforms, and secure banking APIs. These projects reflect my ability to design and implement user-centric applications that are both functional and reliable, while working effectively in collaborative environments.
            </p>
            <p className={`text-slate-600 dark:text-slate-300 leading-relaxed text-lg transition-all duration-700 hover-lift ${inView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
              What drives me is the opportunity to create technology that addresses real problems and adds value. I am committed to continuous learning and actively explore new tools, frameworks, and industry trends to sharpen my technical skills and stay future-ready.
            </p>
            
            {/* Call to action */}
            <div className={`mt-8 p-6 animated-border transition-all duration-700 hover-lift ${inView ? 'animate-fade-in-rotate' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
              <div className="flex items-center mb-3">
                <Zap className="h-5 w-5 text-teal-500 mr-2 animate-pulse" />
                <h3 className="font-semibold text-slate-800 dark:text-white">Ready to Collaborate</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                I'm actively seeking internship opportunities and exciting projects to contribute to. Let's build something amazing together!
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`card p-6 hover-lift transition-all duration-700 hover-magnetic ${inView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg mb-4 animate-bounce hover-glow">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white gradient-text">Web Development</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Creating responsive and user-friendly web applications using modern frameworks.
                </p>
              </div>
              
              <div className={`card p-6 hover-lift transition-all duration-700 hover-magnetic ${inView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 animate-bounce hover-glow" style={{ animationDelay: '200ms' }}>
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white gradient-text">Backend Development</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Building robust APIs and server-side logic with Django and Spring Boot.
                </p>
              </div>
              
              <div className={`card p-6 hover-lift transition-all duration-700 hover-magnetic ${inView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '700ms' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 animate-bounce hover-glow" style={{ animationDelay: '400ms' }}>
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white gradient-text">Database Design</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Designing efficient database schemas and optimizing queries.
                </p>
              </div>
              
              <div className={`card p-6 hover-lift transition-all duration-700 hover-magnetic ${inView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '900ms' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4 animate-bounce hover-glow" style={{ animationDelay: '600ms' }}>
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white gradient-text">Security</h3>
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
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div 
          ref={ref}
          className={`fade-in ${inView ? 'appear' : ''}`}
        >
          <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="flex items-start">
                  <GraduationCap className="h-6 w-6 text-teal-500 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                      Bachelor of Technology in Computer Science and Engineering
                    </h3>
                    <p className="text-teal-500 dark:text-teal-400 font-medium my-2">
                      Sri Vasavi Engineering College, Tadepalligudem
                    </p>
                    
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>2022 - 2026 (Expected)</span>
                    </div>
                    
                    <div className="flex items-center text-slate-600 dark:text-slate-300 mb-6">
                      <Award className="h-5 w-5 mr-2 text-yellow-500" />
                      <span>CGPA: 8.91</span>
                    </div>
                    
                    <div className="space-y-3 text-slate-600 dark:text-slate-300">
                      <p>
                        Currently pursuing a Bachelor's degree with a focus on computer science fundamentals,
                        software engineering principles, and practical application development.
                      </p>
                      <p>
                        <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Operating Systems,
                        Object-Oriented Programming, Database Management Systems, Software Engineering
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="border-2 border-teal-100 dark:border-teal-900/30 rounded-lg p-4 h-full">
                  <h4 className="font-medium text-slate-800 dark:text-white mb-3">Academic Highlights</h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 dark:text-teal-400 mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Consistently maintained a high academic standing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 dark:text-teal-400 mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Active participant in technical workshops and hackathons</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 dark:text-teal-400 mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Developed practical projects applying classroom concepts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 dark:text-teal-400 mr-2 mt-0.5 flex-shrink-0">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Focused on building both theoretical and practical skills</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
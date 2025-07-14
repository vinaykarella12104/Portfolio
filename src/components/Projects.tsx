import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Github, ExternalLink, Star, Calendar, Users } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: string[];
  year: string;
  status: 'completed' | 'in-progress' | 'featured';
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const projects: Project[] = [

    {
      id: 1,
      title: 'Resolve Radar',
      description: 'Efficient Solution for Grievances',
      image: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Django', 'Python', 'ReportLab', 'SQLite'],
      year: '2023',
      status: 'Completed',
      details: [
        'Web-based complaint management portal with personalized user dashboards',
        'Developed a full-stack grievance redressal web application using Django',
        'Implemented user-specific analytics including total complaints filed, resolution rate, and status-wise breakdown',
        'Enabled users to upload supporting documents or images with complaints and download complaint reports in PDF format',
        'Ensured secure user sessions with authentication and role-based access for users and administrators'
      ],
      github: 'https://github.com/vinaykarella12104/Resolve_Radar_Grievances',
      demo: 'https://resolve-radar-demo.netlify.app'
    },
    {
      id: 2,
      title: 'Learning Management System',
      description: 'Web-based e-learning platform for Sri Vasavi Engineering College',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Django', 'PostgreSQL', 'HLS', 'Bootstrap'],
      year: '2023',
      status: 'completed',
      details: [
        'Developed and deployed a Django-based LMS with PostgreSQL, widely used by students and faculty during semester exams',
        'Implemented secure roll number–based login, personalized dashboards, and course-wise video progress tracking',
        'Integrated HLS video streaming with engagement features like views, likes, and adaptive navigation',
        'Customized the Django admin panel for course and video management and department-wise user organization',
        'Implemented bulk uploads of student and faculty data via Excel/CSV for efficient onboarding',
        'The development team received an official appreciation circular from the college for our contribution'
      ],
      github: 'https://github.com/vinaykarella12104/LMS-SVEC',
      demo: 'https://lms-svec.herokuapp.com'
    },
    {
      id: 3,
      title: 'Smart QR-Based Attendance System',
      description: 'Automated attendance with anti-proxy security and timetable awareness',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Spring Boot', 'Java', 'AES Encryption', 'PostgreSQL'],
      year: '2024',
      status: 'Featured',
      details: [
        'Developed REST APIs using Spring Boot for secure attendance marking with QR codes',
        'Implemented AES encryption for QR payload security and anti-proxy validation',
        'Added timetable-aware validations to prevent misuse of attendance system',
        'Enabled IP/device binding for classroom-level authentication',
        'Supports multi-classroom scenarios with conflict-free scheduling logic'
      ],
      github: 'https://github.com/vinaykarella12104/Smart_QR_Attendance'
    }
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'featured':
        return (
          <div className="flex items-center px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs rounded-full">
            <Star className="h-3 w-3 mr-1" />
            Featured
          </div>
        );
      case 'completed':
        return (
          <div className="flex items-center px-2 py-1 bg-gradient-to-r from-green-400 to-green-500 text-white text-xs rounded-full">
            ✓ Completed
          </div>
        );
      case 'in-progress':
        return (
          <div className="flex items-center px-2 py-1 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-xs rounded-full">
            🔄 In Progress
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        {/* Projects Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ${inView ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center p-6 glass-effect rounded-xl hover-lift hover-magnetic interactive-element">
            <div className="text-3xl font-bold gradient-text mb-2 animate-bounce">{projects.length}+</div>
            <div className="text-slate-600 dark:text-slate-400">Projects Completed</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl hover-lift hover-magnetic interactive-element">
            <div className="text-3xl font-bold gradient-text mb-2 animate-bounce" style={{ animationDelay: '200ms' }}>100%</div>
            <div className="text-slate-600 dark:text-slate-400">Success Rate</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl hover-lift hover-magnetic interactive-element">
            <div className="text-3xl font-bold gradient-text mb-2 animate-bounce" style={{ animationDelay: '400ms' }}>1000+</div>
            <div className="text-slate-600 dark:text-slate-400">Users Impacted</div>
          </div>
        </div>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${inView ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`card transition-all duration-500 hover-lift hover-magnetic group interactive-element ${
                expandedProject === project.id ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
              style={{ animationDelay: `${project.id * 200}ms` }}
            >
              <div className="relative aspect-video overflow-hidden rounded-t-xl group">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  {getStatusBadge(project.status)}
                </div>
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 flex items-center px-2 py-1 glass-effect text-white text-xs rounded-full">
                  <Calendar className="h-3 w-3 mr-1" />
                  {project.year}
                </div>
                
                {/* Hover overlay with quick actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-effect rounded-full hover-glow hover-magnetic transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-effect rounded-full hover-glow hover-magnetic transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white group-hover:gradient-text transition-all duration-500">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-600 dark:text-teal-400 hover-lift hover-magnetic transition-all duration-300 interactive-element"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {expandedProject === project.id && (
                  <div className="mt-6 space-y-4 animate-slide-in-up">
                    <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-3 flex items-center gradient-text">
                        <Users className="h-4 w-4 mr-2 text-teal-500 animate-bounce" />
                        Key Features & Achievements
                      </h4>
                    </div>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                      {project.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View GitHub repository"
                          className="flex items-center px-4 py-2 glass-effect rounded-lg hover-glow hover-magnetic transition-all duration-300 text-slate-700 dark:text-slate-300 interactive-element"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          <span>Source Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit Live Demo"
                          className="flex items-center px-4 py-2 glass-effect rounded-lg hover-glow hover-magnetic transition-all duration-300 text-slate-700 dark:text-slate-300 interactive-element"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => toggleProject(project.id)}
                  className="flex items-center gradient-text mt-6 text-sm font-medium transition-all duration-300 hover-lift hover-magnetic group interactive-element"
                >
                  {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                  <ChevronRight
                    className={`h-4 w-4 ml-1 transition-transform duration-500 group-hover:translate-x-2 ${
                      expandedProject === project.id ? 'rotate-90' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

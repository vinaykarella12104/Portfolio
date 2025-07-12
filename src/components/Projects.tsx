import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: string[];
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Resolve Radar',
      description: 'Efficient Solution for Grievances',
      image: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Django', 'Python', 'ReportLab', 'SQLite'],
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

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in ${inView ? 'appear' : ''}`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`card transition-all duration-300 hover:shadow-xl hover:scale-[1.01] ${
                expandedProject === project.id ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="relative aspect-video overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {expandedProject === project.id && (
                  <div className="mt-4 space-y-3 animate-fadeIn">
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>

                    <div className="flex gap-4 mt-6">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View GitHub repository"
                          className="flex items-center text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
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
                          className="flex items-center text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
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
                  className="flex items-center text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 mt-4 text-sm font-medium"
                >
                  {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                  <ChevronRight
                    className={`h-4 w-4 ml-1 transition-transform duration-300 ${
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

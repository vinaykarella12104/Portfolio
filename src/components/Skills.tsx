import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'database' | 'tools';
  icon?: React.ReactNode;
}

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState('all');
  const [skills, setSkills] = useState<Skill[]>([]);
  const [displayedSkills, setDisplayedSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const allSkills: Skill[] = [
      { name: 'Python', category: 'languages' },
      { name: 'Java', category: 'languages' },
      { name: 'C/C++', category: 'languages' },
      { name: 'SQL', category: 'languages' },
      { name: 'HTML', category: 'languages' },
      { name: 'CSS', category: 'languages' },
      { name: 'JavaScript', category: 'languages' },
      { name: 'Django', category: 'frameworks' },
      { name: 'Spring Boot', category: 'frameworks' },
      { name: 'Bootstrap', category: 'frameworks' },
      { name: 'ReportLab', category: 'frameworks' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'MySQL', category: 'database' },
      { name: 'SQLite', category: 'database' },
      { name: 'Git', category: 'tools' },
      { name: 'GitHub', category: 'tools' },
      { name: 'VS Code', category: 'tools' },
      { name: 'Postman', category: 'tools' },
      { name: 'Intellij', category: 'tools' },

    ];

    setSkills(allSkills);
    setDisplayedSkills(allSkills);
  }, []);

  useEffect(() => {
    if (activeTab === 'all') {
      setDisplayedSkills(skills);
    } else {
      setDisplayedSkills(skills.filter(skill => skill.category === activeTab));
    }
  }, [activeTab, skills]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'languages':
        return <Code className="h-5 w-5 text-teal-500" />;
      case 'frameworks':
        return <Server className="h-5 w-5 text-blue-500" />;
      case 'database':
        return <Database className="h-5 w-5 text-green-500" />;
      case 'tools':
        return <Wrench className="h-5 w-5 text-orange-500" />;
      default:
        return <Code className="h-5 w-5 text-teal-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'languages':
        return 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20';
      case 'frameworks':
        return 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20';
      case 'database':
        return 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20';
      case 'tools':
        return 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20';
      default:
        return 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20';
    }
  };

  const groupedSkills = displayedSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryTitles = {
    languages: 'Programming Languages',
    frameworks: 'Frameworks & Libraries',
    database: 'Databases',
    tools: 'Tools'
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div 
          ref={ref}
          className={`fade-in ${inView ? 'appear' : ''}`}
        >
          <div className="flex flex-wrap justify-center mb-10 gap-2">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-teal-100 dark:hover:bg-slate-600 hover:shadow-sm'
              }`}
              onClick={() => handleTabChange('all')}
            >
              All Skills
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'languages'
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-teal-100 dark:hover:bg-slate-600 hover:shadow-sm'
              }`}
              onClick={() => handleTabChange('languages')}
            >
              Languages
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'frameworks'
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-teal-100 dark:hover:bg-slate-600 hover:shadow-sm'
              }`}
              onClick={() => handleTabChange('frameworks')}
            >
              Frameworks
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'database'
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-teal-100 dark:hover:bg-slate-600 hover:shadow-sm'
              }`}
              onClick={() => handleTabChange('database')}
            >
              Databases
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'tools'
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-teal-100 dark:hover:bg-slate-600 hover:shadow-sm'
              }`}
              onClick={() => handleTabChange('tools')}
            >
              Tools
            </button>
          </div>
          
          {activeTab === 'all' ? (
            <div className="space-y-8">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    {getCategoryIcon(category)}
                    <h3 className="text-lg font-semibold ml-2 text-slate-800 dark:text-white">
                      {categoryTitles[category as keyof typeof categoryTitles]}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium text-slate-700 dark:text-slate-300 transition-all duration-300 hover:shadow-md hover:scale-105 ${getCategoryColor(category)}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {getCategoryIcon(activeTab)}
                <h3 className="text-lg font-semibold ml-2 text-slate-800 dark:text-white">
                  {categoryTitles[activeTab as keyof typeof categoryTitles]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {displayedSkills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium text-slate-700 dark:text-slate-300 transition-all duration-300 hover:shadow-md hover:scale-105 ${getCategoryColor(skill.category)}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
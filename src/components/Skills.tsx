import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Wrench, Star, TrendingUp } from 'lucide-react';

interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'database' | 'tools';
  level?: number;
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
      { name: 'Python', category: 'languages', level: 90 },
      { name: 'Java', category: 'languages', level: 85 },
      { name: 'C/C++', category: 'languages', level: 75 },
      { name: 'SQL', category: 'languages', level: 80 },
      { name: 'HTML', category: 'languages', level: 95 },
      { name: 'CSS', category: 'languages', level: 90 },
      { name: 'Django', category: 'frameworks', level: 85 },
      { name: 'Spring Boot', category: 'frameworks', level: 80 },
      { name: 'Bootstrap', category: 'frameworks', level: 85 },
      { name: 'PostgreSQL', category: 'database', level: 80 },
      { name: 'MySQL', category: 'database', level: 75 },
      { name: 'SQLite', category: 'database', level: 85 },
      { name: 'Git', category: 'tools', level: 90 },
      { name: 'GitHub', category: 'tools', level: 90 },
      { name: 'VS Code', category: 'tools', level: 95 },
      { name: 'Postman', category: 'tools', level: 85 },
      { name: 'Intellij', category: 'tools', level: 80 },
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
        return 'border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20';
      case 'frameworks':
        return 'border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20';
      case 'database':
        return 'border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20';
      case 'tools':
        return 'border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20';
      default:
        return 'border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20';
    }
  };

  const getSkillStars = (level: number) => {
    const stars = Math.round(level / 20);
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
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
        
        {/* Skills Overview */}
        <div className={`mb-12 text-center ${inView ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-6 w-6 text-teal-500 mr-2 animate-bounce" />
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Continuously expanding my technical expertise across multiple domains
            </p>
          </div>
        </div>
        
        <div 
          ref={ref}
          className={`fade-in ${inView ? 'appear' : ''}`}
        >
          <div className="flex flex-wrap justify-center mb-10 gap-3">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg transform scale-105 animate-pulse'
                  : 'glass-effect text-slate-600 dark:text-slate-300 hover-lift hover-magnetic'
              }`}
              onClick={() => handleTabChange('all')}
            >
              All Skills
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'languages'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg transform scale-105 animate-pulse'
                  : 'glass-effect text-slate-600 dark:text-slate-300 hover-lift hover-magnetic'
              }`}
              onClick={() => handleTabChange('languages')}
            >
              Languages
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'frameworks'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg transform scale-105 animate-pulse'
                  : 'glass-effect text-slate-600 dark:text-slate-300 hover-lift hover-magnetic'
              }`}
              onClick={() => handleTabChange('frameworks')}
            >
              Frameworks
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'database'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg transform scale-105 animate-pulse'
                  : 'glass-effect text-slate-600 dark:text-slate-300 hover-lift hover-magnetic'
              }`}
              onClick={() => handleTabChange('database')}
            >
              Databases
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'tools'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg transform scale-105 animate-pulse'
                  : 'glass-effect text-slate-600 dark:text-slate-300 hover-lift hover-magnetic'
              }`}
              onClick={() => handleTabChange('tools')}
            >
              Tools
            </button>
          </div>
          
          {activeTab === 'all' ? (
            <div className="space-y-8">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="card p-6 hover-lift hover-magnetic">
                  <div className="flex items-center mb-4">
                    <div className="animate-bounce">{getCategoryIcon(category)}</div>
                    <h3 className="text-lg font-semibold ml-2 text-slate-800 dark:text-white gradient-text">
                      {categoryTitles[category as keyof typeof categoryTitles]}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categorySkills.map((skill, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border text-sm font-medium text-slate-700 dark:text-slate-300 transition-all duration-300 hover-lift hover-magnetic interactive-element ${getCategoryColor(category)}`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold gradient-text">{skill.name}</span>
                          <span className="text-xs text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="progress-bar mb-2">
                          <div 
                            className="progress-bar-fill" 
                            style={{ width: inView ? `${skill.level}%` : '0%' }}
                          />
                        </div>
                        <div className="flex justify-center">
                          {getSkillStars(skill.level || 0)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card p-6 hover-lift hover-magnetic">
              <div className="flex items-center mb-4">
                <div className="animate-bounce">{getCategoryIcon(activeTab)}</div>
                <h3 className="text-lg font-semibold ml-2 text-slate-800 dark:text-white gradient-text">
                  {categoryTitles[activeTab as keyof typeof categoryTitles]}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border text-sm font-medium text-slate-700 dark:text-slate-300 transition-all duration-300 hover-lift hover-magnetic animate-scale-in interactive-element ${getCategoryColor(skill.category)}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold gradient-text">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="progress-bar mb-2">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: inView ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                    <div className="flex justify-center">
                      {getSkillStars(skill.level || 0)}
                    </div>
                  </div>
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
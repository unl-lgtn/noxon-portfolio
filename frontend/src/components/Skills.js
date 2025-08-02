import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Container, Workflow, Globe, Server } from 'lucide-react';
import { mockSkills } from '../data/mock';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.dataset.skillId;
            setVisibleSkills(prev => new Set([...prev, skillId]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = skillsRef.current?.querySelectorAll('[data-skill-id]');
    skillElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const categoryIcons = {
    frontend: Globe,
    backend: Server,
    database: Database,
    devops: Container,
    automation: Workflow,
    tools: Code2
  };

  return (
    <section id="skills" className="py-24 px-6 relative" ref={skillsRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="font-inter text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockSkills.map((category) => {
            const IconComponent = categoryIcons[category.category] || Code2;
            
            return (
              <div
                key={category.category}
                data-skill-id={category.category}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-gray-600 transition-all duration-500"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </div>
                  <h3 className="font-space-grotesk text-xl font-bold capitalize">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-inter text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="font-inter text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Skill Progress Bar */}
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: visibleSkills.has(category.category) ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Badge */}
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <span className="inline-flex items-center px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs font-inter">
                    {category.skills.length} Skills
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="font-space-grotesk text-3xl font-bold text-blue-400">5+</div>
              <div className="font-inter text-gray-400">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="font-space-grotesk text-3xl font-bold text-purple-400">50+</div>
              <div className="font-inter text-gray-400">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="font-space-grotesk text-3xl font-bold text-green-400">20+</div>
              <div className="font-inter text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
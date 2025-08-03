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
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6 text-primary">
            Technical <span className="bg-gradient-to-r from-orange-primary to-orange-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="font-inter text-xl text-secondary max-w-2xl mx-auto">
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
                className="group bg-surface backdrop-blur-sm rounded-xl border border-border p-6 hover:border-orange-primary hover:bg-orange-primary/5 transition-all duration-500"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center group-hover:bg-orange-primary group-hover:text-primary-foreground transition-all duration-300 border border-border">
                    <IconComponent className="w-6 h-6 text-secondary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-space-grotesk text-xl font-bold capitalize text-primary">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-inter text-secondary font-medium">
                          {skill.name}
                        </span>
                        <span className="font-inter text-sm text-muted">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Skill Progress Bar */}
                      <div className="w-full bg-surface-elevated rounded-full h-2 overflow-hidden border border-border">
                        <div
                          className="h-full bg-gradient-to-r from-orange-primary to-orange-secondary rounded-full transition-all duration-1000 ease-out"
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
                <div className="mt-6 pt-4 border-t border-border">
                  <span className="inline-flex items-center px-3 py-1 bg-surface-elevated text-muted rounded-full text-xs font-inter border border-border">
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
              <div className="font-space-grotesk text-3xl font-bold text-orange-primary">5+</div>
              <div className="font-inter text-secondary">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="font-space-grotesk text-3xl font-bold text-orange-primary">50+</div>
              <div className="font-inter text-secondary">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="font-space-grotesk text-3xl font-bold text-orange-primary">20+</div>
              <div className="font-inter text-secondary">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
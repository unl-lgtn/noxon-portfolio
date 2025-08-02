import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Database, Container } from 'lucide-react';
import { mockProjects } from '../data/mock';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'automation', label: 'Automation' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = filter === 'all' 
    ? mockProjects 
    : mockProjects.filter(project => project.category === filter);

  const getTechIcon = (tech) => {
    const iconMap = {
      'React': Code2,
      'Next.js': Code2,
      'Vue.js': Code2,
      'MongoDB': Database,
      'Docker': Container,
      'Node.js': Code2,
      'TailwindCSS': Code2,
      'n8n': Code2,
      'Make': Code2
    };
    return iconMap[tech] || Code2;
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="font-inter text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of creative solutions and technical implementations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setFilter(option.id)}
              className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                filter === option.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Preview */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-space-grotesk text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-inter text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => {
                    const IconComponent = getTechIcon(tech);
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-inter hover:bg-gray-700 transition-colors duration-200"
                      >
                        <IconComponent className="w-3 h-3" />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-inter text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg font-inter text-sm font-medium hover:border-gray-500 hover:text-white transition-all duration-200">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Load More Projects */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 border border-gray-600 rounded-lg font-inter font-semibold hover:border-white hover:bg-white/5 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
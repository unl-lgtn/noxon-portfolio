import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Database, Container } from 'lucide-react';
import { mockProjects } from '../data/mock';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6 text-primary">
            Featured <span className="bg-gradient-to-r from-orange-primary to-orange-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="font-inter text-xl text-secondary max-w-2xl mx-auto">
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
                  ? 'bg-gradient-to-r from-orange-primary to-orange-secondary text-primary-foreground shadow-lg'
                  : 'bg-surface text-secondary hover:bg-surface-elevated hover:text-primary'
              }`}
              data-cursor={`Filter by ${option.label}`}
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
              onClick={() => openProjectModal(project)}
              className="group relative bg-surface-elevated backdrop-blur-sm rounded-xl border border-border overflow-hidden hover:border-orange-primary transition-all duration-500 hover:transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-orange-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-cursor="View details"
            >
              {/* Project Image/Preview */}
              <div className="relative h-48 bg-gradient-to-br from-surface to-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/20 to-orange-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-primary to-orange-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-surface-elevated/90 text-secondary rounded-full text-xs font-inter font-medium capitalize backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-space-grotesk text-xl font-bold mb-2 group-hover:text-orange-primary transition-colors duration-300 text-primary">
                    {project.title}
                  </h3>
                  <p className="font-inter text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => {
                    const IconComponent = getTechIcon(tech);
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-surface text-secondary rounded-full text-xs font-inter hover:bg-orange-primary/10 hover:text-orange-primary transition-colors duration-200"
                      >
                        <IconComponent className="w-3 h-3" />
                        {tech}
                      </span>
                    );
                  })}
                  {project.techStack.length > 4 && (
                    <span className="inline-flex items-center px-3 py-1 bg-surface text-muted rounded-full text-xs font-inter">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectModal(project);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-orange-primary text-primary-foreground rounded-lg font-inter text-sm font-medium hover:bg-orange-secondary transition-colors duration-200"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 border border-border text-secondary rounded-lg font-inter text-sm font-medium hover:border-orange-primary hover:text-orange-primary transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/5 to-orange-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Load More Projects */}
        <div className="text-center mt-12">
          <button 
            className="px-8 py-4 border border-border rounded-lg font-inter font-semibold hover:border-orange-primary hover:text-orange-primary hover:bg-surface transition-all duration-300 text-secondary"
            data-cursor="See more projects"
          >
            View All Projects
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </section>
  );
};

export default Projects;
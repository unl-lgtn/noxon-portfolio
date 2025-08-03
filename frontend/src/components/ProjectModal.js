import React from 'react';
import { X, ExternalLink, Github, Calendar, Users, Code2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const mockProjectDetails = {
    1: {
      fullDescription: "A comprehensive automation platform that revolutionizes business process management. Built with modern microservices architecture, this system integrates n8n's visual workflow builder with MongoDB's flexible document storage to create powerful, scalable automation solutions.",
      challenges: "Integrating multiple third-party APIs while maintaining data consistency and ensuring real-time processing capabilities.",
      solution: "Implemented event-driven architecture with Redis for caching and WebSocket connections for real-time updates.",
      timeline: "6 months",
      teamSize: "3 developers",
      screenshots: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      keyFeatures: [
        "Visual workflow designer with drag-and-drop interface",
        "Real-time process monitoring and analytics",
        "Multi-tenant architecture with role-based access",
        "RESTful API with comprehensive documentation",
        "Automated testing and deployment pipeline"
      ]
    },
    2: {
      fullDescription: "A robust containerization solution designed for modern portfolio deployment. This system automates the entire CI/CD pipeline from development to production, ensuring consistent environments across all stages.",
      challenges: "Creating a seamless deployment process that handles multiple environments with zero downtime.",
      solution: "Implemented blue-green deployment strategy with Docker Swarm orchestration and automated rollback capabilities.",
      timeline: "4 months",
      teamSize: "2 developers",
      screenshots: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      keyFeatures: [
        "Multi-stage Docker builds for optimized images",
        "Automated security scanning and vulnerability assessment",
        "Environment-specific configuration management",
        "Integrated monitoring with Prometheus and Grafana",
        "One-click deployment and rollback functionality"
      ]
    },
    3: {
      fullDescription: "An experimental showcase of cutting-edge UI/UX design principles, featuring advanced animations and interactions built with Next.js and modern web technologies.",
      challenges: "Balancing visual appeal with performance while maintaining accessibility standards.",
      solution: "Leveraged CSS-in-JS with optimized animations and progressive enhancement techniques.",
      timeline: "3 months",
      teamSize: "Solo project",
      screenshots: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      keyFeatures: [
        "Micro-interactions with smooth 60fps animations",
        "Responsive design with mobile-first approach",
        "Accessibility-compliant with WCAG 2.1 standards",
        "Performance optimized with lazy loading",
        "Component library with Storybook documentation"
      ]
    }
  };

  const details = mockProjectDetails[project.id] || {};

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="font-space-grotesk text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </DialogTitle>
              <p className="font-inter text-gray-600 dark:text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              
              {/* Project Stats */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{details.timeline || '3-6 months'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{details.teamSize || 'Solo project'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Code2 className="w-4 h-4" />
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Tech Stack */}
          <div>
            <h3 className="font-space-grotesk text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-inter font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Full Description */}
          {details.fullDescription && (
            <div>
              <h3 className="font-space-grotesk text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Project Overview
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
                {details.fullDescription}
              </p>
            </div>
          )}

          {/* Key Features */}
          {details.keyFeatures && (
            <div>
              <h3 className="font-space-grotesk text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {details.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Solution */}
          {details.challenges && details.solution && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-space-grotesk text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Challenges
                </h3>
                <p className="font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
                  {details.challenges}
                </p>
              </div>
              <div>
                <h3 className="font-space-grotesk text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Solution
                </h3>
                <p className="font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
                  {details.solution}
                </p>
              </div>
            </div>
          )}

          {/* Screenshots Placeholder */}
          <div>
            <h3 className="font-space-grotesk text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Project Screenshots
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(details.screenshots || ['/api/placeholder/600/400', '/api/placeholder/600/400']).map((screenshot, index) => (
                <div key={index} className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Code2 className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                    <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
                      Screenshot {index + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg font-inter font-medium hover:bg-orange-700 transition-colors duration-200">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-inter font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200">
              <Github className="w-4 h-4" />
              View Code
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
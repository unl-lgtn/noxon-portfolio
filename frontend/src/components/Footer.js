import React from 'react';
import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          {/* Main Footer Content */}
          <div className="space-y-4">
            <p className="font-inter text-secondary flex items-center justify-center gap-2">
              Made with 
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              by 
              <span className="font-space-grotesk font-semibold bg-gradient-to-r from-orange-primary to-orange-secondary bg-clip-text text-transparent hover:from-orange-secondary hover:to-orange-primary transition-all duration-300 cursor-pointer" data-cursor="That's me!">
                Noxon
              </span>
            </p>
            
            <div className="text-sm text-muted">
              © {currentYear} Noxon. All rights reserved.
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-surface-elevated text-secondary hover:bg-orange-primary/10 hover:text-orange-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
              data-cursor="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-surface-elevated text-secondary hover:bg-orange-primary/10 hover:text-orange-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
              data-cursor="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-surface-elevated text-secondary hover:bg-orange-primary/10 hover:text-orange-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
              data-cursor="Twitter Profile"
            >
              <Twitter className="w-5 h-5" />
            </a>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group p-3 rounded-full bg-surface-elevated text-secondary hover:bg-orange-primary/10 hover:text-orange-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
              data-cursor="Send me a message"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="pt-6 border-t border-border">
            <p className="text-xs text-muted max-w-2xl mx-auto leading-relaxed">
              Built with React, TailwindCSS, and lots of coffee. This portfolio is open source and available on GitHub.
              Feel free to fork it and make it your own!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
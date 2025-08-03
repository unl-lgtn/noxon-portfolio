import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import useScrollSpy from '../hooks/useScrollSpy';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(['about', 'projects', 'skills', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-surface-elevated/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-space-grotesk text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent hover:from-orange-primary hover:to-orange-secondary transition-all duration-300"
            >
              Noxon
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-inter hover:text-orange-primary hover:transform hover:-translate-y-0.5 transition-all duration-200 px-3 py-2 text-sm font-medium relative group ${
                    activeSection === item.id
                      ? 'text-orange-primary'
                      : 'text-secondary'
                  }`}
                >
                  {item.name}
                  <span className={`absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-orange-primary to-orange-secondary transition-transform duration-200 ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Social Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <div className="w-px h-6 bg-border"></div>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-orange-primary transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-orange-primary transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="text-muted hover:text-orange-primary transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted hover:text-orange-primary transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-surface-elevated/98 backdrop-blur-md border-b border-border shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-inter hover:text-orange-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-orange-primary'
                      : 'text-secondary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex space-x-4 px-3 py-2 border-t border-border mt-3 pt-3">
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-orange-primary transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-orange-primary transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-muted hover:text-orange-primary transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
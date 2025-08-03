import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    let animationId;
    let time = 0;

    const animate = () => {
      time += 0.01;
      if (blob) {
        blob.style.transform = `rotate(${time * 20}deg) scale(${1 + Math.sin(time) * 0.1})`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Enhanced Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={blobRef}
          className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20 dark:opacity-30"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path
              d="M47.1,-57.8C59.9,-45.2,68.5,-29.4,71.8,-12.2C75.1,5,73.1,23.6,65.6,38.7C58.1,53.8,45.1,65.4,29.8,69.8C14.5,74.2,-3.1,71.4,-19.3,65.9C-35.5,60.4,-50.3,52.2,-58.8,39.7C-67.3,27.2,-69.5,10.4,-67.2,-5.6C-64.9,-21.6,-58.1,-36.8,-47.2,-49.8C-36.3,-62.8,-21.3,-73.6,-4.1,-68.8C13.1,-64,29.3,-43.6,47.1,-57.8Z"
              fill="url(#blob-gradient)"
              className="animate-pulse"
            />
          </svg>
        </div>
        
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 opacity-15 dark:opacity-25 animate-pulse delay-300">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="blob-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <path
              d="M37.8,-52.7C47.3,-42.1,52.2,-27.9,54.8,-13.1C57.4,1.7,57.7,17.1,52.6,30.2C47.5,43.3,37,54.1,23.8,59.2C10.6,64.3,-5.3,63.7,-19.5,58.4C-33.7,53.1,-46.2,43.1,-53.4,30.2C-60.6,17.3,-62.5,1.5,-59.8,-12.8C-57.1,-27.1,-49.8,-39.9,-39.1,-50.2C-28.4,-60.5,-14.2,-68.3,1.1,-69.7C16.4,-71.1,28.3,-63.3,37.8,-52.7Z"
              fill="url(#blob-gradient-2)"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="space-y-8 animate-fadeInUp">
          <div className="space-y-4">
            <h1 className="font-space-grotesk text-6xl md:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                Noxon
              </span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>
          
          <p className="font-inter text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Full-Stack Developer & Creative Technologist
          </p>
          
          <p className="font-inter text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Crafting seamless digital experiences with React, Next.js, and modern web technologies. 
            Specializing in automation, DevOps, and imaginative user interfaces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button 
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-inter font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
            >
              View My Work
              <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
            
            <a 
              href="#contact"
              className="px-8 py-4 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-inter font-semibold hover:border-orange-500 hover:text-orange-500 dark:hover:border-orange-400 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
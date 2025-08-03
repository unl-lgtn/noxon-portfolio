import React, { useEffect, useRef } from 'react';

const FloatingElements = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.children;
    
    const animateElements = () => {
      Array.from(elements).forEach((element, index) => {
        const time = Date.now() * 0.001;
        const offset = index * 0.5;
        
        const x = Math.sin(time + offset) * 20;
        const y = Math.cos(time * 0.8 + offset) * 15;
        const rotation = Math.sin(time * 0.5 + offset) * 10;
        
        element.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
      });
      
      requestAnimationFrame(animateElements);
    };

    animateElements();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-sm"></div>
      </div>
      
      <div className="absolute top-3/4 right-1/4 w-24 h-24 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-lg rotate-45 blur-sm"></div>
      </div>
      
      <div className="absolute top-1/2 left-1/6 w-20 h-20 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 clip-triangle blur-sm"></div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/6 w-28 h-28 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-sm"></div>
      </div>

      <div className="absolute top-1/6 right-1/3 w-16 h-16 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg blur-sm"></div>
      </div>

      <div className="absolute bottom-1/3 left-1/3 w-36 h-36 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default FloatingElements;
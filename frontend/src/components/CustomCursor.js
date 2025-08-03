import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    
    if (!cursor || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const updateCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const updateTrail = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;
      
      trail.style.left = `${trailX}px`;
      trail.style.top = `${trailY}px`;
      
      requestAnimationFrame(updateTrail);
    };

    const handleMouseEnter = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovering(true);
        setCursorText(target.dataset.cursor || '');
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    
    updateTrail();

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] transition-all duration-300 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div 
          className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
            isHovering 
              ? 'border-orange-500 bg-orange-500/20' 
              : 'border-gray-400 dark:border-gray-500 bg-transparent'
          }`}
        />
        {cursorText && (
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded whitespace-nowrap">
            {cursorText}
          </div>
        )}
      </div>

      {/* Trail */}
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[9998] w-8 h-8 rounded-full bg-orange-500/10 dark:bg-orange-400/10 transition-all duration-500"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor;
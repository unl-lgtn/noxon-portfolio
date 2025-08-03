import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import FloatingElements from './components/FloatingElements';
import CustomCursor from './components/CustomCursor';
import { Toaster } from './components/ui/toaster';

function App() {
  useEffect(() => {
    // Apply initial theme based on system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#030712';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }

    // Hide default cursor on desktop
    if (window.innerWidth > 768) {
      document.body.style.cursor = 'none';
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white relative overflow-x-hidden transition-colors duration-300">
          {/* Custom Cursor (Desktop only) */}
          {window.innerWidth > 768 && <CustomCursor />}
          
          {/* Background Animations */}
          <BackgroundAnimation />
          <FloatingElements />
          
          <Navigation />
          <main className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
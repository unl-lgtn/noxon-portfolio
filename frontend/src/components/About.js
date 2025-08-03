import React from 'react';
import { MapPin, Clock, Heart } from 'lucide-react';
import { mockAbout } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6 text-primary">
            About <span className="bg-gradient-to-r from-orange-primary to-orange-secondary bg-clip-text text-transparent">Noxon</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-orange-primary to-orange-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-space-grotesk text-2xl font-bold text-primary">
                {mockAbout.title}
              </h3>
              <p className="font-inter text-lg text-secondary leading-relaxed">
                {mockAbout.bio}
              </p>
            </div>

            {/* Status Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-border">
                <MapPin className="w-5 h-5 text-orange-primary" />
                <div>
                  <div className="font-inter text-sm text-muted">Location</div>
                  <div className="font-inter text-primary font-medium">{mockAbout.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-border">
                <Clock className="w-5 h-5 text-green-500" />
                <div>
                  <div className="font-inter text-sm text-muted">Status</div>
                  <div className="font-inter text-primary font-medium">{mockAbout.availability}</div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h4 className="font-space-grotesk text-xl font-semibold text-primary">Key Highlights</h4>
              <ul className="space-y-3">
                {mockAbout.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-primary to-orange-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-secondary">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Interests & Visual */}
          <div className="space-y-8">
            {/* Interests */}
            <div className="bg-surface backdrop-blur-sm rounded-xl border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-red-500" />
                <h4 className="font-space-grotesk text-xl font-semibold text-primary">Current Interests</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {mockAbout.interests.map((interest, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-surface-elevated rounded-lg text-center border border-border hover:border-orange-primary hover:bg-orange-primary/5 transition-colors duration-200"
                  >
                    <span className="font-inter text-secondary text-sm font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-surface to-surface-elevated rounded-xl border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/10 to-orange-secondary/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-primary to-orange-secondary rounded-full mx-auto flex items-center justify-center">
                      <span className="font-space-grotesk text-2xl font-bold text-primary-foreground">N</span>
                    </div>
                    <div className="space-y-2">
                      <div className="font-space-grotesk text-lg font-bold text-primary">Creative Developer</div>
                      <div className="font-inter text-sm text-secondary">Building the future, one line at a time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-inter text-secondary mb-6">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-orange-primary to-orange-secondary rounded-lg font-inter font-semibold text-primary-foreground hover:from-orange-secondary hover:to-orange-primary transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-orange-primary/25"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
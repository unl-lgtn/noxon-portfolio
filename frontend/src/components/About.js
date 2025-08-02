import React from 'react';
import { MapPin, Clock, Heart } from 'lucide-react';
import { mockAbout } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Noxon</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-space-grotesk text-2xl font-bold text-white">
                {mockAbout.title}
              </h3>
              <p className="font-inter text-lg text-gray-300 leading-relaxed">
                {mockAbout.bio}
              </p>
            </div>

            {/* Status Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-inter text-sm text-gray-400">Location</div>
                  <div className="font-inter text-white font-medium">{mockAbout.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Clock className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-inter text-sm text-gray-400">Status</div>
                  <div className="font-inter text-white font-medium">{mockAbout.availability}</div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h4 className="font-space-grotesk text-xl font-semibold text-white">Key Highlights</h4>
              <ul className="space-y-3">
                {mockAbout.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Interests & Visual */}
          <div className="space-y-8">
            {/* Interests */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-red-400" />
                <h4 className="font-space-grotesk text-xl font-semibold text-white">Current Interests</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {mockAbout.interests.map((interest, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-gray-800/50 rounded-lg text-center border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                  >
                    <span className="font-inter text-gray-300 text-sm font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                      <span className="font-space-grotesk text-2xl font-bold text-white">N</span>
                    </div>
                    <div className="space-y-2">
                      <div className="font-space-grotesk text-lg font-bold text-white">Creative Developer</div>
                      <div className="font-inter text-sm text-gray-400">Building the future, one line at a time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-inter text-gray-400 mb-6">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-inter font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
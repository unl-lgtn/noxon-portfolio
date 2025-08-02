import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="font-inter text-gray-400 flex items-center justify-center gap-2">
            Made with 
            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
            by 
            <span className="font-space-grotesk font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Noxon
            </span>
          </p>
          <div className="mt-2 text-xs text-gray-500">
            © 2025 Noxon. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
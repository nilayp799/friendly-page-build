
import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay flex flex-col justify-center items-start">
        <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-end pb-32">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white uppercase mb-4">
              ZINDAGI KO YAS BOL
            </h2>
            <p className="text-lg md:text-xl text-white mb-8">
              Join the bwoys and say Yas to adventure, thrills, and fun!
            </p>
            <button className="flex items-center bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
              <span className="mr-2">BOOK PACKAGE</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="w-full mt-20">
            <div className="slide-indicators">
              <div className="slide-indicator active"></div>
              <div className="slide-indicator"></div>
              <div className="slide-indicator"></div>
              <div className="slide-indicator"></div>
              <div className="slide-indicator"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center">
          <p className="text-white uppercase tracking-widest text-sm font-semibold mb-2">EXPERIENCE YAS ISLAND</p>
          <ArrowDown className="text-white h-6 w-6 animate-bounce-slow" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

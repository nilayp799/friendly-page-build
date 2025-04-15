
import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

// Define slide content
const slides = [
  {
    title: "ZINDAGI KO YAS BOL",
    description: "Join the bwoys and say Yas to adventure, thrills, and fun!"
  },
  {
    title: "EXPERIENCE THRILLING RIDES",
    description: "Get your adrenaline pumping with world-class attractions at Yas Island"
  },
  {
    title: "RELAX IN LUXURY",
    description: "Enjoy premium accommodations with stunning views of the Arabian Gulf"
  },
  {
    title: "FAMILY ADVENTURES",
    description: "Create unforgettable memories with activities for all ages"
  },
  {
    title: "CULINARY DELIGHTS",
    description: "Savor exquisite dining experiences from around the world"
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Set up auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle manual slide change
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-section">
      <div className="hero-overlay flex flex-col justify-center items-start">
        <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-end pb-32">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white uppercase mb-4 animate-fade-in">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg md:text-xl text-white mb-8 animate-fade-in">
              {slides[currentSlide].description}
            </p>
            <button className="flex items-center bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
              <span className="mr-2">BOOK PACKAGE</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="w-full mt-20">
            <div className="slide-indicators">
              {slides.map((_, index) => (
                <div 
                  key={index}
                  className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => handleSlideChange(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  role="button"
                  tabIndex={0}
                />
              ))}
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

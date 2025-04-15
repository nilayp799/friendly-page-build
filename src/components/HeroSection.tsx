
import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

// Define slide content with images
const slides = [
  {
    title: "DIGITAL NOMAD ADVENTURES",
    description: "Work, explore, and connect in stunning locations around the world",
    image: "/lovable-uploads/photo-1526374965328-7f61d4dc18c5.jpg"
  },
  {
    title: "NATURE ESCAPES",
    description: "Discover tranquil landscapes and rejuvenating environments",
    image: "/lovable-uploads/photo-1500673922987-e212871fec22.jpg"
  },
  {
    title: "URBAN ARCHITECTURE",
    description: "Experience modern design and innovative cityscapes",
    image: "/lovable-uploads/photo-1493397212122-2b85dda8106b.jpg"
  },
  {
    title: "TECH & INNOVATION",
    description: "Explore cutting-edge technology and futuristic environments",
    image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b.jpg"
  },
  {
    title: "CREATIVE WORKSPACES",
    description: "Inspire your productivity in unique and dynamic settings",
    image: "/lovable-uploads/photo-1581091226825-a6a2a5aee158.jpg"
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
    <div 
      className="hero-section" 
      style={{ 
        backgroundImage: `url(${slides[currentSlide].image})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
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

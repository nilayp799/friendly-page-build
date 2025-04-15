
import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, MapPin, User, ShoppingBag } from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="mr-8">
            <img 
              src="https://yasisland.ae/etc.clientlibs/yasisland/clientlibs/client-adaptive-libs/resources/images/yas-logo-dsk-ltbg.svg" 
              alt="Yas Island Logo" 
              className="h-12" 
            />
          </a>
          <div className="hidden lg:flex space-x-8">
            <a href="#packages" className="text-white uppercase font-semibold tracking-wide text-sm nav-item">Packages & Offers</a>
            <a href="#things" className="text-white uppercase font-semibold tracking-wide text-sm nav-item">Things to Do</a>
            <a href="#stay" className="text-white uppercase font-semibold tracking-wide text-sm nav-item">Stay</a>
            <a href="#dine" className="text-white uppercase font-semibold tracking-wide text-sm nav-item">Dine</a>
            <a href="#events" className="text-white uppercase font-semibold tracking-wide text-sm nav-item">Events</a>
            <a href="#pass" className="text-white uppercase font-semibold tracking-wide text-sm nav-item">Yas Annual Pass</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="#booking" className="hidden md:flex items-center text-white text-sm font-medium">
            <ShoppingBag className="mr-1 h-4 w-4" />
            <span>MANAGE BOOKING</span>
          </a>
          <button className="text-white">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-white">
            <MapPin className="h-5 w-5" />
          </button>
          <button className="text-white">
            <User className="h-5 w-5" />
          </button>
          <div className="flex items-center text-white">
            <span className="mr-1 text-sm font-medium">EN</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

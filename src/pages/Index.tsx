
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import PackageSection from '../components/PackageSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PackageSection />
    </div>
  );
};

export default Index;

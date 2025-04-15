
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PackageCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="package-card bg-white rounded-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 uppercase">{title}</h3>
        <p className="text-gray-600 mb-6 text-sm">{description}</p>
        <button className="book-package-btn">
          BOOK PACKAGE
        </button>
      </div>
    </div>
  );
};

const PackageSection: React.FC = () => {
  const packages = [
    {
      title: "Spring Break on Yas",
      description: "Book your Stay & Play package now, including access to one record-breaking theme park of your choice for every night of your stay at one of our world-class hotels plus complimentary breakfast.",
      imageSrc: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800"
    },
    {
      title: "Abu Dhabi Comedy Season",
      description: "Packages for Abu Dhabi Comedy Season are here! Book our Vacation Package and enjoy a stay at one of our hotels, plus tickets to shows at Etihad Arena from 26 Apr to 12 Jul, featuring an all-star global lineup.",
      imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800"
    },
    {
      title: "UFC Fight Night",
      description: "UFC returns to Yas Island with UFC Fight Night on 26 Jul at Etihad Arena! Book the ultimate package including a stay at one of our world-class hotels plus Category 5, 6 or 7 tickets to UFC Fight Night.",
      imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800"
    },
    {
      title: "Mamma Mia Package",
      description: "Enjoy the timeless music of ABBA brought to life through a heartwarming story filled with love, laughter, and unforgettable melodies at Etihad Arena from 11-22 June.",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">OUR MOST POPULAR PACKAGES</h2>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-500 font-medium">1/2</span>
            <button className="rounded-full p-2 border border-gray-300">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="text-gray-600 max-w-3xl mb-12">
          <p>
            Get the most out of your Yas Island holiday with our exclusive packages, including a stay at the best hotels with our exciting Yas Island hotel offers and access to some of the most sought-after experiences on Yas Island.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard 
              key={index} 
              title={pkg.title} 
              description={pkg.description} 
              imageSrc={pkg.imageSrc} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageSection;

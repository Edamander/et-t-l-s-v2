
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary/5 via-white to-secondary/10">
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary rounded-full animate-float-delayed opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-secondary rounded-full animate-pulse-gentle opacity-50"></div>
      <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-primary rounded-full animate-float opacity-30"></div>

      <div className="text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
        <div className="mb-6 animate-float">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary font-semibold rounded-full text-sm mb-4">
            Professional Linguistic Services
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-primary">Expert Translation</span>
          <br />
          <span className="text-gray-700">&</span>
          <br />
          <span className="text-secondary">Language Services</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Bridging cultures through precise, professional translation and comprehensive linguistic solutions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-secondary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="w-6 h-6 text-primary cursor-pointer"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default HeroSection;

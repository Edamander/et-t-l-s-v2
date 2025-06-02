
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/10">
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full blur-3xl"></div>
        
        {/* Medium floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-secondary/30 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-primary/20 rounded-full animate-float-delayed opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-secondary/40 rounded-full animate-pulse-gentle opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-primary/30 rounded-full animate-float opacity-30"></div>
        
        {/* Geometric polygons */}
        <div className="absolute top-20 left-1/3 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[52px] border-l-transparent border-r-transparent border-b-secondary/20 animate-float opacity-40"></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-primary/20 transform rotate-45 animate-float-delayed opacity-30"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto px-4 animate-fade-in-up relative z-10">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown 
          className="w-6 h-6 text-primary cursor-pointer"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default HeroSection;

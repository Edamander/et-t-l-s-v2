
import React from 'react';
import FloatingHeader from '../components/FloatingHeader';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ResearchSection from '../components/ResearchSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ResearchSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">E.T. Transylvania Linguistic Solutions</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Translating Across Universes
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#research" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#services" className="hover:text-white transition-colors">Document Translation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Interpretation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Academic Translation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Business Solutions</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Consultation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Express Services</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2023 E.T. Transylvania Linguistic Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

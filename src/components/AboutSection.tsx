
import React from 'react';
import { Users, Award, Globe, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Native speakers and certified translators with years of experience"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous quality control processes ensure accuracy and consistency"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Supporting businesses and individuals across multiple languages and cultures"
    },
    {
      icon: BookOpen,
      title: "Research Focus",
      description: "Continuous improvement through linguistic research and methodology"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large background shapes */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-secondary/15 to-secondary/5 dark:from-secondary/25 dark:to-secondary/10 rounded-full blur-2xl"></div>
        
        {/* Decorative hexagons */}
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-secondary/10 dark:bg-secondary/20 transform rotate-12 rounded-lg"></div>
        <div className="absolute bottom-1/4 left-10 w-12 h-12 bg-primary/15 dark:bg-primary/25 transform -rotate-12 rounded-lg"></div>
        
        {/* Floating dots pattern */}
        <div className="absolute top-32 left-1/3 grid grid-cols-3 gap-2 opacity-20 dark:opacity-30">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            About <span className="text-primary">ET Linguistic</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            We are a dedicated team of linguistic professionals committed to breaking down language barriers 
            and facilitating seamless communication across cultures. Our expertise spans translation, 
            interpretation, and comprehensive language solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:animate-float group border border-gray-100 dark:border-gray-800"
            >
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors group-hover:animate-pulse-gentle">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white animate-fade-in-up relative overflow-hidden">
          {/* Background pattern for the mission card */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary rounded-full transform -translate-x-12 translate-y-12"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                To provide exceptional linguistic services that enable clear, accurate, and culturally 
                sensitive communication. We believe that language is the bridge that connects people, 
                ideas, and opportunities across the globe.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Professional Excellence</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Cultural Sensitivity</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Timely Delivery</span>
              </div>
            </div>
            <div className="relative group">
              <div className="w-full h-64 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center group-hover:animate-float-delayed transition-all duration-300">
                <Globe className="w-24 h-24 text-white opacity-60 group-hover:animate-pulse-gentle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

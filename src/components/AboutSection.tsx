
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-primary">ET Linguistic</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a dedicated team of linguistic professionals committed to breaking down language barriers 
            and facilitating seamless communication across cultures. Our expertise spans translation, 
            interpretation, and comprehensive language solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:animate-float group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:animate-pulse-gentle">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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

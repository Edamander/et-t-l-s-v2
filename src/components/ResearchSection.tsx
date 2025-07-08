
import React from 'react';
import { Microscope, TrendingUp, Database, PenTool } from 'lucide-react';

const ResearchSection = () => {
  const researchAreas = [
    {
      icon: Microscope,
      title: "Translation Studies",
      description: "Exploring advanced methodologies in translation theory and practice to enhance service quality."
    },
    {
      icon: TrendingUp,
      title: "Language Technology",
      description: "Investigating AI and machine learning applications in translation and interpretation services."
    },
    {
      icon: Database,
      title: "Corpus Linguistics",
      description: "Building and analyzing language corpora to improve translation accuracy and consistency."
    },
    {
      icon: PenTool,
      title: "Cultural Studies",
      description: "Researching cultural nuances and their impact on cross-cultural communication effectiveness."
    }
  ];

  return (
    <section id="research" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract geometric background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 via-transparent to-transparent dark:from-primary/10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/5 via-transparent to-transparent dark:from-secondary/10"></div>
        
        {/* Floating research-themed shapes */}
        <div className="absolute top-20 left-1/4 w-8 h-8 border-2 border-primary/30 dark:border-primary/40 rounded-full"></div>
        <div className="absolute top-40 right-1/3 w-6 h-6 border-2 border-secondary/30 dark:border-secondary/40 transform rotate-45"></div>
        <div className="absolute bottom-32 left-1/3 w-10 h-10 border-2 border-primary/20 dark:border-primary/30 rounded-full"></div>
        
        {/* DNA helix inspired pattern */}
        <svg className="absolute top-1/4 right-10 w-16 h-32 opacity-10 dark:opacity-20" viewBox="0 0 100 200">
          <path d="M20,0 Q50,50 80,100 Q50,150 20,200" stroke="#116F59" strokeWidth="3" fill="none"/>
          <path d="M80,0 Q50,50 20,100 Q50,150 80,200" stroke="#FF914D" strokeWidth="3" fill="none"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Research & <span className="text-primary">Innovation</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            We aim at advancing in the field of linguistics through dedicated research and innovative approaches 
            to language services and cross-cultural communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-xl p-8 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 animate-fade-in-up relative overflow-hidden border border-gray-100 dark:border-gray-800"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 dark:from-secondary/30 dark:to-primary/30 rounded-full transform translate-x-8 -translate-y-8"></div>
              
              <div className="flex items-start space-x-4 relative z-10">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 animate-float">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{area.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Publications & Contributions section removed as requested */}
      </div>
    </section>
  );
};

export default ResearchSection;

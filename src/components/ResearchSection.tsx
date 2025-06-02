
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
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research & <span className="text-primary">Innovation</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advancing the field of linguistics through dedicated research and innovative approaches 
            to language services and cross-cultural communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 animate-float">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Publications & Contributions
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our team regularly contributes to academic journals, conferences, and industry publications, 
                sharing insights and advancing the understanding of linguistic processes and translation methodologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-4 animate-pulse-gentle"></div>
                  <span className="text-gray-700">International Journal of Translation Studies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4 animate-pulse-gentle"></div>
                  <span className="text-gray-700">Conference on Applied Linguistics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-4 animate-pulse-gentle"></div>
                  <span className="text-gray-700">Cross-Cultural Communication Review</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 text-center animate-float-delayed">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600 mb-4">Research Papers Published</div>
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <div className="text-gray-600 mb-4">Conference Presentations</div>
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-gray-600">Years of Active Research</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;

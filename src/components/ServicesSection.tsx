
import React from 'react';
import { FileText, Mic, BookOpen, Briefcase, Users, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Document Translation",
      description: "Professional translation of legal, medical, technical, and business documents with certified accuracy.",
      features: ["Legal Documents", "Medical Reports", "Technical Manuals", "Business Contracts"]
    },
    {
      icon: Mic,
      title: "Interpretation Services",
      description: "Real-time interpretation for meetings, conferences, and events with skilled interpreters.",
      features: ["Conference Interpretation", "Business Meetings", "Medical Interpretation", "Court Interpretation"]
    },
    {
      icon: BookOpen,
      title: "Academic Translation",
      description: "Specialized translation for academic papers, research, and educational materials.",
      features: ["Research Papers", "Academic Texts", "Thesis Translation", "Educational Content"]
    },
    {
      icon: Briefcase,
      title: "Business Solutions",
      description: "Comprehensive language support for international business expansion and communication.",
      features: ["Marketing Materials", "Website Localization", "Business Communication", "International Expansion"]
    },
    {
      icon: Users,
      title: "Training & Consultation",
      description: "Language training programs and consultation services for organizations and individuals.",
      features: ["Language Training", "Cultural Consultation", "Communication Workshops", "Linguistic Analysis"]
    },
    {
      icon: Zap,
      title: "Express Services",
      description: "Fast-track translation and interpretation services for urgent requirements.",
      features: ["24-hour Delivery", "Rush Orders", "Emergency Interpretation", "Urgent Documents"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-primary/5 dark:from-gray-800 dark:to-primary/10 relative overflow-hidden transition-colors duration-300">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large curved background shapes */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-primary/5 to-secondary/10 dark:from-primary/10 dark:to-secondary/20 transform -skew-y-1"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-l from-secondary/5 to-primary/10 dark:from-secondary/10 dark:to-primary/20 transform skew-y-1"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-1/4 w-20 h-20 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/20 dark:bg-primary/30 transform rotate-45 blur-sm"></div>
        
        {/* Wave pattern */}
        <svg className="absolute top-1/2 left-0 w-full opacity-5 dark:opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#116F59"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Our <span className="text-secondary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Comprehensive linguistic solutions tailored to meet your specific needs, 
            from individual documents to large-scale international projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-full transform translate-x-10 -translate-y-10"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6 animate-float relative z-10">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse-gentle"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full py-3 border-2 border-primary text-primary dark:text-primary font-semibold rounded-lg hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-2xl inline-block animate-float-delayed relative overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300">
            {/* Decorative background for CTA */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Need a Custom Solution?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">We also provide tailored linguistic services for unique requirements.</p>
              <button className="px-8 py-3 bg-secondary text-white font-semibold rounded-full hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

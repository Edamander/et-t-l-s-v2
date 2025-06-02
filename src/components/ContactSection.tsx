
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "info@etlinguistic.com",
      subInfo: "We respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Professional Services Hub",
      subInfo: "Global reach, local expertise"
    },
    {
      icon: Clock,
      title: "Response Time",
      info: "Quick Turnaround",
      subInfo: "Most projects within 48hrs"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large organic shapes */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-secondary/15 to-secondary/5 rounded-full blur-3xl"></div>
        
        {/* Communication-themed decorations */}
        <div className="absolute top-20 right-20 w-16 h-16 border-4 border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-4 border-secondary/20 rounded-full"></div>
        
        {/* Message bubble shapes */}
        <div className="absolute top-1/3 left-10 w-8 h-8 bg-primary/20 rounded-full"></div>
        <div className="absolute top-1/3 left-20 w-6 h-6 bg-primary/15 rounded-full"></div>
        <div className="absolute top-1/3 left-28 w-4 h-4 bg-primary/10 rounded-full"></div>
        
        <div className="absolute bottom-1/3 right-10 w-8 h-8 bg-secondary/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-20 w-6 h-6 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-1/3 right-28 w-4 h-4 bg-secondary/10 rounded-full"></div>
        
        {/* Grid pattern */}
        <div className="absolute top-1/4 left-1/2 grid grid-cols-4 gap-2 opacity-10 transform -translate-x-1/2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className={`w-2 h-2 ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'} rounded-full`}></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your linguistic project? Contact us today for a free consultation 
            and discover how we can help bridge your communication needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:animate-float group relative overflow-hidden"
                >
                  {/* Card background decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full transform translate-x-8 -translate-y-8"></div>
                  
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors group-hover:animate-pulse-gentle relative z-10">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                    <p className="text-primary font-medium">{contact.info}</p>
                    <p className="text-sm text-gray-600">{contact.subInfo}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary/80 rounded-xl text-white hover:animate-float-delayed transition-all duration-300 group relative overflow-hidden">
              {/* Why choose us card decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full transform translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary rounded-full transform -translate-x-8 translate-y-8"></div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4">Why Choose ET Linguistic?</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Professional certified translators</li>
                  <li>• Fast turnaround times</li>
                  <li>• Competitive pricing</li>
                  <li>• Quality guarantee</li>
                  <li>• 24/7 customer support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              {/* Form background decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-sm"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div className="relative z-10">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="relative z-10">
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                  <option>Select a service</option>
                  <option>Document Translation</option>
                  <option>Interpretation Services</option>
                  <option>Academic Translation</option>
                  <option>Business Solutions</option>
                  <option>Training & Consultation</option>
                  <option>Express Services</option>
                </select>
              </div>
              
              <div className="relative z-10">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-secondary text-white font-semibold py-4 px-6 rounded-lg hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl relative z-10"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

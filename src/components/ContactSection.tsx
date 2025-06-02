
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
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 animate-float"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                    <p className="text-primary font-medium">{contact.info}</p>
                    <p className="text-sm text-gray-600">{contact.subInfo}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary/80 rounded-xl text-white animate-float-delayed">
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

          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-secondary text-white font-semibold py-4 px-6 rounded-lg hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
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

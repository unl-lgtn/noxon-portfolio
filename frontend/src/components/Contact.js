import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Clock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { mockContact } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="font-inter text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-space-grotesk text-2xl font-bold text-white">
                Let's Start a Conversation
              </h3>
              <p className="font-inter text-gray-300 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a specific project in mind or just want to connect, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-inter text-sm text-gray-400">Email</div>
                  <a 
                    href={`mailto:${mockContact.email}`}
                    className="font-inter text-white font-medium hover:text-blue-400 transition-colors duration-200"
                  >
                    {mockContact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Clock className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-inter text-sm text-gray-400">Response Time</div>
                  <div className="font-inter text-white font-medium">{mockContact.responseTime}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <MapPin className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="font-inter text-sm text-gray-400">Availability</div>
                  <div className="font-inter text-white font-medium">{mockContact.availability}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-space-grotesk text-lg font-semibold text-white">Connect Online</h4>
              <div className="flex gap-4">
                <a
                  href={mockContact.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-200 group"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  <span className="font-inter text-gray-300 group-hover:text-white">GitHub</span>
                </a>
                <a
                  href={mockContact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-200 group"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  <span className="font-inter text-gray-300 group-hover:text-white">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-inter text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg font-inter text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-inter text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg font-inter text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="font-inter text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg font-inter text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-inter text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg font-inter text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-inter font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
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
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6 text-primary">
            Get In <span className="bg-gradient-to-r from-orange-primary to-orange-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="font-inter text-xl text-secondary max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-space-grotesk text-2xl font-bold text-primary">
                Let's Start a Conversation
              </h3>
              <p className="font-inter text-secondary leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a specific project in mind or just want to connect, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-border">
                <Mail className="w-5 h-5 text-orange-primary" />
                <div>
                  <div className="font-inter text-sm text-muted">Email</div>
                  <a 
                    href={`mailto:${mockContact.email}`}
                    className="font-inter text-primary font-medium hover:text-orange-primary transition-colors duration-200"
                  >
                    {mockContact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-border">
                <Clock className="w-5 h-5 text-green-500" />
                <div>
                  <div className="font-inter text-sm text-muted">Response Time</div>
                  <div className="font-inter text-primary font-medium">{mockContact.responseTime}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-border">
                <MapPin className="w-5 h-5 text-orange-primary" />
                <div>
                  <div className="font-inter text-sm text-muted">Availability</div>
                  <div className="font-inter text-primary font-medium">{mockContact.availability}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-space-grotesk text-lg font-semibold text-primary">Connect Online</h4>
              <div className="flex gap-4">
                <a
                  href={mockContact.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded-lg hover:border-orange-primary hover:bg-orange-primary/5 transition-all duration-200 group"
                >
                  <Github className="w-5 h-5 text-secondary group-hover:text-orange-primary" />
                  <span className="font-inter text-secondary group-hover:text-primary">GitHub</span>
                </a>
                <a
                  href={mockContact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded-lg hover:border-orange-primary hover:bg-orange-primary/5 transition-all duration-200 group"
                >
                  <Linkedin className="w-5 h-5 text-secondary group-hover:text-orange-primary" />
                  <span className="font-inter text-secondary group-hover:text-primary">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface backdrop-blur-sm rounded-xl border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-inter text-sm font-medium text-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-surface-elevated border border-border rounded-lg font-inter text-primary placeholder-muted focus:border-orange-primary focus:ring-1 focus:ring-orange-primary transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-inter text-sm font-medium text-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-surface-elevated border border-border rounded-lg font-inter text-primary placeholder-muted focus:border-orange-primary focus:ring-1 focus:ring-orange-primary transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="font-inter text-sm font-medium text-primary">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-surface-elevated border border-border rounded-lg font-inter text-primary placeholder-muted focus:border-orange-primary focus:ring-1 focus:ring-orange-primary transition-colors duration-200"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-inter text-sm font-medium text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-surface-elevated border border-border rounded-lg font-inter text-primary placeholder-muted focus:border-orange-primary focus:ring-1 focus:ring-orange-primary transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-primary to-orange-secondary text-primary-foreground rounded-lg font-inter font-semibold hover:from-orange-secondary hover:to-orange-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
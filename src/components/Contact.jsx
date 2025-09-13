import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    // You can integrate with EmailJS, Netlify Forms, or your backend here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-25 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="backdrop-blur-[25px] backdrop-saturate-[180%] bg-bg-primary/40 border border-glass-border rounded-3xl p-6 md:p-12 my-10 shadow-[0_10px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(100,255,218,0.1)] hover:border-white/15">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>
        
        <p className="text-text-secondary text-lg md:text-xl mb-10 text-center">
          Let's work together
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mt-10">
          
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="form-group">
                <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-glass-border rounded-lg px-4 py-3 text-text-primary backdrop-blur-[10px] focus:outline-none focus:border-accent-primary focus:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-glass-border rounded-lg px-4 py-3 text-text-primary backdrop-blur-[10px] focus:outline-none focus:border-accent-primary focus:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-glass-border rounded-lg px-4 py-3 text-text-primary backdrop-blur-[10px] focus:outline-none focus:border-accent-primary focus:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300 resize-y"
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="btn btn-primary inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-xl no-underline font-semibold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-accent-primary to-green-400 text-bg-primary shadow-[0_4px_20px_rgba(100,255,218,0.3)] hover:shadow-[0_8px_30px_rgba(100,255,218,0.4)] hover:-translate-y-0.5 hover:scale-105 w-full sm:flex-1 justify-center"
                >
                  Send Message
                </button>
                
                <a
                  href="images/krish_Resume.pdf"
                  download="Krish_Maniyar_Resume.pdf"
                  className="btn btn-secondary inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl no-underline font-medium text-sm transition-all duration-300 bg-white/8 border border-white/20 text-text-primary backdrop-blur-[10px] hover:bg-white/12 hover:border-white/30 hover:-translate-y-0.5 w-full sm:flex-1 justify-center"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16L12 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 13L12 16L15 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Download Resume</span>
                </a>
              </div>
              
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info space-y-6">
            
            <div className="contact-item flex items-center gap-4 text-text-secondary">
              <div className="w-6 h-6 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span>krishmaniyar27@gmail.com</span>
            </div>
            
            <div className="contact-item flex items-center gap-4 text-text-secondary">
              <div className="w-6 h-6 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <span>+91 9429048002</span>
            </div>
            
            <div className="contact-item flex items-center gap-4 text-text-secondary">
              <div className="w-6 h-6 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span>Rajkot, Gujarat, India</span>
            </div>

            {/* Social Links */}
            <div className="social-links flex gap-5 mt-8">
              
              <a
                href="https://www.linkedin.com/in/krish-maniyar/"
                className="social-link w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-glass-bg border border-glass-border rounded-2xl transition-all duration-300 hover:bg-accent-primary/10 hover:-translate-y-1"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="https://github.com/krishmaniyar"
                className="social-link w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-glass-bg border border-glass-border rounded-2xl transition-all duration-300 hover:bg-accent-primary/10 hover:-translate-y-1"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a
                href="https://x.com/ManiyarKrish"
                className="social-link w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-glass-bg border border-glass-border rounded-2xl transition-all duration-300 hover:bg-accent-primary/10 hover:-translate-y-1"
                aria-label="Twitter/X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Contact;

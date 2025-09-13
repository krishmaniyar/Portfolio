import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="mt-25 bg-bg-primary/80 backdrop-blur-[20px] border-t border-glass-border/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-15 md:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-15 mb-10">
          
          {/* Footer Brand */}
          <div className="footer-brand text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-accent-primary mb-4">
              Krish Maniyar
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-sm mx-auto md:mx-0">
              Pre-final year CSE student passionate about building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Footer Links */}
          <div className="footer-links grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="footer-section text-center md:text-left">
              <h4 className="text-lg font-semibold text-text-primary mb-5">
                Quick Links
              </h4>
              <div className="space-y-3">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300 w-full md:w-auto text-center md:text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300 w-full md:w-auto text-center md:text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300 w-full md:w-auto text-center md:text-left"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300 w-full md:w-auto text-center md:text-left"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300 w-full md:w-auto text-center md:text-left"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="footer-section text-center md:text-left">
              <h4 className="text-lg font-semibold text-text-primary mb-5">
                Connect
              </h4>
              <div className="space-y-3">
                <a 
                  href="https://www.linkedin.com/in/krish-maniyar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/krishmaniyar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300"
                >
                  GitHub
                </a>
                <a 
                  href="https://x.com/ManiyarKrish" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300"
                >
                  Twitter
                </a>
                <a 
                  href="mailto:krishmaniyar27@gmail.com"
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="footer-section text-center md:text-left">
              <h4 className="text-lg font-semibold text-text-primary mb-5">
                Resources
              </h4>
              <div className="space-y-3">
                <a 
                  href="images/krish_Resume.pdf" 
                  download="Krish_Maniyar_Resume.pdf"
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300"
                >
                  Download Resume
                </a>
                <a 
                  href="tel:+919429048002"
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300"
                >
                  +91 9429048002
                </a>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-300 w-full md:w-auto text-center md:text-left"
                >
                  Back to Top
                </button>
              </div>
            </div>

          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4 text-center md:text-left">
          
          <div className="footer-copyright">
            <p className="text-text-secondary text-sm md:text-base m-0">
              &copy; 2025 Krish Maniyar. All rights reserved.
            </p>
          </div>

          <div className="footer-made-with">
            <p className="text-text-secondary text-sm md:text-base m-0 flex items-center justify-center md:justify-start gap-1">
              Made with <span className="text-red-500">❤️</span> using React & Tailwind CSS
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <>
      <header className="fixed top-7 left-1/2 transform -translate-x-1/2 z-[1000] backdrop-blur-[25px] backdrop-saturate-[180%] bg-bg-primary/60 border border-glass-border rounded-[50px] px-8 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]
      w-[95%] md:w-auto md:px-9 md:py-3 md:rounded-[50px]">
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav hidden md:flex gap-8 items-center">
          <button onClick={() => scrollToSection('hero')} className="nav-link text-text-secondary no-underline px-4 py-2 rounded-[25px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative font-medium text-sm hover:text-text-primary hover:bg-white/12 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link text-text-secondary no-underline px-4 py-2 rounded-[25px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative font-medium text-sm hover:text-text-primary hover:bg-white/12 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link text-text-secondary no-underline px-4 py-2 rounded-[25px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative font-medium text-sm hover:text-text-primary hover:bg-white/12 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link text-text-secondary no-underline px-4 py-2 rounded-[25px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative font-medium text-sm hover:text-text-primary hover:bg-white/12 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link text-text-secondary no-underline px-4 py-2 rounded-[25px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative font-medium text-sm hover:text-text-primary hover:bg-white/12 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            Contact
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="mobile-nav flex md:hidden justify-between items-center w-full">
          <div className="mobile-nav-brand font-bold text-xl text-accent-primary">
            <span>KM</span>
          </div>
          <button 
            onClick={toggleMenu}
            className={`hamburger-btn bg-transparent border-none p-2 flex flex-col gap-1 transition-transform duration-300 ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation"
          >
            <span className={`hamburger-line w-6 h-0.5 bg-text-primary rounded-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`hamburger-line w-6 h-0.5 bg-text-primary rounded-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`hamburger-line w-6 h-0.5 bg-text-primary rounded-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay fixed top-0 left-0 w-screen h-screen bg-bg-primary/95 backdrop-blur-[20px] z-[999] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="mobile-menu flex flex-col justify-center items-center h-full gap-10">
          <button onClick={() => scrollToSection('hero')} className="mobile-nav-link text-text-primary no-underline text-3xl font-semibold transition-all duration-300 relative hover:text-accent-primary hover:scale-105 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-accent-primary after:transition-all after:duration-300 hover:after:w-full">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link text-text-primary no-underline text-3xl font-semibold transition-all duration-300 relative hover:text-accent-primary hover:scale-105 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-accent-primary after:transition-all after:duration-300 hover:after:w-full">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="mobile-nav-link text-text-primary no-underline text-3xl font-semibold transition-all duration-300 relative hover:text-accent-primary hover:scale-105 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-accent-primary after:transition-all after:duration-300 hover:after:w-full">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="mobile-nav-link text-text-primary no-underline text-3xl font-semibold transition-all duration-300 relative hover:text-accent-primary hover:scale-105 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-accent-primary after:transition-all after:duration-300 hover:after:w-full">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="mobile-nav-link text-text-primary no-underline text-3xl font-semibold transition-all duration-300 relative hover:text-accent-primary hover:scale-105 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-accent-primary after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

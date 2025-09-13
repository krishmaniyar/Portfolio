import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center relative px-5 md:px-0">
      {/* Status Badge */}
      <div className="inline-flex items-center bg-green-500/15 text-green-400 px-5 py-2 rounded-[30px] border border-green-500/30 mb-8 md:mb-10 animate-pulse-glow font-semibold text-sm md:text-base backdrop-blur-[10px] shadow-[0_4px_20px_rgba(34,197,94,0.1)]">
        🟢 OPEN TO WORK
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 md:mb-8 bg-gradient-primary bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift animate-float tracking-tight">
        Krish Maniyar
      </h1>

      {/* Description */}
      <p className="text-base md:text-xl lg:text-2xl text-text-secondary max-w-2xl lg:max-w-4xl leading-relaxed animate-fadeInUp font-normal mb-8 md:mb-10 px-2">
        I'm a <strong>Pre-final year CSE student at VIT Vellore</strong> (CGPA: 9.28), enthusiastic about building ML projects with interactive UIs using Flutter and modern frontend technologies. I'm driven by curiosity for tech innovation and enjoy creating impactful, user-friendly applications.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center animate-fadeInUp w-full max-w-md sm:max-w-none">
        <a
          href="images/krish_Resume.pdf"
          download="Krish_Maniyar_Resume.pdf"
          className="btn btn-primary inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-xl no-underline font-semibold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-accent-primary to-green-400 text-bg-primary shadow-[0_4px_20px_rgba(100,255,218,0.3)] hover:shadow-[0_8px_30px_rgba(100,255,218,0.4)] hover:-translate-y-0.5 hover:scale-105 relative overflow-hidden text-sm md:text-base justify-center"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
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
    </section>
  );
};

export default Hero;

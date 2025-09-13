import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-25 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="backdrop-blur-[25px] backdrop-saturate-[180%] bg-bg-primary/40 border border-glass-border rounded-3xl p-6 md:p-12 my-10 shadow-[0_10px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(100,255,218,0.1)] hover:border-white/15">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center">
          About Me
        </h2>
        
        <p className="text-text-secondary text-lg md:text-xl mb-10 text-center">
          Passionate about building intuitive and impactful digital experiences
        </p>

        <div className="about-details space-y-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-text-primary">Experience</h3>
            
            <ul className="space-y-6 text-text-secondary leading-relaxed">
              <li className="border-l-2 border-accent-primary/30 pl-6">
                <div className="font-semibold text-text-primary text-lg">
                  Flutter App Developer Intern
                </div>
                <div className="text-accent-primary/80 mb-2">
                  Marwadi Shares & Finance Ltd. (May–Jun 2025)
                </div>
                <div>
                  Built a real-time chat application using <strong className="text-text-primary">Flutter, .NET Web API,</strong> and <strong className="text-text-primary">SignalR</strong>, enhancing seamless team communication.
                </div>
              </li>
              
              <li className="border-l-2 border-accent-primary/30 pl-6">
                <div className="font-semibold text-text-primary text-lg">
                  Core Committee Member
                </div>
                <div className="text-accent-primary/80 mb-2">
                  Centre for Social Entrepreneurship & Development (Apr 2024–Feb 2025)
                </div>
                <div>
                  Organized a large-scale technical event with <strong className="text-text-primary">200+ participants</strong>, leading efforts in logistics, promotion, and on-ground execution.
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-text-primary">Education</h3>
            
            <ul className="space-y-4 text-text-secondary leading-relaxed">
              <li className="border-l-2 border-accent-primary/30 pl-6">
                <div className="font-semibold text-text-primary text-lg">
                  B.Tech in Computer Science and Engineering
                </div>
                <div className="text-accent-primary/80 mb-2">
                  VIT Vellore (2023–2027)
                </div>
                <div>
                  <strong className="text-text-primary">CGPA:</strong> 9.28
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

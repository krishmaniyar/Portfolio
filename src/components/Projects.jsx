import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isExpanded, setIsExpanded] = useState(false);

  const filterCategories = [
    { key: 'all', label: 'All' },
    { key: 'ML Project', label: 'ML Projects' },
    { key: 'Mobile App', label: 'Mobile Apps' },
    { key: 'Web App', label: 'Web Apps' },
    { key: 'Web Game', label: 'Web Games' },
  ];

  useEffect(() => {
    const filtered = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
    setFilteredProjects(filtered);
    setIsExpanded(false); // Reset expansion when filter changes
  }, [activeFilter]);

  const handleFilterClick = (filterKey) => {
    setActiveFilter(filterKey);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      // Scroll to projects section when expanding
      document.getElementById('projects').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const shouldShowViewMore = filteredProjects.length > 6;
  const displayedProjects = shouldShowViewMore && !isExpanded 
    ? filteredProjects.slice(0, 6) 
    : filteredProjects;

  return (
    <section id="projects" className="py-20 md:py-25 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="backdrop-blur-[25px] backdrop-saturate-[180%] bg-bg-primary/40 border border-glass-border rounded-3xl p-6 md:p-12 my-10 shadow-[0_10px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(100,255,218,0.1)] hover:border-white/15">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center">
          Projects
        </h2>
        
        <p className="text-text-secondary text-lg md:text-xl mb-10 text-center">
          Some of my recent work
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-10">
          {filterCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => handleFilterClick(category.key)}
              className={`filter-btn px-4 py-2 md:px-5 md:py-2.5 rounded-lg border transition-all duration-300 font-medium text-sm md:text-base min-h-[40px] md:min-h-[44px]
                ${activeFilter === category.key
                  ? 'bg-accent-primary text-bg-primary border-accent-primary'
                  : 'border-glass-border bg-glass-bg text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {displayedProjects.map((project, index) => (
            <div
              key={`${project.name}-${index}`}
              className="project-card backdrop-blur-[20px] backdrop-saturate-[180%] bg-glass-bg border border-glass-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(100,255,218,0.15)] cursor-pointer max-w-md mx-auto lg:max-w-none"
            >
              <div className="project-image w-full h-48 bg-bg-secondary flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="project-content p-6">
                <h3 className="project-title text-lg md:text-xl font-semibold mb-2 text-accent-primary">
                  {project.name}
                </h3>
                
                <p className="project-category text-text-secondary text-sm md:text-base mb-4">
                  {project.category}
                </p>
                
                <p className="project-description text-text-secondary leading-relaxed mb-5">
                  {project.description}
                </p>
                
                <div className="project-links flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex items-center gap-2 px-4 py-2.5 rounded-xl no-underline font-semibold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-accent-primary to-green-400 text-bg-primary shadow-[0_4px_20px_rgba(100,255,218,0.3)] hover:shadow-[0_8px_30px_rgba(100,255,218,0.4)] hover:-translate-y-0.5 hover:scale-105 text-sm"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View Code</span>
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary inline-flex items-center gap-2 px-4 py-2.5 rounded-xl no-underline font-semibold transition-all duration-300 bg-white/8 border border-white/20 text-text-primary backdrop-blur-[10px] hover:bg-white/12 hover:border-white/30 hover:-translate-y-0.5 text-sm"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {shouldShowViewMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={toggleExpanded}
              className={`view-more-btn inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-xl bg-white/8 border border-white/20 text-text-primary backdrop-blur-[10px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white/12 hover:border-white/30 hover:-translate-y-0.5 ${isExpanded ? 'expanded' : ''}`}
            >
              <span>
                {isExpanded ? 'View Less Projects' : 'View More Projects'}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;

import React, { useState, useEffect } from 'react';
import { skills } from '../data/skills';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [isExpanded, setIsExpanded] = useState(false);

  const filterCategories = [
    { key: 'all', label: 'All' },
    { key: 'Programming', label: 'Programming' },
    { key: 'Machine Learning', label: 'ML & Data' },
    { key: 'Mobile Development', label: 'Mobile' },
    { key: 'Web Development', label: 'Web Dev' },
    { key: 'Frameworks', label: 'Frameworks' },
    { key: 'Cloud & DevOps', label: 'Cloud' },
    { key: 'Tools', label: 'Tools' },
  ];

  useEffect(() => {
    const filtered = activeFilter === 'all' 
      ? skills 
      : skills.filter(skill => skill.category === activeFilter);
    setFilteredSkills(filtered);
    setIsExpanded(false); // Reset expansion when filter changes
  }, [activeFilter]);

  const handleFilterClick = (filterKey) => {
    setActiveFilter(filterKey);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      // Scroll to skills section when expanding
      document.getElementById('skills').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const shouldShowViewMore = filteredSkills.length > 12;
  const displayedSkills = shouldShowViewMore && !isExpanded 
    ? filteredSkills.slice(0, 12) 
    : filteredSkills;

  return (
    <section id="skills" className="py-20 md:py-25 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="backdrop-blur-[25px] backdrop-saturate-[180%] bg-bg-primary/40 border border-glass-border rounded-3xl p-6 md:p-12 my-10 shadow-[0_10px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(100,255,218,0.1)] hover:border-white/15">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent text-center">
          Skills
        </h2>
        
        <p className="text-text-secondary text-lg md:text-xl mb-10 text-center">
          Technologies I work with
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10 px-2">
          {filterCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => handleFilterClick(category.key)}
              className={`skill-filter-btn px-4 py-2 md:px-5 md:py-2.5 rounded-lg border transition-all duration-300 font-medium text-sm md:text-base min-h-[40px] md:min-h-[44px] 
                ${activeFilter === category.key
                  ? 'bg-accent-primary text-bg-primary border-accent-primary'
                  : 'border-glass-border bg-glass-bg text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5 mt-5">
          {displayedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="skill-item backdrop-blur-[15px] bg-white/3 border border-glass-border rounded-2xl p-4 md:p-6 text-center transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:scale-105 hover:bg-accent-primary/8 hover:border-accent-primary/30 hover:shadow-[0_10px_30px_rgba(100,255,218,0.15)]"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 object-contain transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <p className="text-sm md:text-base font-semibold m-0 text-text-primary">
                {skill.name}
              </p>
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
                {isExpanded ? 'View Less Skills' : 'View More Skills'}
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

export default Skills;

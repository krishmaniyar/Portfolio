import React from 'react';

const CustomCursor = ({ cursorRef, cursorDotRef }) => {
  return (
    <>
      <div
        ref={cursorRef}
        className="cursor fixed w-7 h-7 border-2 border-accent-primary bg-transparent rounded-full pointer-events-none z-[10000] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out mix-blend-difference shadow-[0_0_0_2px_rgba(100,255,218,0.15),0_0_20px_rgba(100,255,218,0.35)] 
        hover:scale-[1.8] hover:border-white
        active:scale-90 active:bg-accent-primary
        hidden [@media(hover:hover)]:block"
        aria-hidden="true"
      />
      <div
        ref={cursorDotRef}
        className="cursor-dot fixed w-1.5 h-1.5 bg-accent-primary rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_rgba(100,255,218,0.8)]
        hidden [@media(hover:hover)]:block"
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;

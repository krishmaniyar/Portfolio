import React, { useEffect } from 'react';

const BackgroundBlobs = () => {
  useEffect(() => {
    const blobs = document.querySelectorAll('.blob');
    
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      blobs.forEach((blob, index) => {
        const speed = 0.5 + index * 0.1;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        
        blob.style.transform = `translate(${x}px, ${y}px) scale(${1 + (mouseX + mouseY) * 0.05})`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <div className="blob blob-1 absolute w-[300px] h-[300px] rounded-full blur-[40px] opacity-60 animate-float-blob top-[10%] left-[10%]" 
           style={{ 
             animationDelay: '0s',
             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
           }} />
      <div className="blob blob-2 absolute w-[200px] h-[200px] rounded-full blur-[40px] opacity-60 animate-float-blob top-[20%] right-[20%]" 
           style={{ 
             animationDelay: '-5s',
             background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
           }} />
      <div className="blob blob-3 absolute w-[250px] h-[250px] rounded-full blur-[40px] opacity-60 animate-float-blob bottom-[30%] left-[5%]" 
           style={{ 
             animationDelay: '-10s',
             background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
           }} />
      <div className="blob blob-4 absolute w-[180px] h-[180px] rounded-full blur-[40px] opacity-60 animate-float-blob bottom-[10%] right-[10%]" 
           style={{ 
             animationDelay: '-15s',
             background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
           }} />
      <div className="blob blob-5 absolute w-[220px] h-[220px] rounded-full blur-[40px] opacity-60 animate-float-blob top-[50%] right-[5%]" 
           style={{ 
             animationDelay: '-8s',
             background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
           }} />
      <div className="blob blob-6 absolute w-[160px] h-[160px] rounded-full blur-[40px] opacity-60 animate-float-blob bottom-[20%] left-[50%]" 
           style={{ 
             animationDelay: '-12s',
             background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
           }} />
    </div>
  );
};

export default BackgroundBlobs;

import React from "react";
import { useCursor } from './hooks/useCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundBlobs from './components/BackgroundBlobs';
import CustomCursor from './components/CustomCursor';

function App() {
  const { cursorRef, cursorDotRef } = useCursor();

  return (
    <div className="bg-bg-primary text-text-primary font-inter overflow-x-hidden relative min-h-screen">
      {/* Custom Cursor */}
      <CustomCursor cursorRef={cursorRef} cursorDotRef={cursorDotRef} />
      
      {/* Background Blobs */}
      <BackgroundBlobs />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

import { useEffect, useRef } from 'react';

export const useCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const cursorTarget = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Check if device supports hover (not a touch device)
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    if (isTouchDevice) {
      // Hide custom cursor elements on mobile
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      if (cursorDotRef.current) cursorDotRef.current.style.display = 'none';
      return;
    }

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    // Initialize positions
    cursorPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    dotPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    cursorTarget.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const updateCursor = () => {
      // Smooth follow for ring
      cursorPos.current.x += (cursorTarget.current.x - cursorPos.current.x) * 0.18;
      cursorPos.current.y += (cursorTarget.current.y - cursorPos.current.y) * 0.18;
      cursor.style.left = cursorPos.current.x + 'px';
      cursor.style.top = cursorPos.current.y + 'px';

      // Faster follow for center dot
      dotPos.current.x += (cursorTarget.current.x - dotPos.current.x) * 0.35;
      dotPos.current.y += (cursorTarget.current.y - dotPos.current.y) * 0.35;
      cursorDot.style.left = dotPos.current.x + 'px';
      cursorDot.style.top = dotPos.current.y + 'px';

      animationFrameId.current = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e) => {
      cursorTarget.current.x = e.clientX;
      cursorTarget.current.y = e.clientY;
    };

    const handleMouseDown = () => {
      cursor.classList.add('cursor--active');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('cursor--active');
    };

    const bindHoverStates = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, .btn, .nav-link, .filter-btn, .skill-filter-btn, .project-card, .skill-item, .view-more-btn, .mobile-nav-link, .hamburger-btn'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
      });
    };

    // Start animation
    updateCursor();
    bindHoverStates();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return { cursorRef, cursorDotRef };
};

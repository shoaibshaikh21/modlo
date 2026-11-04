import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, .cursor-pointer');
      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Wine Halo */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-crimson/50 pointer-events-none z-50 transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isPointer ? 1.6 : 1})`,
          backgroundColor: isPointer ? 'rgba(142, 41, 72, 0.15)' : 'transparent',
          boxShadow: isPointer ? '0 0 16px rgba(142, 41, 72, 0.4)' : 'none',
        }}
      />
      {/* Center Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cream pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </>
  );
};

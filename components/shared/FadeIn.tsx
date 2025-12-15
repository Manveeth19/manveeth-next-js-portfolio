// components/shared/FadeIn.tsx
"use client"; // This component needs client-side Hooks

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds (optional)
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '' }) => {

  // useInView monitors whether the element is currently visible
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Start animation when 10% of element is visible
  });

  const classes = `
    transition-all duration-700 ease-out 
    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    ${className}
  `;

  return (
    <div 
      ref={ref} 
      className={classes}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
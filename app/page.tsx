// app/page.tsx
"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Import critical above-fold sections normally
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';

// Lazy load below-fold sections for better performance
const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), {
  loading: () => <div className="py-20 md:py-32 flex items-center justify-center"><div className="text-gray-500 dark:text-gray-400 animate-pulse">Loading...</div></div>,
  ssr: true
});

const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'), {
  loading: () => <div className="py-20 md:py-32 flex items-center justify-center"><div className="text-gray-500 dark:text-gray-400 animate-pulse">Loading...</div></div>,
  ssr: true
});

const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  loading: () => <div className="py-20 md:py-32 flex items-center justify-center"><div className="text-gray-500 dark:text-gray-400 animate-pulse">Loading...</div></div>,
  ssr: true
});

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <div className="py-20 md:py-32 flex items-center justify-center"><div className="text-gray-500 dark:text-gray-400 animate-pulse">Loading...</div></div>,
  ssr: true
});

const Home: React.FC = () => {
  return (
    <main className="w-full">
      {/* 1. Hero - Load immediately */}
      <HeroSection />

      {/* 2. About - Load immediately */}
      <AboutSection />

      {/* 3-6. Below-fold sections - Lazy loaded for performance */}
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
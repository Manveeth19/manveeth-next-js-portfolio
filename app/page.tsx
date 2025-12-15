// app/page.tsx
import React from 'react';

// Import all your portfolio sections
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection'; 

// Renamed the component to 'Home' to align with Next.js conventions
const Home: React.FC = () => {
  return (
    // Use the semantic <main> tag for the primary content of the page
    <main className="w-full">
      
      {/* 1. Hero/Home Section */}
      <HeroSection />
      
      {/* 2. About Section */}
      <AboutSection /> 
      
      {/* 3. Skills Section */}
      <SkillsSection />
      
      {/* 4. Projects Section */}
      <ProjectsSection />
      
      {/* 5. Contact Section */}
      <ContactSection />
      
    </main>
  );
};

// Export the component as default, ready for rendering
export default Home;
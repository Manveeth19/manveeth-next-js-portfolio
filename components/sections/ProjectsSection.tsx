// components/sections/ProjectsSection.tsx
import React from 'react';
import ProjectCard, { Project } from '@/components/sections/ProjectCard';
import FadeIn from '@/components/shared/FadeIn';
import { bioData } from '@/constants/bioData';

const ProjectsSection: React.FC = () => {
  // Map bioData projects to the Project type expected by ProjectCard
  const projectList: Project[] = bioData.projects.map(project => ({
    title: project.title,
    description: project.description,
    tags: project.tech,
    githubUrl: project.url === '#' ? undefined : project.url,
    liveUrl: project.url,
  }));

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-100/50 border-t border-gray-200 dark:bg-gray-950/50 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* 1. STYLIZED SECTION HEADER (Wrapped in FadeIn) */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 relative inline-block">
              Featured Projects
              <span className="block absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-500 mt-6 dark:text-gray-400">
              A selection of my recent work showcasing different tech stacks.
            </p>
          </div>
        </FadeIn>

        {/* 2. PROJECTS GRID (Content is mapped over, individual cards are wrapped for stagger) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            // Apply FadeIn to EACH card with a staggered delay based on its index
            <FadeIn key={project.title} delay={100 + index * 100}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
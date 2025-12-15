// components/sections/ProjectsSection.tsx
import React from 'react';
// Assuming ProjectCard is now correctly located at '@/components/shared/ProjectCard'
import ProjectCard, { Project } from '@/components/sections/ProjectCard'; 
import FadeIn from '@/components/shared/FadeIn'; // <-- IMPORT the FadeIn component

// 1. Define your Project Data 
const projectList: Project[] = [
  {
    title: 'PDFPlay: All-in-One PDF Tools',
    description: 'A comprehensive full-stack platform offering various PDF editing and utility tools. Built for speed and reliability using React for the front-end and Node.js.',
    tags: ['React.js', 'Node.js', 'Firebase', 'Hostinger VPS'],
    githubUrl: 'https://github.com/manveeth/pdfplay-project',
    liveUrl: 'https://www.pdfplay.in',
  },
  {
    title: "Manveeth's Portfolio",
    description: 'The previous iteration of my portfolio, featuring advanced 3D components and complex user interfaces. Hosted on Netlify.',
    tags: ['React', 'Spline', 'React-bits', 'Netlify'],
    githubUrl: 'https://github.com/manveeth/old-portfolio',
    liveUrl: 'https://manveethreddy-portfolio.netlify.app',
  },
  {
    title: 'FitHub: Fitness Web App',
    description: 'Developed a cutting-edge Fitness Web Application utilizing Python, OpenCV, and MediaPipe for real-time exercise tracking and posture correction via live video analysis.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    githubUrl: 'https://github.com/manveeth/fithub-project',
    liveUrl: 'https://fithub-demo.vercel.app',
  },
  {
    title: 'Intelligent Book Recommender',
    description: 'Designed a Smart Library System to suggest personalized book recommendations based on user reading habits, leveraging Deep Learning (NCF) and Cosine Similarity.',
    tags: ['React', 'Python', 'Flask', 'Deep Learning', 'Pandas'],
    githubUrl: 'https://github.com/manveeth/book-recommender-system',
    liveUrl: 'https://fithub-demo.vercel.app',
  },
  {
    title: 'Modern Portfolio (Next.js & TSX)',
    description: 'The portfolio site you are viewing now, designed for speed and SEO using Next.js Server Components and Tailwind CSS.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Server Components'],
    githubUrl: 'https://github.com/manveeth/portfolio-nextjs',
    liveUrl: '/', 
  },
  // Note: The original 'Task Management App' project was omitted here to match the 5 projects in the provided list.
];


const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-100/50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* 1. STYLIZED SECTION HEADER (Wrapped in FadeIn) */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 relative inline-block">
              Featured Projects
              <span className="block absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-500 mt-6">
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
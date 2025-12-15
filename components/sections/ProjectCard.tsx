// components/shared/ProjectCard.tsx
import React from 'react';
import Link from 'next/link';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Define the type for the props this component expects
export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string; // Optional live URL
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    // 1. CARD STYLING: Stronger shadow, more rounded corners, and a lift-up hover effect
    <div className="bg-white rounded-xl shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full border border-gray-100">

      {/* Card Header/Title and Description */}
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-base flex-grow">{project.description}</p>
      </div>

      {/* 2. TAGS/TECH STACK: Clean border and slight increase in size */}
      <div className="px-7 py-4 border-t border-gray-100 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3.5 py-1 rounded-full border border-blue-200">
            {tag}
          </span>
        ))}
      </div>

      {/* 3. LINKS/ACTIONS: Bolder links and centered icons */}
      <div className="p-7 pt-4 border-t border-gray-100 mt-auto flex justify-start gap-6">
        {/* GitHub Link */}
        <Link 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          // Bolder text and hover color contrast
          className="flex items-center text-gray-800 hover:text-gray-900 font-bold transition duration-150 group"
        >
          <CodeBracketIcon className="w-5 h-5 mr-2 text-gray-600 group-hover:text-gray-900 transition-colors" />
          Code
        </Link>
        
        {/* Live Demo Link (Conditional) */}
        {project.liveUrl && (
          <Link 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            // Primary blue color, bold text
            className="flex items-center text-blue-600 hover:text-blue-700 font-bold transition duration-150 group"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2 text-blue-600 group-hover:text-blue-700 transition-colors" />
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
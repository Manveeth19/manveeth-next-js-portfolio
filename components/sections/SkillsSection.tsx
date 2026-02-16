// components/sections/SkillsSection.tsx
"use client";

import React, { memo } from 'react';
import FadeIn from '@/components/shared/FadeIn';

// 1. Define the type for a Skill object
interface Skill {
  name: string;
  level: string;
  category: 'Frontend' | 'Backend/Server' | 'Databases' | 'Data Science & ML' | 'Deployment & Tools';
  iconPath: string;
  color: string;
}

// 2. Define your complete Skill Data
const skillSet: Skill[] = [
  // --- FRONTEND ---
  { name: 'React', level: 'Expert', category: 'Frontend', iconPath: '', color: '#61DAFB' },
  { name: 'Next.js', level: 'Advanced', category: 'Frontend', iconPath: '', color: '#000000' },
  { name: 'TypeScript', level: 'Advanced', category: 'Frontend', iconPath: '', color: '#3178C6' },
  { name: 'Tailwind CSS', level: 'Expert', category: 'Frontend', iconPath: '', color: '#06B6D4' },
  { name: 'UI/UX Design', level: 'Proficient', category: 'Frontend', iconPath: '', color: '#9333EA' },
  { name: 'HTML', level: 'Proficient', category: 'Frontend', iconPath: '', color: '#E44D26' },
  { name: 'Javascript', level: 'Proficient', category: 'Frontend', iconPath: '', color: '#F7DF1E' },

  // --- BACKEND / SERVER ---
  { name: 'Node.js', level: 'Advanced', category: 'Backend/Server', iconPath: '', color: '#339933' },
  { name: 'Express.js', level: 'Advanced', category: 'Backend/Server', iconPath: '', color: '#000000' },
  { name: 'Convex', level: 'Advanced', category: 'Backend/Server', iconPath: '', color: '#FF6B00' },
  { name: 'Python/Flask', level: 'Proficient', category: 'Backend/Server', iconPath: '', color: '#3776AB' },
  { name: 'Java', level: 'Proficient', category: 'Backend/Server', iconPath: '', color: '#007396' },

  // --- DATABASES ---
  { name: 'MongoDB', level: 'Proficient', category: 'Databases', iconPath: '', color: '#47A248' },
  { name: 'SQL/PostgreSQL', level: 'Proficient', category: 'Databases', iconPath: '', color: '#336791' },
  { name: 'Firebase', level: 'Proficient', category: 'Databases', iconPath: '', color: '#FFCA28' },
  { name: 'Supabase', level: 'Proficient', category: 'Databases', iconPath: '', color: '#00C7B7' },

  // --- DATA SCIENCE & ML ---
  { name: 'Machine Learning', level: 'Advanced', category: 'Data Science & ML', iconPath: '', color: '#E91E63' },
  { name: 'Deep Learning', level: 'Advanced', category: 'Data Science & ML', iconPath: '', color: '#880E4F' },
  { name: 'OpenCV/MediaPipe', level: 'Advanced', category: 'Data Science & ML', iconPath: '', color: '#00BCD4' },
  { name: 'Pandas/NumPy', level: 'Expert', category: 'Data Science & ML', iconPath: '', color: '#FF7F00' },

  // --- DEPLOYMENT & TOOLS ---
  { name: 'Git/GitHub', level: 'Expert', category: 'Deployment & Tools', iconPath: '', color: '#181717' },
  { name: 'n8n', level: 'Advanced', category: 'Deployment & Tools', iconPath: '', color: '#EA4B71' },
  { name: 'Vercel', level: 'Advanced', category: 'Deployment & Tools', iconPath: '', color: '#000000' },
  { name: 'Firebase', level: 'Proficient', category: 'Deployment & Tools', iconPath: '', color: '#FFCA28' },
  { name: 'Netlify/Hostinger', level: 'Proficient', category: 'Deployment & Tools', iconPath: '', color: '#00C7B7' },
  { name: 'Chatbot Building', level: 'Advanced', category: 'Deployment & Tools', iconPath: '', color: '#8B5CF6' },
  { name: 'Docker', level: 'Familiar', category: 'Deployment & Tools', iconPath: '', color: '#2496ED' },
  { name: 'SEO', level: 'Proficient', category: 'Deployment & Tools', iconPath: '', color: '#F44336' },
  { name: 'Spline (3D UI)', level: 'Familiar', category: 'Deployment & Tools', iconPath: '', color: '#8A2BE2' },
];

// Group skills by category
const skillsByCategory = skillSet.reduce((acc, skill) => {
  acc[skill.category] = acc[skill.category] || [];
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<Skill['category'], Skill[]>);

// Memoize skill card component
const SkillCard = memo(({ skill }: { skill: Skill }) => (
  <div
    style={{ '--skill-color': skill.color } as React.CSSProperties}
    className="p-6 rounded-xl shadow-lg transition duration-300 transform border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800 dark:shadow-gray-900/50 dark:border-gray-700 hover:border-[var(--skill-color)] hover:shadow-[0_0_10px_0_var(--skill-color)] flex flex-col items-center text-center"
  >
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
      style={{ backgroundColor: `${skill.color}1A`, color: skill.color }}
    >
      <span className="font-bold text-lg">{'{}'}</span>
    </div>

    <p className="text-lg font-bold text-gray-800 dark:text-gray-100">{skill.name}</p>
    <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">{skill.level}</p>
  </div>
));

SkillCard.displayName = 'SkillCard';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white border-t border-gray-200 dark:bg-gray-950 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* HEADER */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 relative inline-block">
              Technical Skills & Stack
              <span className="block absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-500 mt-6 dark:text-gray-400">
              Technologies I use to build scalable applications.
            </p>
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <FadeIn key={category} delay={100 + categoryIndex * 150}>
              <div className="text-left">
                <h3 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 border-l-4 border-blue-600 pl-4 inline-block">
                  {category}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                  {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default memo(SkillsSection);
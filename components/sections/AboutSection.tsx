// components/sections/AboutSection.tsx
"use client"; // Retain 'use client' because FadeIn and SparkleButton are client components

import React from 'react';
import { AcademicCapIcon, RocketLaunchIcon, TrophyIcon, CodeBracketIcon } from '@heroicons/react/24/outline'; 
import FadeIn from '@/components/shared/FadeIn';
import { SparkleButton } from '@/components/ui/SparkleButton'; 
// REMOVED: import { GlowingCards, GlowingCard } from '@/components/ui/glowing-cards'; // <-- NO LONGER NEEDED

const AboutSection: React.FC = () => {
    // Shared classes for text color consistency
    const textGray800 = "text-gray-800 dark:text-gray-100";
    const textGray600 = "text-gray-600 dark:text-gray-400";
    const iconBlue = "text-blue-600 dark:text-blue-400";
    const achievementGray = "text-gray-700 dark:text-gray-300";

    // NEW STYLING: Shadow-based glow effect
    const baseCardClasses = "h-full p-8 bg-white dark:bg-gray-900 rounded-2xl transition duration-500 transform border border-gray-200 dark:border-gray-700";
    
    // Custom Shadow definitions (using a semi-transparent shadow for the glow)
    const glowShadowBlue = "shadow-xl hover:shadow-[0_0_20px_0_rgba(59,130,246,0.6)]"; // Blue shadow on hover
    const glowShadowPurple = "shadow-xl hover:shadow-[0_0_20px_0_rgba(139,92,246,0.6)]"; // Purple shadow on hover


  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 border-t border-gray-200 dark:bg-gray-950 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* 1. STYLIZED SECTION HEADER (FADE IN) */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 relative inline-block ${textGray800}`}>
              About Me
              <span className="block absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-500 mt-6 dark:text-gray-400">
              A little bit about my journey, expertise, and achievements.
            </p>
          </div>
        </FadeIn>
        
        {/* Main Content Area */}
        <div className="text-left space-y-8 text-gray-700 dark:text-gray-400">
          
          <FadeIn delay={100}>
            <p className="text-lg leading-relaxed text-center mx-auto max-w-3xl">
              I am a Highly motivated and results-driven Recent Graduate with a strong foundation in Software Engineering principles. I possess proven expertise in the modern Full-Stack MERN architecture, covering both Frontend (React.js, Next.js, JavaScript) and Backend (Node.js, SQL, MongoDB) development.
            </p>
          </FadeIn>

          {/* Card Container: Reverted to standard flexbox/grid layout */}
          <div className="flex flex-col md:flex-row gap-8 pt-8 items-stretch"> 
            
            {/* 3. MY BACKGROUND CARD (Blue Glow) */}
            <FadeIn className="md:w-1/2" delay={300}>
                <div 
                    className={`${baseCardClasses} ${glowShadowBlue} hover:border-blue-500 hover:-translate-y-1`} 
                >
                    <AcademicCapIcon className={`w-9 h-9 mb-3 mx-auto md:mx-0 ${iconBlue}`} />
                    <h3 className={`text-2xl font-bold mb-3 ${textGray800}`}>My Background</h3>
                    <p className={textGray600}>
                        I am a 2025 B.Tech (Information Technology) graduate with a CGPA of 7.5 from Guru Nanak Institute of Technology. My academics and personal projects strengthened my foundation in software engineering and modern web technologies such as HTML, CSS, JavaScript, and React.
                    </p>
                    
                    <div className={`flex items-center text-sm font-semibold mt-4 ${achievementGray}`}>
                        <TrophyIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                        Secured 3rd place in a Technical Seminar Competition.
                    </div>
                </div>
            </FadeIn>

            {/* 4. MY GOALS CARD (Purple Glow) */}
            <FadeIn className="md:w-1/2" delay={500}>
                <div 
                    className={`${baseCardClasses} ${glowShadowPurple} hover:border-purple-500 hover:-translate-y-1`} 
                >
                    <RocketLaunchIcon className={`w-9 h-9 mb-3 mx-auto md:mx-0 ${iconBlue}`} />
                    <h3 className={`text-2xl font-bold mb-3 ${textGray800}`}>My Goals</h3>
                    <p className={textGray600}>
                        I am passionate about full-stack development, from designing intuitive front-ends to architecting robust back-ends. My goal is to leverage my skills in JavaScript and Java to build impactful software solutions and continuously learn emerging and scalable Web Technologies.
                    </p>
                    
                    <div className={`flex items-center text-sm font-semibold mt-4 ${achievementGray}`}>
                        <CodeBracketIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                        Solved 100+ problems on LeetCode.
                    </div>
                </div>
            </FadeIn>
          </div>

          {/* 5. RESUME BUTTON */}
          <FadeIn delay={600}>
            <div className="text-center pt-12">
              <SparkleButton
                href="/Manveeth_Reddy.pdf" 
                text="Download My Resume"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
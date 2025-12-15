// components/sections/HeroSection.tsx
import React from 'react';
import Image from 'next/image'; 
import FadeIn from '@/components/shared/FadeIn'; 
import { GradientButton } from '@/components/ui/gradient-button'; 
import NeumorphismButton from '@/components/ui/NeumorphismButton'; 
import TypingTitle from '@/components/ui/TypingTitle'; 
import LightRays from '@/components/LightRays'; // <-- IMPORT LightRays (assuming path)

const HeroSection: React.FC = () => {
    
    const animatedName = "Manveeth Reddy";

    return (
        // FIX: Added 'relative' to the section and 'overflow-hidden' for the absolute background to work
        <section id="home" className="relative pt-16 pb-20 md:pt-28 md:pb-32 flex items-center justify-center bg-gray-50/50 border-b border-gray-200 dark:bg-gray-900/50 dark:border-gray-800 overflow-hidden">
            
            {/* 1. LIGHT RAYS BACKGROUND (Absolute Positioned) */}
            <LightRays
                raysOrigin="top-center"
                raysColor="#0284c7" // Blue color for the light rays
                raysSpeed={0.5}
                lightSpread={0.8}
                rayLength={3}
                mouseInfluence={0.05}
                pulsating={true}
                // Adjust opacity/intensity based on the theme for visibility
                className="opacity-70 dark:opacity-40" 
            />

            {/* 2. CONTENT (Needs z-index set to z-10 or higher to sit above the light rays) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

                {/* 👇 START: Left Column (Text Content) wrapped in FadeIn with delay */}
                <FadeIn className="md:w-1/2 text-center md:text-left" delay={100}>
                    
                    <p className="text-xl text-blue-600 font-semibold mb-2 tracking-wide">Hello, I'm</p>
                    
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight dark:text-gray-100">
                        <TypingTitle text={animatedName} speed={70} className="inline" />
                    </h1>
                    
                    <h2 className="text-2xl md:text-4xl font-extrabold text-blue-700 mt-4 mb-6 dark:text-blue-400">
                        Full-Stack Developer | MERN Stack Enthusiast
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed dark:text-gray-400">
                        I build scalable web applications and intuitive user experiences. Passionate about solving real-world problems using modern technologies like React js or Next js, Node.js, and Database.
                    </p>
                    
                    <div className="flex items-end space-x-4"> 
                        <GradientButton asChild>
                            <a href="#projects" className="font-bold">
                                View Projects
                            </a>
                        </GradientButton>

                        <NeumorphismButton href="#contact">
                            Get In Touch
                        </NeumorphismButton>
                    </div>
                </FadeIn>
                {/* 👆 END: Left Column */}


                {/* 👇 START: Right Column (Image) wrapped in FadeIn with delay */}
                <FadeIn className="md:w-1/3 mt-10 md:mt-0 relative flex justify-center" delay={300}>
                    <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-full overflow-hidden shadow-2xl shadow-blue-200/50 mx-auto border-4 border-blue-600/50 transform hover:scale-[1.02] transition-transform duration-300 dark:bg-gray-800 dark:shadow-blue-900/30">
                        <Image 
                            src="/Manveeth2.jpg"
                            alt="Manveeth Reddy Profile" 
                            width={320} 
                            height={320} 
                            style={{ objectFit: 'cover' }}
                            className="w-full h-full"
                            priority={true} 
                        />
                    </div>
                </FadeIn>
                {/* 👆 END: Right Column */}

            </div>
        </section>
    );
};

export default HeroSection;
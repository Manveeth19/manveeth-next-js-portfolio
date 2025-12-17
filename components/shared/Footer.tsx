// components/shared/Footer.tsx
"use client"; 

import React from 'react'; 
// Import the Hyperspeed component and presets from where shadcn placed them
// Assuming they are directly under 'components/'
import Hyperspeed from '@/components/Hyperspeed'; 
import { hyperspeedPresets } from '@/components/HyperSpeedPresets'; 

const Footer: React.FC = () => {
    
    // We use the 'one' preset for the Hyperspeed animation.
    const hyperspeedConfig = hyperspeedPresets.one;
    
    return (
        // The relative class and min-height are essential for the Hyperspeed background
        <footer 
            className="relative py-12 bg-gray-950 text-gray-300 border-t border-gray-800 overflow-hidden min-h-[200px]"
        >
            
            {/* 1. HYPERSPEED BACKGROUND (Client Component) */}
            {/* Positioned absolutely to fill the footer and set to z-0 (behind content) */}
            <div className="absolute inset-0 z-0">
                <Hyperspeed 
                    effectOptions={hyperspeedConfig}
                />
            </div>

            {/* 2. FOOTER CONTENT (Needs z-index to sit above the animation) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <p className="text-sm">
                    Designed and Developed by Manveeth Reddy
                </p>
                <p className="text-xs mt-2 text-gray-500">
                    Built with Next.js, TypeScript, and Tailwind CSS. Animation powered by three.js/Hyperspeed.
                </p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a 
                        href="https://github.com/manveeth19" 
                        target="_blank" 
                        className="text-gray-400 hover:text-blue-500 transition duration-300"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://linkedin.com/in/manveeth-reddy-3b6292256" 
                        target="_blank" 
                        className="text-gray-400 hover:text-blue-500 transition duration-300"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
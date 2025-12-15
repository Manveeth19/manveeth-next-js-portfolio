// components/shared/Footer.tsx
"use client"; 

import React from 'react'; // Only need React here, removed useState, useRef, useCallback
// REMOVED: import Particles from '@/components/Particles'; 

const Footer: React.FC = () => {
    // REMOVED: mousePos state, footerRef, and particleColors array
    
    // REMOVED: handleMouseMove function
    
    return (
        // Removed ref={footerRef} and onMouseMove={handleMouseMove} from the footer tag
        <footer 
            className="relative py-12 bg-gray-950 text-gray-300 border-t border-gray-800 overflow-hidden"
        >
            
            {/* 1. PARTICLES BACKGROUND - REMOVED! */}
            {/* The content below is now the only element inside the footer */}

            {/* 2. FOOTER CONTENT (Now the primary content) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <p className="text-sm">
                    Designed and Developed by Manveeth Reddy
                </p>
                <p className="text-xs mt-2 text-gray-500">
                    Built with Next.js, TypeScript, and Tailwind CSS.
                </p> {/* Removed "WebGL effects powered by OGL" line since it's now gone */}
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
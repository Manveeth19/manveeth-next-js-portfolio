// components/ui/HamburgerMenuOverlay.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline'; 
import { useTheme } from '@/components/shared/ThemeProvider'; 

interface NavItem {
    name: string;
    href: string;
}

interface HamburgerMenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: NavItem[];
    activeId: string; // <-- ADDED PROP
}

const HamburgerMenuOverlay: React.FC<HamburgerMenuOverlayProps> = ({ isOpen, onClose, navItems, activeId }) => { // <-- ACCEPT PROP
    const { theme } = useTheme();
    
    // Helper function to check if the current link is the active one
    const isActive = (href: string) => href.substring(1) === activeId;

    return (
        // ... (Overlay structure remains the same) ...
        <div 
            className={`
                fixed inset-0 transform transition-transform duration-500 ease-in-out z-40 
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                bg-gray-50/95 backdrop-blur-md 
                dark:bg-gray-950/95
            `}
            onClick={onClose}
        >
            <div 
                className="w-full h-full pt-20 px-6 relative" 
                onClick={(e) => e.stopPropagation()} 
            >
                {/* 1. Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-700 hover:text-blue-600 transition duration-200 p-2 rounded-md dark:text-gray-300 dark:hover:text-blue-400"
                    aria-label="Close Menu"
                >
                    <XMarkIcon className="w-8 h-8" />
                </button>

                {/* 2. Menu Links Container (The 'Card Background') */}
                <div 
                    className="
                        mt-10 p-6 rounded-2xl shadow-2xl border border-gray-200 
                        bg-white/90 dark:bg-gray-900 dark:border-gray-800
                        transition duration-300
                    "
                >
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => {
                            const active = isActive(item.href); // Check active state
                            return (
                                <Link 
                                    key={item.name} 
                                    href={item.href} 
                                    onClick={onClose}
                                    className={`
                                        text-2xl font-bold p-3 rounded-lg transition duration-200
                                        
                                        ${active 
                                            ? 'bg-blue-600 text-white dark:bg-blue-700' // ACTIVE STATE: Solid Blue button
                                            : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-blue-400' // INACTIVE STATE
                                        }
                                    `}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenuOverlay;
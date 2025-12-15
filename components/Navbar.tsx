// components/Navbar.tsx
"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'; 
import { useTheme } from '@/components/shared/ThemeProvider'; 
import HamburgerMenuOverlay from '@/components/ui/HamburgerMenuOverlay'; 
import useScrollSpy from '@/hooks/useScrollSpy'; // <-- IMPORT THE HOOK

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme(); 

    // Extract section IDs from navItems (e.g., ['home', 'about', ...])
    const sectionIds = navItems.map(item => item.href.substring(1));
    // Use the hook to get the active section ID
    const activeId = useScrollSpy(sectionIds, 'home'); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenuAndNavigate = () => {
        setIsOpen(false);
    };

    // Helper function to check if the current link is the active one
    const isActive = (href: string) => href.substring(1) === activeId;


  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100 z-50 dark:bg-gray-900/90 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* LOGO */}
        <Link href="#home" className="flex items-center" onClick={closeMenuAndNavigate}>
            <span className="text-2xl font-black text-blue-700 tracking-wide hover:text-blue-800 transition duration-200 cursor-pointer">
              Manveeth Reddy
            </span>
        </Link>
        
        <div className="flex items-center space-x-4">
            {/* DESKTOP LINKS (Shadcn Tab Style) */}
            <div className="hidden md:flex space-x-1 justify-center rounded-lg bg-gray-100 p-0.5 text-gray-700 dark:bg-gray-800">
              {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link 
                      key={item.name} 
                      href={item.href} 
                      className={`
                        inline-flex items-center justify-center whitespace-nowrap 
                        rounded-md px-3 py-1.5 text-sm font-medium transition-all
                        
                        ${active 
                            ? 'bg-white text-blue-600 shadow-sm shadow-black/5 dark:bg-gray-700 dark:text-blue-400' // ACTIVE STATE: Blue text, white/gray background
                            : 'hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400' // INACTIVE STATE
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  );
              })}
            </div>

            

            {/* MOBILE MENU ICON */}
            <div className="md:hidden">
                <button 
                    onClick={toggleMenu}
                    className="text-gray-700 hover:text-blue-600 transition duration-200 p-2 rounded-md dark:text-gray-300 dark:hover:text-blue-400"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </button>
            </div>
        </div>
      </div>
      
      {/* HAMBURGER MENU OVERLAY: Pass the activeId state for styling mobile links */}
      <HamburgerMenuOverlay 
        isOpen={isOpen}
        onClose={closeMenuAndNavigate}
        navItems={navItems}
        activeId ={activeId} // <-- PASS ACTIVE ID
      />
    </nav>
  );
};

export default Navbar;
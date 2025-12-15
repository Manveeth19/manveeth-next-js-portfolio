// components/sections/ContactSection.tsx
"use client"; // ADD THIS LINE TO MAKE IT A CLIENT COMPONENT

import React from 'react';
import { EnvelopeIcon, MapPinIcon, DevicePhoneMobileIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import FadeIn from '@/components/shared/FadeIn';

const ContactSection: React.FC = () => {
    // Shared classes for consistent card style and hover effect
    const cardClasses = "h-full p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 block border border-blue-50";

    return (
        <section  id="contact" className="py-20 md:py-32 bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* STYLIZED SECTION HEADER (FADE IN) */}
                <FadeIn delay={0}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 relative inline-block">
                            Get In Touch
                            <span className="block absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
                        </h2>
                        <p className="text-xl text-gray-500 mt-6">
                            I'm currently seeking new opportunities. Let's build something great!
                        </p>
                    </div>
                </FadeIn>

                {/* CONTACT LINKS GRID: Added items-stretch and applied shared card classes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
                    
                    {/* Email Card (FADE IN 1 - INTERACTIVE) */}
                    <FadeIn delay={100}>
                        <a href="mailto:manveethreddyadumala@gmail.com" className={cardClasses}>
                            <EnvelopeIcon className="w-9 h-9 text-blue-600 mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-gray-800">Email Me</h3>
                            <p className="text-gray-500 mt-1 break-all">manveethreddyadumala@gmail.com</p>
                        </a>
                    </FadeIn>

                    {/* Phone Card (FADE IN 2 - INTERACTIVE) */}
                    <FadeIn delay={250}>
                        <a href="tel:+917330942684" className={cardClasses}>
                            <DevicePhoneMobileIcon className="w-9 h-9 text-blue-600 mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-gray-800">Call/Text</h3>
                            <p className="text-gray-500 mt-1">(+91) 73309 42684</p>
                        </a>
                    </FadeIn>

                    {/* Location Card (FADE IN 3 - INTERACTIVE) */}
                    <FadeIn delay={400}>
                        {/* The onClick handler is now valid because ContactSection is a Client Component */}
                        <a href="#" onClick={(e) => e.preventDefault()} className={cardClasses}>
                            <MapPinIcon className="w-9 h-9 text-blue-600 mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-gray-800">Location</h3>
                            <p className="text-gray-500 mt-1">Hyderabad, India</p>
                        </a>
                    </FadeIn>
                </div>
                
                {/* EXTERNAL LINKS */}
                <FadeIn delay={550}>
                    <div className="pt-8 flex justify-center space-x-10">
                        <Link 
                            href="https://linkedin.com/in/manveeth-reddy-3b6292256"
                            target="_blank" 
                            className="flex items-center text-xl text-blue-600 hover:text-blue-800 font-bold transition duration-200"
                        >
                            LinkedIn
                            <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                        </Link>
                        <Link 
                            href="https://github.com/manveeth19" 
                            target="_blank" 
                            className="flex items-center text-xl text-blue-600 hover:text-blue-800 font-bold transition duration-200"
                        >
                            GitHub
                            <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default ContactSection;
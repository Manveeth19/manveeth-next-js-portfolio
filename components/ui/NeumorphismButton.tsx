// components/ui/NeumorphismButton.tsx
import React from 'react';
import { FiSend } from "react-icons/fi"; // Ensure react-icons is installed
import Link from 'next/link';

interface NeumorphismButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NeumorphismButton: React.FC<NeumorphismButtonProps> = ({ href, children, className }) => {
    return (
        <Link 
            href={href}
            className={`
                // Reduced horizontal padding from px-8 to px-5
                px-5 py-3.5 rounded-full 
                flex items-center justify-center gap-2 
                text-gray-700 
                font-semibold
                
                // Neumorphism Shadows (These assume a light gray background like gray-50)
                shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.1)]
                
                transition-all duration-300

                // Pressed/Active State Hover Effect
                hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.15),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.2)]
                hover:text-blue-600
                ${className || ''}
            `}
        >
            <FiSend className="w-4 h-4" /> 
            <span>{children}</span>
        </Link>
    );
};

export default NeumorphismButton;
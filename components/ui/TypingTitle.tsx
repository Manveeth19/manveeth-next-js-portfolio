// components/ui/TypingTitle.tsx (Updated)
"use client";

import React, { useState, useEffect } from 'react';

interface TypingTitleProps {
    text: string;
    speed: number; 
    className?: string;
}

const TypingTitle: React.FC<TypingTitleProps> = ({ text, speed, className }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (!text) return;

        let index = 0;

        const timer = setInterval(() => {
            if (index < text.length) {
                // Ensure we use the functional update form for safety
                setDisplayedText(text.substring(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, speed);

        // Cleanup function
        return () => clearInterval(timer);
    }, [text, speed]);

    return (
        <span className={className}>
            {displayedText}
        </span>
    );
};

export default TypingTitle;
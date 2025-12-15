// components/ui/glowing-cards.tsx
"use client";

import React, { HTMLAttributes } from 'react';
import { cn } from "@/lib/utils"; // Assumes cn utility is available

// --- GLOWING CARD COMPONENT ---

interface GlowingCardProps extends HTMLAttributes<HTMLDivElement> {
    glowColor?: string;
    className?: string;
    children?: React.ReactNode;
}

const GlowingCard: React.FC<GlowingCardProps> = ({
    glowColor = '#3b82f6', // Default to a blue
    className,
    children,
    ...props
}) => {
    // CSS variable injection for the glow color
    const style = {
        '--glow-color': glowColor,
    } as React.CSSProperties;

    return (
        <div
            className={cn(
                "relative p-px rounded-xl overflow-hidden transition-all duration-300",
                "bg-white dark:bg-gray-900 border border-transparent", // Base background
                "shadow-lg hover:shadow-xl dark:shadow-gray-900/50", // Base shadow
                // Main effect: The ::before pseudo-element creates the glow
                "before:absolute before:inset-0 before:z-0 before:opacity-0 before:transition-opacity before:duration-500",
                "before:bg-radial-gradient before:from-[var(--glow-color)] before:to-transparent",
                "hover:before:opacity-70",
                className
            )}
            style={style}
            {...props}
        >
            {/* Inner Content Wrapper */}
            <div className="relative z-10 h-full p-8 rounded-[calc(0.75rem-1px)] bg-white dark:bg-gray-900">
                {children}
            </div>
        </div>
    );
};

// --- GLOWING CARDS CONTAINER ---

interface GlowingCardsProps extends HTMLAttributes<HTMLDivElement> {
    enableGlow?: boolean; // Controls hover effect (always true here for simplicity)
    glowRadius?: number; // Not directly used in this simplified version but good for prop parity
    glowOpacity?: number;
    animationDuration?: number;
    gap?: string;
    responsive?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const GlowingCards: React.FC<GlowingCardsProps> = ({
    gap = '3rem',
    className,
    children,
    ...props
}) => {
    // Pass responsive grid classes through className
    return (
        <div
            className={cn(
                // Base grid layout for the cards
                "grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch",
                className
            )}
            style={{ gap }}
            {...props}
        >
            {children}
        </div>
    );
};

export { GlowingCards, GlowingCard };

// NOTE: You must add 'bg-radial-gradient' to your tailwind.config.js for the glow effect:
// extend: {
//     backgroundImage: {
//         'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
//     },
// }
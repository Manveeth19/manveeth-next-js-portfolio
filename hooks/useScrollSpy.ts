// hooks/useScrollSpy.ts
"use client";

import { useState, useEffect } from 'react';

// Define the threshold (how much of the section must be visible)
const THRESHOLD = 0.5; // 50% visible

const useScrollSpy = (sectionIds: string[], defaultActiveId: string = sectionIds[0]): string => {
    const [activeId, setActiveId] = useState<string>(defaultActiveId);

    useEffect(() => {
        const handleScroll = () => {
            let currentActiveId = activeId;
            let maxVisibility = 0;

            sectionIds.forEach(id => {
                const element = document.getElementById(id);
                if (!element) return;

                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate vertical visibility percentage
                const visibleHeight = 
                    Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
                
                const elementHeight = rect.height;
                let visibility = 0;

                if (elementHeight > 0) {
                    visibility = visibleHeight / elementHeight;
                }
                
                // If the top of the element is visible, or a significant portion is visible
                const isCurrentlyVisible = 
                    (rect.top >= 0 && rect.top < windowHeight * THRESHOLD) || 
                    (visibility > 0.6); // Adjust 0.6 as needed for sensitivity

                // Prioritize the section that is most visible or closest to the top
                if (isCurrentlyVisible && visibility > maxVisibility) {
                    maxVisibility = visibility;
                    currentActiveId = id;
                }
            });

            // Update state only if a new section is clearly active
            if (currentActiveId !== activeId && maxVisibility > 0.1) {
                setActiveId(currentActiveId);
            }
        };

        // Attach listeners for scroll and hash changes
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds, activeId]);

    return activeId;
};

export default useScrollSpy;
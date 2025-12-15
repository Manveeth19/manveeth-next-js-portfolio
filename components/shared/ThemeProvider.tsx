// components/shared/ThemeProvider.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    // 1. Initialize state: Tries to read from localStorage, checks system preference, or defaults to 'light'.
    const [theme, setInternalTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem("theme") as Theme;
            if (savedTheme) return savedTheme;
            
            // Default to dark if user system prefers it (matches the standard convention)
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light'; // Default for Server-Side Rendering (SSR)
    });

    const setTheme = useCallback((newTheme: Theme) => {
        setInternalTheme(newTheme);
        if (typeof window !== 'undefined') {
            // 2. Persist theme choice in localStorage
            localStorage.setItem("theme", newTheme);
            
            // 3. Update the class on the <html> element for Tailwind's 'dark:' variant to work
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(newTheme);
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }, [theme, setTheme]);

    // 4. Apply the theme class on initial load (client-side)
    useEffect(() => {
        setTheme(theme);
    }, [theme, setTheme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        // This is a necessary error check if the hook is used outside the Provider
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
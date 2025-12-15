// app/layout.tsx
import './globals.css';
import { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/shared/Footer';
import { ThemeProvider } from '@/components/shared/ThemeProvider'; // <-- Ensure this import is correct

export const metadata: Metadata = {
  title: 'Manveeth Reddy | Full-Stack Developer Portfolio',
  description: 'The personal portfolio of Manveeth Reddy, built using Next.js, TypeScript, and Tailwind CSS.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* FIX: The entire application body structure must be wrapped in ThemeProvider 
        so that Navbar and all child components can access the context.
      */}
      <ThemeProvider> 
        {/*
          The body tag now correctly applies the dark mode classes, which rely on
          the theme class being set on the <html> tag by the ThemeProvider component.
        */}
        <body className="bg-gray-50 min-h-screen pt-14 dark:bg-gray-900 dark:text-gray-50 transition-colors duration-500"> 
          <Navbar /> 
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
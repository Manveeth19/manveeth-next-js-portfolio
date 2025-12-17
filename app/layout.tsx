import './globals.css';
import { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/shared/Footer';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Chatbot from '@/components/chatbot/Chatbot';

export const metadata: Metadata = {
  title: 'Manveeth Reddy | Full-Stack Developer Portfolio',
  description: 'The personal portfolio of Manveeth Reddy, built using Next.js, TypeScript, and Tailwind CSS.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 min-h-screen pt-14 dark:bg-gray-900 dark:text-gray-50 transition-colors duration-500"> 
        <ThemeProvider> 
          <Navbar /> 
          <main>{children}</main>
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
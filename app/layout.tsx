"use client";

import './globals.css';
import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/shared/Footer';
import { ThemeProvider } from '@/components/shared/ThemeProvider';

// Lazy load chatbot - not needed immediately on page load
const Chatbot = dynamic(() => import('@/components/chatbot/Chatbot'), {
  ssr: false,
  loading: () => null
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Primary Meta Tags */}
        <title>Manveeth Reddy | Full-Stack Web Developer Portfolio</title>
        <meta name="title" content="Manveeth Reddy | Full-Stack Web Developer Portfolio" />
        <meta name="description" content="Full-Stack Web Developer specializing in React.js, Next.js, Node.js, and modern web technologies. Currently working at Yoi Media LLP. Experienced in building scalable applications with Convex, Supabase, and Firebase." />
        <meta name="keywords" content="Manveeth Reddy, Full-Stack Developer, React Developer, Next.js Developer, Node.js, Web Developer, MERN Stack, Hyderabad Developer, Portfolio, JavaScript, TypeScript" />
        <meta name="author" content="Manveeth Reddy Adumala" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manveeth-next-js-portfolio.vercel.app/" />
        <meta property="og:title" content="Manveeth Reddy | Full-Stack Web Developer" />
        <meta property="og:description" content="Full-Stack Web Developer specializing in React.js, Next.js, Node.js. Currently working at Yoi Media LLP. Check out my projects and experience." />
        <meta property="og:image" content="https://manveeth-next-js-portfolio.vercel.app/manveeth.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Manveeth Reddy Portfolio" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://manveeth-next-js-portfolio.vercel.app/" />
        <meta property="twitter:title" content="Manveeth Reddy | Full-Stack Web Developer" />
        <meta property="twitter:description" content="Full-Stack Web Developer specializing in React.js, Next.js, Node.js. Check out my portfolio and projects." />
        <meta property="twitter:image" content="https://manveeth-next-js-portfolio.vercel.app/manveeth.png" />

        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional Meta */}
        <meta name="theme-color" content="#0284c7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Manveeth Reddy Adumala",
              "url": "https://manveeth-next-js-portfolio.vercel.app",
              "image": "https://manveeth-next-js-portfolio.vercel.app/Manveeth23.jpg",
              "sameAs": [
                "https://linkedin.com/in/manveeth-reddy-3b6292256",
                "https://github.com/manveeth19"
              ],
              "jobTitle": "Full-Stack Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Yoi Media LLP"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressCountry": "IN"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Guru Nanak Institute of Technology"
              },
              "email": "manveethreddy4adumala@gmail.com",
              "telephone": "+917330942684",
              "knowsAbout": [
                "React.js",
                "Next.js",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "Full-Stack Development",
                "Web Development",
                "Convex",
                "Supabase",
                "Firebase"
              ]
            })
          }}
        />
      </head>
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
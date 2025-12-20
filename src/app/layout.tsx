
"use client"; // Required for useState and useEffect

import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { useState, useEffect } from 'react';
import { Preloader } from '@/components/layout/Preloader';

const defaultMetadataObject = { // Renamed to avoid confusion with Next.js metadata export
  title: 'Foodlet - Pre-order Meals & Save Time',
  description: 'Foodlet allows you to conveniently pre-order meals for dine-in or takeaway, eliminating wait times.',
};

const loadingMetadataObject = { // Renamed for consistency
  title: 'Loading Foodlet...',
  description: 'Getting your delicious food experience ready!',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (isLoading) {
    return (
      <html lang="en" suppressHydrationWarning={true}>
        <head>
          <title>{loadingMetadataObject.title}</title>
          <meta name="description" content={loadingMetadataObject.description} />
          <link rel="icon" href="/content/favicon.ico" sizes="any" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Belleza&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
          {/* Preload critical assets */}
          <link rel="preload" as="video" href="/content/food2.mp4" type="video/mp4" />
          <link rel="preload" as="image" href="/content/r1.jpg" />
          <link rel="preload" as="image" href="/content/r2.jpg" />
        </head>
        <body className="font-body antialiased" suppressHydrationWarning={true}>
          <Preloader />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>{defaultMetadataObject.title}</title>
        <meta name="description" content={defaultMetadataObject.description} />
        <link rel="icon" href="/content/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        {/* Preload critical assets (also needed here if loading is very fast or disabled) */}
        <link rel="preload" as="video" href="/content/food2.mp4" type="video/mp4" />
        <link rel="preload" as="image" href="/content/r1.jpg" />
        <link rel="preload" as="image" href="/content/r2.jpg" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <ScrollToTopButton />
      </body>
    </html>
  );
}

// Removed: export const metadata: Metadata = defaultMetadata;
// Client components cannot export metadata.
// Individual pages (e.g., src/app/page.tsx) should export their own metadata.
// The <title> and <meta name="description"> tags are now manually set in the <head> above for default and loading states.


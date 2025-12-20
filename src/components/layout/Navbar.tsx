
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu as MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import logoSrc from '../../app/logo.png'; // Import the logo

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/#what-we-do', label: 'What We Do' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact Us' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Adjusted scroll threshold slightly if needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-background shadow-md',
        'py-1' // Consistently reduced padding
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-14"> {/* Reduced height via h-14 */}
        <Link href="/" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors">
          <Image src={logoSrc} alt="Foodlet Logo" width={100} height={26} priority style={{width: '100px', height: 'auto'}}/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'font-medium hover:text-primary transition-colors text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn('text-foreground')}>
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <SheetHeader className="mb-4">
                <SheetTitle className="text-left text-2xl font-headline text-primary">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

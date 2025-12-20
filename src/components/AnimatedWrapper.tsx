
"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeInUp' | 'fadeIn';
  delay?: string; // e.g. 'delay-200' for tailwindcss JIT
  threshold?: number;
  once?: boolean; // Trigger animation only once
}

export function AnimatedWrapper({
  children,
  className,
  animationType = 'fadeInUp',
  delay = '',
  threshold = 0.1,
  once = false, // Changed default to false
}: AnimatedWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Reset visibility when element is not intersecting if 'once' is false
            if (!once) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]); // Added 'once' to dependency array

  const animationClasses = {
    fadeInUp: isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0',
    fadeIn: isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0',
  };

  return (
    <div ref={ref} className={cn(className, animationClasses[animationType], delay, !isVisible && 'opacity-0')}>
      {children}
    </div>
  );
}


import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import Image from 'next/image';
import { UtensilsCrossed } from 'lucide-react';

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6 flex items-center">
                <UtensilsCrossed className="w-10 h-10 mr-4" /> What We Do
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Foodlet is an innovative platform that allows customers to conveniently pre-order meals for dine-in or takeaway. 
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                By ensuring that food is ready upon arrival, we help eliminate wait times and enhance overall customer satisfaction.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
               <Image
                  src="/content/r2.jpg"
                  alt="Mobile app showing pre-order interface"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="food app interface"
                  className="transition-transform duration-500 hover:scale-105"
                  priority={true}
                />
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}

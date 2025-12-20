
import Image from 'next/image';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Smartphone, Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function DownloadAppsSection() {
  return (
    <section id="download-apps" className="section-padding bg-card">
      <div className="container mx-auto px-4 text-center">
        <AnimatedWrapper>
          <Smartphone className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">Get foodlet and never wait again!</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Download our app for the best pre-ordering experience. It's fast, easy, and convenient.
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper delay="delay-200ms">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            {/* Replace href with your actual store links later */}
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white px-6 py-7 text-base w-full sm:w-auto rounded-lg shadow-md transition-transform hover:scale-105">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-5 w-5" /> 
                <div>
                  <p className="text-xs -mb-1">GET IT ON</p>
                  <p className="text-xl font-semibold">Google Play</p>
                </div>
              </a>
            </Button>
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white px-6 py-7 text-base w-full sm:w-auto rounded-lg shadow-md transition-transform hover:scale-105">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Apple className="mr-2 h-6 w-6" /> 
                <div>
                  <p className="text-xs -mb-1">Download on the</p>
                  <p className="text-xl font-semibold">App Store</p>
                </div>
              </a>
            </Button>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}


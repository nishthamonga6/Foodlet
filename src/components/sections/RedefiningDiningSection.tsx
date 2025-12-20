
import Image from 'next/image';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
// import { Button } from '@/components/ui/button'; // Button removed for now
// import Link from 'next/link'; // Link removed for now

export function RedefiningDiningSection() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/content/r1.jpg"
                alt="Restaurant interior or happy diners"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint="restaurant dining"
                priority={true}
              />
            </div>
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">Redefining the Dining Experience</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Foodlet was founded with a mission to save time and enhance the dining experience for customers while empowering restaurants to operate more efficiently.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With a commitment to quality and innovation, we aim to create a seamless connection between diners and eateries. 
              </p>
              {/* Button removed for now
              <Button asChild size="lg" className="bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground rounded-full px-8 py-3 shadow-md transition-transform hover:scale-105">
                <Link href="/features">Explore Features</Link> 
              </Button>
              */}
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}

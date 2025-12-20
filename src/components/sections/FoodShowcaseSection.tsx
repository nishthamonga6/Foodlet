
import Image from 'next/image';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';

const foodImages = [
  { src: '/content/1.jpg', alt: 'Food Showcase Image 1', aiHint: 'food plate' },
  { src: '/content/2.jpg', alt: 'Food Showcase Image 2', aiHint: 'delicious meal' },
  { src: '/content/3.jpg', alt: 'Food Showcase Image 3', aiHint: 'culinary item' },
  { src: '/content/4.jpg', alt: 'Food Showcase Image 4', aiHint: 'tasty dish' },
  { src: '/content/5.jpg', alt: 'Food Showcase Image 5', aiHint: 'appetizing food' },
  { src: '/content/6.jpg', alt: 'Food Showcase Image 6', aiHint: 'gourmet serving' },
  { src: '/content/7.jpg', alt: 'Food Showcase Image 7', aiHint: 'restaurant food' },
  { src: '/content/8.jpg', alt: 'Food Showcase Image 8', aiHint: 'savory plate' },
];

export function FoodShowcaseSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 text-center">
        <AnimatedWrapper>
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">Taste the Possibilities</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore a world of flavors. Pre-order your favorites and discover new delights with Foodlet.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {foodImages.map((image, index) => (
            <AnimatedWrapper key={index} delay={`delay-${(index % 4) * 100}ms`} className="aspect-video md:aspect-square">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={image.aiHint}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  {/* Optional: Add an icon like a magnifying glass on hover */}
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

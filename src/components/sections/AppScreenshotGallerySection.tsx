
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { GalleryItem, type GalleryItemProps } from '@/components/ui/GalleryItem';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const screenshots: GalleryItemProps[] = [
  {
    src: '/content/pg/s1.jpg',
    alt: 'Foodlet App Screenshot 1 - Browsing Restaurants',
    aiHint: 'app interface',
  },
  {
    src: '/content/pg/s2.jpg',
    alt: 'Foodlet App Screenshot 2 - Placing an Order',
    aiHint: 'mobile screen',
  },
  {
    src: '/content/pg/s3.jpg',
    alt: 'Foodlet App Screenshot 3 - Order Confirmation',
    aiHint: 'app design',
  },
  {
    src: '/content/pg/s4.jpg',
    alt: 'Foodlet App Screenshot 4 - User Profile',
    aiHint: 'user profile',
  },
];

export function AppScreenshotGallerySection() {
  return (
    <section id="app-gallery" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <AnimatedWrapper className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">See Foodlet in Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the seamless and intuitive Foodlet app experience. Swipe to explore.
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper delay="delay-200ms">
          <div className="max-w-2xl mx-auto relative px-8 sm:px-0">
            <Carousel
              opts={{
                align: "center", // Align items to center
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {screenshots.map((item, index) => (
                  <CarouselItem key={index} className="flex justify-center items-center"> {/* Centering the content */}
                    <div className="p-1 w-[240px] sm:w-[280px] md:w-[320px]"> {/* Container for GalleryItem, controlling its size */}
                      <GalleryItem
                        src={item.src}
                        alt={item.alt}
                        aiHint={item.aiHint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-background/80 hover:bg-background"/>
              <CarouselNext className="bg-background/80 hover:bg-background"/>
            </Carousel>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}

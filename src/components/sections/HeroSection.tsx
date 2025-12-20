
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';

export function HeroSection() {
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const videoElement = e.target as HTMLVideoElement;
    const firstSourceElement = videoElement.querySelector('source');

    let attemptedSrcMessage = 'Initial source status unknown.';
    if (videoElement.currentSrc && videoElement.currentSrc !== window.location.href) {
      attemptedSrcMessage = `Browser was attempting to use: '${videoElement.currentSrc}'`;
    } else if (firstSourceElement && firstSourceElement.src) {
      attemptedSrcMessage = `A <source> tag was found with src='${firstSourceElement.src}'. Problem might be with this file or path.`;
    } else if (firstSourceElement) {
      attemptedSrcMessage = "A <source> tag was found, but its 'src' attribute was empty or missing at the time of error.";
    } else {
      attemptedSrcMessage = "No <source> tag was found as a child of the video element via DOM query (videoElement.querySelector('source')). Please ensure a <source> tag with a valid 'src' (e.g., '/content/video.mp4') is present in your JSX. The video file must be in your 'public' directory (e.g., 'public/content/video.mp4').";
    }
    
    console.error(
      `Video loading error. Diagnostic: ${attemptedSrcMessage}. See specific browser error details below.`
    );

    if (videoElement.error) {
      switch (videoElement.error.code) {
        case videoElement.error.MEDIA_ERR_ABORTED:
          console.error('Specific Error: Video playback aborted by the user or a script.');
          break;
        case videoElement.error.MEDIA_ERR_NETWORK:
          console.error('Specific Error: A network error caused the video download to fail. Check your network connection and ensure the server can access the video file at the specified path (e.g., in the public folder).');
          break;
        case videoElement.error.MEDIA_ERR_DECODE:
          console.error('Specific Error: The video playback was aborted due to a corruption problem or because the video used features your browser did not support. Try a different video format or re-encode the video.');
          break;
        case videoElement.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          console.error("Specific Error: The video could not be loaded, either because the server or network failed or because the format is not supported. CRITICAL: Ensure your video file (e.g., food2.mp4) is located in the 'public/content/' directory and the path in the <source> tag (e.g., '/content/food2.mp4') is correct. Also, verify the video format is supported by the browser.");
          break;
        default:
          console.error(`Specific Error: An unknown error occurred with the video. Error code: ${videoElement.error.code}`);
          break;
      }
    } else {
      console.error(
        'Specific Error: Video error event triggered, but no specific HTMLMediaError code was found on the video element. This can happen if the resource is entirely unavailable (check path and server for the video file in the public directory), the format is unsupported, or there was a network issue before the error code could be set.'
      );
    }
  };

  return (
    <section className="relative h-[85vh] md:h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://placehold.co/1920x1080.png"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
        onError={handleVideoError}
      >
        <source src="/content/food2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 container mx-auto px-4">
        <AnimatedWrapper animationType="fadeInUp">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline mb-6 leading-tight">
            Foodlet – Pre-Order Meals & Save Time
          </h1>
        </AnimatedWrapper>
        <AnimatedWrapper animationType="fadeInUp" delay="delay-200ms">
          <p className="text-lg md:text-xl lg:text-2xl font-body mb-10 max-w-2xl mx-auto">
            Foodlet lets you browse restaurants and pre-order meals for dine-in or takeaway with ease—so your meal is ready when you arrive.
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper animationType="fadeInUp" delay="delay-400ms">
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground px-8 py-3 text-lg rounded-full shadow-lg transition-transform hover:scale-105 w-full sm:w-auto">
              <Link href="https://apps.apple.com/app/foodlet" target="_blank" rel="noopener noreferrer">Download on the App Store</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg rounded-full shadow-lg transition-transform hover:scale-105 w-full sm:w-auto">
              <Link href="https://play.google.com/store/apps/details?id=com.foodlet" target="_blank" rel="noopener noreferrer">Get it on Google Play</Link>
            </Button>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}

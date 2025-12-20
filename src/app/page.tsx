
import { HeroSection } from '@/components/sections/HeroSection';
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { AppScreenshotGallerySection } from '@/components/sections/AppScreenshotGallerySection';
import { WhyUseFoodletSection } from '@/components/sections/WhyUseFoodletSection';
import { RestaurantAppSection } from '@/components/sections/RestaurantAppSection';
import { DataTransparencySection } from '@/components/sections/DataTransparencySection';
import { RedefiningDiningSection } from '@/components/sections/RedefiningDiningSection';
import { DownloadAppsSection } from '@/components/sections/DownloadAppsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <HowItWorksSection />
      <AppScreenshotGallerySection />
      <WhyUseFoodletSection />
      <RestaurantAppSection />
      <DataTransparencySection />
      <RedefiningDiningSection />
      <DownloadAppsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}


"use client";

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Maximize2 } from 'lucide-react';

export interface GalleryItemProps {
  src: string;
  alt: string;
  aiHint: string;
  delay?: string;
}

export function GalleryItem({ src, alt, aiHint, delay }: GalleryItemProps) {
  return (
    <AnimatedWrapper className="w-full h-full" delay={delay}>
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative aspect-square w-full h-full rounded-lg overflow-hidden shadow-md cursor-pointer group transform transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="contain" // Changed from "cover" to "contain"
              data-ai-hint={aiHint}
              className="transition-transform duration-500 group-hover:scale-110 bg-muted/20" // Added a subtle background for letterboxing
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
              <Maximize2 className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-2 bg-transparent border-none shadow-none data-[state=open]:flex data-[state=open]:flex-col data-[state=open]:items-center">
          <DialogHeader className="sr-only"> {/* Visually hidden if image alt is descriptive enough for the dialog context */}
            <DialogTitle>{alt}</DialogTitle>
          </DialogHeader>
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="rounded-lg object-contain max-h-[80vh] w-auto"
          />
        </DialogContent>
      </Dialog>
    </AnimatedWrapper>
  );
}


"use client";
import type { SVGProps } from 'react';

const PizzaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0.5" // Thinner stroke for a cleaner look
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Base of the pizza (crust color, slightly darker than primary) */}
    <circle cx="12" cy="12" r="10" className="text-amber-400" />
    {/* Cheese (original yellow color) */}
    <circle cx="12" cy="12" r="8.5" className="fill-yellow-500" />
    
    {/* Slices lines (foreground color for contrast) */}
    <line x1="12" y1="3.5" x2="12" y2="20.5" className="stroke-amber-600" strokeWidth="1"/>
    <line x1="5.2" y1="5.2" x2="18.8" y2="18.8" className="stroke-amber-600" strokeWidth="1"/>
    <line x1="3.5" y1="12" x2="20.5" y2="12" className="stroke-amber-600" strokeWidth="1"/>
    <line x1="5.2" y1="18.8" x2="18.8" y2="5.2" className="stroke-amber-600" strokeWidth="1"/>

    {/* Pepperoni (destructive color) */}
    <circle cx="10" cy="8" r="1.2" className="fill-red-600 stroke-red-700" strokeWidth="0.5" />
    <circle cx="14" cy="8" r="1.2" className="fill-red-600 stroke-red-700" strokeWidth="0.5" />
    <circle cx="12" cy="11" r="1.2" className="fill-red-600 stroke-red-700" strokeWidth="0.5" />
    <circle cx="9" cy="13" r="1.2" className="fill-red-600 stroke-red-700" strokeWidth="0.5" />
    <circle cx="15" cy="13" r="1.2" className="fill-red-600 stroke-red-700" strokeWidth="0.5" />
    <circle cx="11" cy="16" r="1.2" className="fill-red-600 stroke-red-700" strokeWidth="0.5" />
  </svg>
);

export function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-primary">
      <PizzaIcon className="w-24 h-24 md:w-32 md:h-32 animate-spin" />
      <p className="mt-6 text-xl font-headline text-foreground">Welcome to FoodLet</p>
    </div>
  );
}

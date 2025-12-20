
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  category: string;
  aiHint: string;
}

export function MenuItemCard({ name, description, price, imageSrc, aiHint }: MenuItemProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 ease-in-out hover:shadow-xl transform hover:-translate-y-1">
      <div className="relative w-full h-52 md:h-60 overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={aiHint}
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-headline text-foreground">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <p className="text-muted-foreground text-sm mb-3 h-16 overflow-hidden">{description}</p>
        <p className="text-xl font-semibold text-primary">{price}</p>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Order
        </Button>
      </CardFooter>
    </Card>
  );
}

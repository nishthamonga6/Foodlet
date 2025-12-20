
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, ShoppingBag, Smile, Download } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: <Utensils className="w-10 h-10 text-primary mb-4" />,
    title: 'Browse a Variety of Restaurants',
    description: 'Explore restaurants near you and discover their full menus with prices.',
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-primary mb-4" />,
    title: 'Pre-Order for Dine-In or Takeaway',
    description: 'Choose your meals, schedule a pickup time, and select dine-in or takeaway options.',
  },
  {
    icon: <Smile className="w-10 h-10 text-primary mb-4" />,
    title: 'Save Time & Avoid Queues',
    description: 'Your meal is ready when you arrive. No waiting, no queues—just enjoy your food.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <AnimatedWrapper className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">How Foodlet Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Foodlet is a food pre-ordering app that lets you plan meals ahead of time and reduce wait time at restaurants.
          </p>
          <div className="text-left max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-2"><strong>Foodlet lets users:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Browse a variety of restaurants</li>
              <li>View menus and prices</li>
              <li>Pre-order meals for dine-in or takeaway</li>
              <li>Schedule order pickup times</li>
              <li>Save time by avoiding queues</li>
            </ul>
          </div>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <AnimatedWrapper key={index} delay={`delay-${index * 150}ms`}>
              <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center">{step.icon}</div>
                  <CardTitle className="text-2xl font-headline text-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>

        <AnimatedWrapper className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground px-8 py-3 text-lg rounded-full shadow-lg transition-transform hover:scale-105">
            <Link href="/#download-apps">
              <Download className="mr-2 h-5 w-5" /> Download the App – It’s Free!
            </Link>
          </Button>
        </AnimatedWrapper>
      </div>
    </section>
  );
}

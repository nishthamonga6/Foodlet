
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Star, Package, MapPin, Gift, Zap } from 'lucide-react'; // Added Zap for speed/efficiency

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: 'Zero Waiting Time',
    description: 'Your food’s ready when you are. No more queues or idle waiting at restaurants.',
  },
  {
    icon: <Star className="w-8 h-8 text-accent" />,
    title: 'VIP Dine-In Experience',
    description: 'Enjoy a smoother dining experience. No lines, no awkward waits for tables or food.',
  },
  {
    icon: <Package className="w-8 h-8 text-accent" />,
    title: 'Takeout Without Hassle',
    description: 'Order in advance and pick up your meal on the go. Perfect for busy schedules.',
  },
  {
    icon: <MapPin className="w-8 h-8 text-accent" />, // Using MapPin for tracking, could be Compass
    title: 'Real-Time Order Tracking',
    description: 'Know exactly when your food is being prepared and when to leave for pickup or dine-in.',
  },
  {
    icon: <Gift className="w-8 h-8 text-accent" />,
    title: 'Exclusive Offers & Rewards',
    description: 'Access special deals, discounts, and loyalty rewards you won’t find anywhere else.',
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: 'Ultimate Convenience',
    description: 'Plan your meals ahead, manage orders easily, and simplify your dining routine.',
  },
];

export function WhyUseFoodletSection() {
  return (
    <section id="why-foodlet" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <AnimatedWrapper className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">Why Use Foodlet?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages of pre-ordering your meals with Foodlet.
          </p>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedWrapper key={index} delay={`delay-${(index % 3) * 150}ms`}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <CardHeader className="flex flex-row items-center space-x-4 pb-3">
                  {benefit.icon}
                  <CardTitle className="text-xl font-headline text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

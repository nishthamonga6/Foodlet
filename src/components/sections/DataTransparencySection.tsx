
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, UserCheck, MapPin, ShoppingCart, Smartphone, Lock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const dataPoints = [
  {
    icon: <UserCheck className="w-8 h-8 text-primary mb-3" />,
    title: 'Name and Contact Details',
    description: 'Used for account creation and communication',
  },
  {
    icon: <MapPin className="w-8 h-8 text-primary mb-3" />,
    title: 'Location Information',
    description: 'To show nearby restaurants and delivery services',
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-primary mb-3" />,
    title: 'Order Details',
    description: 'To process and manage your bookings efficiently',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary mb-3" />,
    title: 'Device and Performance Data',
    description: 'To improve app experience and functionality',
  },
];

export function DataTransparencySection() {
  return (
    <section id="data-transparency" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimatedWrapper className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">How Your Data Is Used</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Foodlet collects only the data necessary to provide core app services. We are committed to transparency and protecting your privacy.
          </p>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dataPoints.map((item, index) => (
            <AnimatedWrapper key={index} delay={`delay-${index * 100}ms`}>
              <Card className="h-full text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center">{item.icon}</div>
                  <CardTitle className="text-xl font-headline text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>

        <AnimatedWrapper className="bg-card p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <Lock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-headline text-foreground mb-3">Your Privacy Matters</h3>
              <p className="text-muted-foreground mb-4">
                <strong>We do not sell your data to third parties.</strong> All data usage is described in our Privacy Policy. We implement robust security measures to protect your personal information.
              </p>
              <p className="text-muted-foreground mb-6">
                We collect and use your data solely to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Provide and improve our services</li>
                <li>Process your orders efficiently</li>
                <li>Connect you with local restaurants</li>
                <li>Enhance your user experience</li>
                <li>Comply with legal requirements</li>
              </ul>
              <div className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
                  <Link href="/privacy-policy">Read Our Full Privacy Policy</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}

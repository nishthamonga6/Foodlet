
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Store, ClipboardList, Bell, BarChart3, Clock, CheckCircle } from 'lucide-react';

const restaurantFeatures = [
  {
    icon: <ClipboardList className="w-10 h-10 text-primary mb-4" />,
    title: 'Manage Orders',
    description: 'Receive and manage pre-orders from customers in real-time.',
  },
  {
    icon: <Clock className="w-10 h-10 text-primary mb-4" />,
    title: 'Schedule Orders',
    description: 'View scheduled pickup times and prepare meals efficiently.',
  },
  {
    icon: <Bell className="w-10 h-10 text-primary mb-4" />,
    title: 'Instant Notifications',
    description: 'Get notified immediately when new orders are placed.',
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary mb-4" />,
    title: 'Business Analytics',
    description: 'Track sales, popular items, and customer preferences.',
  },
  {
    icon: <Store className="w-10 h-10 text-primary mb-4" />,
    title: 'Menu Management',
    description: 'Update your menu, prices, and availability in real-time.',
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-primary mb-4" />,
    title: 'Order Status',
    description: 'Update order status and keep customers informed.',
  },
];

export function RestaurantAppSection() {
  return (
    <section id="restaurant-app" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <AnimatedWrapper className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <Store className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4">Foodlet Restaurant App</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Empower your restaurant with our dedicated partner app designed to streamline operations and enhance customer service.
          </p>
          <div className="max-w-4xl mx-auto text-left bg-background p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-headline text-foreground mb-4">For Restaurant Partners</h3>
            <p className="text-muted-foreground mb-4">
              The Foodlet Restaurant App is a comprehensive management platform that helps restaurants:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Accept and manage pre-orders from Foodlet users</li>
              <li>View scheduled pickup times for dine-in and takeaway orders</li>
              <li>Receive real-time notifications for new orders</li>
              <li>Update menu items, prices, and availability instantly</li>
              <li>Track business performance with analytics and insights</li>
              <li>Communicate order status to customers</li>
              <li>Reduce wait times and improve kitchen efficiency</li>
            </ul>
          </div>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurantFeatures.map((feature, index) => (
            <AnimatedWrapper key={index} delay={`delay-${index * 100}ms`}>
              <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center">{feature.icon}</div>
                  <CardTitle className="text-2xl font-headline text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>

        <AnimatedWrapper className="mt-12 text-center bg-primary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-headline text-foreground mb-3">Interested in Partnering?</h3>
          <p className="text-muted-foreground mb-4">
            Join the Foodlet network and grow your restaurant business with pre-order technology.
          </p>
          <p className="text-lg font-semibold text-primary">
            Contact us at <a href="mailto:support@foodlet.in" className="hover:underline">support@foodlet.in</a> or call <a href="tel:+917082820828" className="hover:underline">+91 7082820828</a>
          </p>
        </AnimatedWrapper>
      </div>
    </section>
  );
}

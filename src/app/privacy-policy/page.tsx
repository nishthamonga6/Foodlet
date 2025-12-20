
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Store, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policies - Foodlet',
  description: 'Access all Foodlet privacy policies including User App, Restaurant App, and Master Privacy Policy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen section-padding">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Shield className="w-20 h-20 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">Privacy Policies</h1>
              <p className="text-lg text-muted-foreground">
                M&U Enterprise / Foodlet is committed to protecting your privacy. Select the relevant privacy policy below:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Link href="/privacy-policy/user-app" className="block">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-headline text-foreground">Foodlet User App</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">Privacy policy for users ordering food through the Foodlet app.</p>
                    <span className="text-primary font-semibold hover:underline">Read Policy →</span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/privacy-policy/restaurant-app" className="block">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Store className="w-12 h-12 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-headline text-foreground">Foodlet Restaurant App</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">Privacy policy for restaurant partners managing orders.</p>
                    <span className="text-primary font-semibold hover:underline">Read Policy →</span>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/privacy-policy/master" className="block">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <FileText className="w-12 h-12 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-headline text-foreground">Master Privacy Policy</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">Comprehensive privacy policy covering all Foodlet services.</p>
                    <span className="text-primary font-semibold hover:underline">Read Policy →</span>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-headline text-foreground mb-4">Quick Summary</h2>
              <p className="text-sm text-muted-foreground mb-6">Effective Date: December 20, 2025 | Last Updated: December 20, 2025</p>
              
              <div className="space-y-4 text-muted-foreground">
                <p><strong>What we collect:</strong> Name, contact details, location, order information, and device data</p>
                <p><strong>Why we collect it:</strong> To provide food pre-ordering services, connect you with restaurants, and improve your experience</p>
                <p><strong className="text-lg text-foreground">We do not sell your data to third parties</strong></p>
                <p><strong>Your rights:</strong> Access, correct, delete your data, and withdraw consent at any time</p>
                <p><strong>Contact:</strong> <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a> | <a href="tel:+917082820828" className="text-primary hover:underline">+91 7082820828</a></p>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  For complete details, please read the application-specific privacy policies above.
                </p>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}


import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <AnimatedWrapper>
          <h2 className="text-4xl md:text-5xl font-headline mb-6">Get in Touch</h2>
          <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Have questions, feedback, or need support? We're here to help. Reach out to us through any of the channels below.
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper delay="delay-200ms">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <Mail className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-headline text-primary mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">For support and inquiries.</p>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto max-w-xs">
                <a href="mailto:support@foodlet.in">support@foodlet.in</a>
              </Button>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <Phone className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-headline text-primary mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak to our support team.</p>
               <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto max-w-xs">
                <a href="tel:+917082820828">+91 7082820828</a>
              </Button>
            </div>
          </div>
        </AnimatedWrapper>
        
        <AnimatedWrapper delay="delay-400ms" className="mt-12">
           <p className="text-lg mb-4">For partnership inquiries or more complex issues, please email us.</p>
           <Link href="/privacy-policy">
             <Button variant="ghost" className="text-primary-foreground hover:text-background hover:bg-primary-foreground/20">
                View Our Privacy Policy
             </Button>
           </Link>
        </AnimatedWrapper>
      </div>
    </section>
  );
}

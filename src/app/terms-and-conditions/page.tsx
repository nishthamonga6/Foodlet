
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Foodlet',
  description: 'Read the Foodlet Terms and Conditions to understand the rules and guidelines for using our services.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background min-h-screen section-padding">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <article className="prose lg:prose-xl max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-8">Terms & Conditions</h1>
            
            <p className="text-sm text-muted-foreground mb-6">Last Updated: Aug 19, 2025</p>

            <p>For the purpose of these Terms and Conditions, the term “we”, “us”, “our” shall mean M&amp;U ENTERPRISE, operating under the brand name Foodlet, whose registered office is at B004-01712, Fauji Colony, Gate No.1, Sector 15, Dashmesh Nagar, Kharar, Distt SAS Nagar, Mohali, Punjab 140301.</p>
            <p>The terms “you”, “your”, “user”, “visitor” shall mean any natural or legal person who is visiting our website and/or using the Foodlet mobile application to place pre-orders.</p>
            <p>By accessing or using our website, app, or services, you agree to comply with and be bound by these Terms and Conditions.</p>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">1. Scope of Service</h2>
              <p>Foodlet is a pre-ordering platform that enables customers to place and schedule food orders for dine-in or takeaway at partner restaurants. Foodlet does not directly prepare or deliver food — we act as a technology intermediary between customers and restaurants.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">2. Use of Website & App</h2>
              <p>The content and features on the Foodlet platform are subject to change without prior notice.</p>
              <p>You agree to use the platform for lawful purposes only and not for fraudulent or unauthorized activities.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">3. Partner Restaurants</h2>
              <p>Foodlet partners with restaurants, cloud kitchens, and food vendors (“Restaurant Partners”) to list their menus and accept pre-orders.</p>
              <p>The responsibility for food preparation, quality, quantity, hygiene, and service rests solely with the Restaurant Partner.</p>
              <p>Foodlet shall not be liable for any deficiencies in food or service provided by the Restaurant Partner.</p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">4. Payments</h2>
              <p>Payments for pre-orders may be made through Razorpay or any other integrated payment gateway.</p>
              <p>Once a payment is confirmed, Foodlet will notify the Restaurant Partner.</p>
              <p>In case of transaction failure, the order will not be considered confirmed.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">5. Platform Fees</h2>
              <p>Foodlet charges users a nominal platform fee per order as displayed at checkout.</p>
              <p>The fee varies depending on the order value and is non-refundable except where explicitly stated.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">6. Cancellations, Refunds & No-Shows</h2>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Immediate Orders:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Orders can be cancelled only before the Restaurant Partner accepts the order.</li>
                <li>Once accepted, cancellation may not be possible.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Scheduled / Future Orders:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Users can cancel their order up to 3 hours before the scheduled time (“T Time”).</li>
                <li>After this period, cancellations may not be accepted, and no refund will be issued.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Late Arrival / No-Show:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Users are expected to arrive at or before their scheduled T Time.</li>
                <li>If the user arrives late, Foodlet and the Restaurant Partner shall not be responsible if the food served is cold or quality is affected.</li>
                <li>If the user fails to show up within 1 hour of the scheduled T Time, the order will be treated as cancelled without refund.</li>
                <li>Restaurants reserve the right to dispose of or repurpose the food after this period.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Refunds:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Refunds, if applicable, will be governed by the Restaurant Partner’s policies and Foodlet’s discretion.</li>
                <li>In case of failed transactions or technical errors, refunds (if applicable) will be processed back to the original payment method within 6-8 business days, subject to payment gateway timelines.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">7. User Responsibilities</h2>
               <ul className="list-disc pl-5 space-y-1">
                  <li>Users must provide accurate details at the time of ordering, including arrival time for dine-in or pickup for takeaway.</li>
                  <li>Users must collect orders promptly at the agreed time.</li>
                  <li>Foodlet/Restaurant Partners are not liable for delays caused by late arrival of the user.</li>
               </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">8. Intellectual Property</h2>
              <p>All materials on our website and app, including design, logo, graphics, and content, are owned or licensed by Foodlet.</p>
              <p>Unauthorized reproduction, use, or distribution is prohibited.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">9. Limitation of Liability</h2>
              <p>Foodlet is not responsible for delays caused by restaurants, inaccurate menu listings, or food quality issues.</p>
              <p>Our liability is limited strictly to the extent of facilitating the pre-order and payment transaction.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">10. Third-Party Links</h2>
              <p>The Foodlet website/app may include links to other websites for informational purposes. We do not endorse or take responsibility for the content of these websites.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">11. Disputes & Governing Law</h2>
              <p>Any dispute arising out of the use of Foodlet’s platform or services shall be governed by the laws of India.</p>
              <p>Exclusive jurisdiction will lie with the competent courts in Mohali, Punjab.</p>
            </section>

            <section>
              <h2 className="text-2xl font-headline text-foreground mb-3">12. Contact Information</h2>
              <p>For any queries or complaints, please reach out to us at:</p>
              <ul className="list-none pl-0 space-y-1">
                <li>📍 Address: B004-0172, Fauji Colony, Gate No.1, Sector 15, Dashmesh Nagar, Kharar, Distt SAS Nagar, Mohali, Punjab 140301</li>
                <li>📧 Email: <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a></li>
                <li>📞 Phone: <a href="tel:+917082820828" className="text-primary hover:underline">+91 7082820828</a></li>
              </ul>
            </section>
          </article>
        </AnimatedWrapper>
      </div>
    </div>
  );
}

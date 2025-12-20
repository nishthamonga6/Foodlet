
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Foodlet User App',
  description: 'Privacy Policy for the Foodlet User App - Learn how we collect, use, and protect your personal data.',
};

export default function UserAppPrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen section-padding">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <article className="prose lg:prose-xl max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-8">Privacy Policy - Foodlet User App</h1>
            
            <p className="text-sm text-muted-foreground">Effective Date: December 20, 2025</p>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: December 20, 2025</p>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">1. Introduction</h2>
              <p>Welcome to the Foodlet User App. This Privacy Policy explains how M&U Enterprise ("we," "us," or "our") collects, uses, discloses, and safeguards your personal information when you use the Foodlet User App. We are committed to protecting your privacy and complying with the Digital Personal Data Protection Act, 2023 (DPDP Act) and other applicable laws.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">2. Data Collection</h2>
              <p>The Foodlet User App collects the following types of personal data to provide you with our services:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, phone number for account creation and authentication.</li>
                <li><strong>Location Data:</strong> Real-time or approximate location to show nearby restaurants, delivery zones, and optimize service delivery.</li>
                <li><strong>Order Information:</strong> Food preferences, order history, delivery addresses, and payment information (processed securely through third-party payment gateways).</li>
                <li><strong>Device Information:</strong> Device type, operating system version, unique device identifiers, mobile network information, and app usage data.</li>
                <li><strong>Communication Data:</strong> Messages, feedback, and support requests you send through the app.</li>
                <li><strong>Notification Tokens:</strong> Device tokens for push notifications about order updates and promotions.</li>
              </ul>
              <p className="mt-3"><strong>Data Storage:</strong> Your data is securely stored using MongoDB database technology with industry-standard encryption and security protocols at mongodb://localhost:27017/</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">3. Purpose of Data Processing</h2>
              <p>We collect and use your data solely for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Authentication:</strong> Verify your identity and secure your account using Google OAuth and Firebase Authentication.</li>
                <li><strong>Location Services:</strong> Display nearby restaurants, calculate delivery distances, and provide location-based recommendations.</li>
                <li><strong>Order Processing:</strong> Process your food orders, schedule pickup times, manage dine-in or takeaway preferences.</li>
                <li><strong>Notifications:</strong> Send push notifications about order status, confirmations, special offers, and app updates.</li>
                <li><strong>Order Tracking:</strong> Provide real-time updates on your order preparation and readiness.</li>
                <li><strong>Payment Processing:</strong> Facilitate secure transactions through third-party payment providers.</li>
                <li><strong>Customer Support:</strong> Respond to your inquiries and resolve issues.</li>
                <li><strong>App Improvement:</strong> Analyze usage patterns to enhance features and user experience.</li>
                <li><strong>Legal Compliance:</strong> Meet regulatory requirements and protect against fraud.</li>
              </ul>
              <p className="mt-3 font-semibold text-lg">We do not sell your personal data to third parties.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">4. Consent</h2>
              <p>By using the Foodlet User App, you consent to the collection and use of your personal data as described in this Privacy Policy. You may:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Withdraw consent at any time by contacting us at <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a></li>
                <li>Disable location services in your device settings (this may limit app functionality)</li>
                <li>Opt out of promotional notifications in app settings</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">5. Data Sharing and Disclosure</h2>
              <p><strong>We do not sell your personal data to third parties.</strong> We may share your data only in these limited circumstances:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Restaurant Partners:</strong> Order details, delivery address, and contact information are shared with restaurants to fulfill your orders.</li>
                <li><strong>Payment Processors:</strong> Payment information is shared with secure third-party payment gateways (e.g., Razorpay, Stripe) to process transactions.</li>
                <li><strong>Authentication Services:</strong> Google OAuth and Firebase for secure login and authentication.</li>
                <li><strong>Cloud Services:</strong> MongoDB Atlas, Google Cloud Platform, and Firebase for data storage and hosting.</li>
                <li><strong>Analytics Providers:</strong> Anonymized usage data may be shared with analytics tools to improve app performance.</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government authorities.</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale, with appropriate data protection safeguards.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">6. Data Security</h2>
              <p>We implement robust technical and organizational security measures:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>End-to-end encryption for sensitive data transmission</li>
                <li>Secure HTTPS connections for all communications</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Encrypted database storage with MongoDB</li>
                <li>Firebase Security Rules for data protection</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">7. Your Rights</h2>
              <p>Under the DPDP Act and applicable laws, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data we hold.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data (subject to legal obligations).</li>
                <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format.</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing at any time.</li>
                <li><strong>Grievance Redressal:</strong> Lodge complaints regarding data processing.</li>
              </ul>
              <p className="mt-3">To exercise these rights, contact us at <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a> or call <a href="tel:+917082820828" className="text-primary hover:underline">+91 7082820828</a>.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">8. Data Retention</h2>
              <p>We retain your personal data only as long as necessary to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide our services and fulfill orders</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records as required by law</li>
              </ul>
              <p className="mt-3">After account deletion, we may retain anonymized data for analytics and legal compliance.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">9. Children's Privacy</h2>
              <p>The Foodlet User App is not intended for individuals under 18 years of age. We do not knowingly collect personal data from children without verifiable parental consent. If we discover we have collected data from a child under 18, we will delete it promptly.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">10. Third-Party Services</h2>
              <p>The app integrates with third-party services including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Google OAuth:</strong> For secure authentication</li>
                <li><strong>Firebase:</strong> For authentication, cloud messaging, and analytics</li>
                <li><strong>Google Cloud Platform:</strong> For hosting and infrastructure</li>
                <li><strong>Payment Gateways:</strong> For secure payment processing</li>
              </ul>
              <p className="mt-3">These services have their own privacy policies. We encourage you to review them.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">11. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes through:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>In-app notifications</li>
                <li>Email to your registered address</li>
                <li>Updated "Last Updated" date at the top of this page</li>
              </ul>
              <p className="mt-3">Continued use of the app after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">12. Contact Us</h2>
              <p>For questions, concerns, or to exercise your rights regarding this Privacy Policy, please contact us:</p>
              <ul className="list-none pl-0 space-y-2 mt-3">
                <li><strong>Company:</strong> M&U Enterprise</li>
                <li><strong>Email:</strong> <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a></li>
                <li><strong>Phone:</strong> <a href="tel:+917082820828" className="text-primary hover:underline">+91 7082820828</a></li>
                <li><strong>Address:</strong> Mohali, Punjab, India</li>
                <li><strong>Website:</strong> <a href="https://foodlet.in" className="text-primary hover:underline">https://foodlet.in</a></li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">13. Grievance Officer</h2>
              <p>For grievances related to data processing, contact our Grievance Officer:</p>
              <ul className="list-none pl-0 space-y-1 mt-3">
                <li><strong>Email:</strong> <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a></li>
                <li><strong>Response Time:</strong> Within 30 days of receiving your complaint</li>
              </ul>
            </section>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-center text-sm text-muted-foreground">
                <Link href="/privacy-policy" className="text-primary hover:underline">View All Privacy Policies</Link> | 
                <Link href="/privacy-policy/restaurant-app" className="text-primary hover:underline ml-2">Restaurant App Privacy Policy</Link> | 
                <Link href="/privacy-policy/master" className="text-primary hover:underline ml-2">Master Privacy Policy</Link>
              </p>
            </div>
          </article>
        </AnimatedWrapper>
      </div>
    </div>
  );
}

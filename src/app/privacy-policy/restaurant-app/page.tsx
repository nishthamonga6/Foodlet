
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Foodlet Restaurant App',
  description: 'Privacy Policy for the Foodlet Restaurant App - Learn how we collect, use, and protect restaurant partner data.',
};

export default function RestaurantAppPrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen section-padding">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <article className="prose lg:prose-xl max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-8">Privacy Policy - Foodlet Restaurant App</h1>
            
            <p className="text-sm text-muted-foreground">Effective Date: December 20, 2025</p>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: December 20, 2025</p>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">1. Introduction</h2>
              <p>Welcome to the Foodlet Restaurant App. This Privacy Policy explains how M&U Enterprise ("we," "us," or "our") collects, uses, discloses, and safeguards information from restaurant partners when using the Foodlet Restaurant App. We are committed to protecting your privacy and complying with the Digital Personal Data Protection Act, 2023 (DPDP Act) and other applicable laws.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">2. Data Collection</h2>
              <p>The Foodlet Restaurant App collects the following types of data from restaurant partners:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Business Account Information:</strong> Restaurant name, business registration details, owner/manager name, email address, phone number for account creation and verification.</li>
                <li><strong>Location Data:</strong> Restaurant address, GPS coordinates, and service areas for customer discovery and order routing.</li>
                <li><strong>Menu Information:</strong> Food items, descriptions, prices, images, availability status, and categories.</li>
                <li><strong>Order Data:</strong> Incoming orders, order history, customer preferences, order timing, and fulfillment status.</li>
                <li><strong>Business Analytics:</strong> Sales data, popular items, peak hours, customer ratings, and performance metrics.</li>
                <li><strong>Device Information:</strong> Device type, operating system, app version, and unique device identifiers used to access the app.</li>
                <li><strong>Communication Data:</strong> Messages with customers, support tickets, and feedback.</li>
                <li><strong>Notification Tokens:</strong> Device tokens for push notifications about new orders and app updates.</li>
                <li><strong>Payment Information:</strong> Bank account details for receiving payments (processed securely through third-party payment providers).</li>
              </ul>
              <p className="mt-3"><strong>Data Storage:</strong> Restaurant data is securely stored using MongoDB database technology with encryption at mongodb://localhost:27017/</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">3. Purpose of Data Processing</h2>
              <p>We collect and use restaurant partner data for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Authentication:</strong> Verify restaurant identity and secure partner accounts using Google OAuth and Firebase Authentication.</li>
                <li><strong>Order Management:</strong> Receive, process, and manage customer orders from the Foodlet User App.</li>
                <li><strong>Location Services:</strong> Display restaurant location to nearby customers and calculate delivery zones.</li>
                <li><strong>Menu Management:</strong> Allow restaurants to update menus, prices, and item availability in real-time.</li>
                <li><strong>Notifications:</strong> Send push notifications about new orders, order updates, and important app announcements.</li>
                <li><strong>Business Analytics:</strong> Provide insights on sales performance, popular items, customer trends, and revenue tracking.</li>
                <li><strong>Payment Processing:</strong> Facilitate secure payment transfers to restaurant bank accounts.</li>
                <li><strong>Customer Communication:</strong> Enable restaurants to update order status and communicate with customers.</li>
                <li><strong>Platform Improvement:</strong> Analyze usage patterns to enhance app features and restaurant experience.</li>
                <li><strong>Legal Compliance:</strong> Meet regulatory requirements, tax obligations, and fraud prevention.</li>
              </ul>
              <p className="mt-3 font-semibold text-lg">We do not sell restaurant data to third parties.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">4. Consent</h2>
              <p>By using the Foodlet Restaurant App, restaurant partners consent to the collection and use of data as described in this Privacy Policy. Restaurants may:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Withdraw consent and close their account by contacting <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a></li>
                <li>Update or modify business information through the app settings</li>
                <li>Control notification preferences in app settings</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">5. Data Sharing and Disclosure</h2>
              <p><strong>We do not sell restaurant data to third parties.</strong> We may share data only in these circumstances:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Customers:</strong> Restaurant name, location, menu, prices, and order status are shared with Foodlet users placing orders.</li>
                <li><strong>Payment Processors:</strong> Bank account information is shared with secure payment gateways to process restaurant payouts.</li>
                <li><strong>Authentication Services:</strong> Google OAuth and Firebase for secure login and authentication.</li>
                <li><strong>Cloud Services:</strong> MongoDB Atlas, Google Cloud Platform, and Firebase for data storage and hosting.</li>
                <li><strong>Analytics Providers:</strong> Anonymized business data may be shared for platform-wide analytics.</li>
                <li><strong>Legal Requirements:</strong> When required by law, tax authorities, or regulatory bodies.</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale, with appropriate safeguards.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">6. Data Security</h2>
              <p>We implement comprehensive security measures to protect restaurant data:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>End-to-end encryption for data transmission</li>
                <li>Secure HTTPS connections for all API communications</li>
                <li>Role-based access controls for restaurant accounts</li>
                <li>Regular security audits and penetration testing</li>
                <li>Encrypted MongoDB database storage</li>
                <li>Firebase Security Rules for data protection</li>
                <li>Two-factor authentication options</li>
                <li>Secure payment processing with PCI-DSS compliance</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">7. Restaurant Partner Rights</h2>
              <p>Under the DPDP Act, restaurant partners have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Access:</strong> Request a copy of all business data we hold.</li>
                <li><strong>Correction:</strong> Update or correct restaurant information, menu items, and business details.</li>
                <li><strong>Erasure:</strong> Request deletion of restaurant data upon account closure (subject to legal retention requirements).</li>
                <li><strong>Data Portability:</strong> Receive business data in a structured, machine-readable format.</li>
                <li><strong>Withdrawal of Consent:</strong> Close restaurant account and withdraw from the platform.</li>
                <li><strong>Grievance Redressal:</strong> Lodge complaints regarding data handling.</li>
              </ul>
              <p className="mt-3">To exercise these rights, contact <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a> or call <a href="tel:+917082820828" className="text-primary hover:underline">+91 7082820828</a>.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">8. Data Retention</h2>
              <p>We retain restaurant data for the following periods:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Active Accounts:</strong> Data is retained while the restaurant partnership is active</li>
                <li><strong>Order History:</strong> Retained for 7 years for tax and regulatory compliance</li>
                <li><strong>Financial Records:</strong> Retained as required by tax laws and accounting standards</li>
                <li><strong>Closed Accounts:</strong> Essential data retained for legal compliance; other data deleted within 90 days</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">9. Third-Party Integrations</h2>
              <p>The Restaurant App integrates with:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Google OAuth:</strong> For secure authentication</li>
                <li><strong>Firebase:</strong> For cloud messaging, analytics, and real-time database</li>
                <li><strong>Google Cloud Platform:</strong> For hosting and infrastructure</li>
                <li><strong>Payment Gateways:</strong> For secure payout processing</li>
                <li><strong>SMS Providers:</strong> For order notifications (if applicable)</li>
              </ul>
              <p className="mt-3">These services have their own privacy policies. We encourage partners to review them.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">10. Customer Order Data</h2>
              <p>Restaurants receive customer order data including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Customer name and contact information</li>
                <li>Order details and special instructions</li>
                <li>Delivery or pickup preferences</li>
              </ul>
              <p className="mt-3"><strong>Important:</strong> Restaurants must handle customer data responsibly, use it only for order fulfillment, and not share it with third parties or use it for marketing without customer consent.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">11. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically. Restaurant partners will be notified through:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>In-app notifications</li>
                <li>Email to registered business email</li>
                <li>Updated "Last Updated" date on this page</li>
              </ul>
              <p className="mt-3">Continued use of the app after changes constitutes acceptance.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">12. Contact Us</h2>
              <p>For questions or concerns regarding this Privacy Policy, please contact:</p>
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
              <p>For grievances related to data processing:</p>
              <ul className="list-none pl-0 space-y-1 mt-3">
                <li><strong>Email:</strong> <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a></li>
                <li><strong>Response Time:</strong> Within 30 days of receiving your complaint</li>
              </ul>
            </section>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-center text-sm text-muted-foreground">
                <Link href="/privacy-policy" className="text-primary hover:underline">View All Privacy Policies</Link> | 
                <Link href="/privacy-policy/user-app" className="text-primary hover:underline ml-2">User App Privacy Policy</Link> | 
                <Link href="/privacy-policy/master" className="text-primary hover:underline ml-2">Master Privacy Policy</Link>
              </p>
            </div>
          </article>
        </AnimatedWrapper>
      </div>
    </div>
  );
}

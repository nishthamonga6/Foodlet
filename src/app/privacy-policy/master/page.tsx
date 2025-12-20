
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Master Privacy Policy - M&U Enterprise',
  description: 'Master Privacy Policy for M&U Enterprise and all Foodlet services.',
};

export default function MasterPrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen section-padding">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <article className="prose lg:prose-xl max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-8">Master Privacy Policy</h1>
            <h2 className="text-3xl font-headline text-foreground mb-6">M&U Enterprise - Foodlet Platform</h2>
            
            <p className="text-sm text-muted-foreground">Effective Date: December 20, 2025</p>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: December 20, 2025</p>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">1. Introduction</h2>
              <p>M&U Enterprise ("we," "us," or "our") operates the Foodlet platform, which includes the Foodlet User App, Foodlet Restaurant App, and associated web services. This Master Privacy Policy provides an overview of our data practices across all Foodlet services. For application-specific details, please refer to individual privacy policies:</p>
              <ul className="list-disc pl-5 space-y-1 mt-3">
                <li><Link href="/privacy-policy/user-app" className="text-primary hover:underline">Foodlet User App Privacy Policy</Link></li>
                <li><Link href="/privacy-policy/restaurant-app" className="text-primary hover:underline">Foodlet Restaurant App Privacy Policy</Link></li>
              </ul>
              <p className="mt-3">We are committed to protecting your privacy and complying with the Digital Personal Data Protection Act, 2023 (DPDP Act), Information Technology Act, 2000, and other applicable laws.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">2. About M&U Enterprise</h2>
              <p><strong>Company Information:</strong></p>
              <ul className="list-none pl-0 space-y-1">
                <li><strong>Company Name:</strong> M&U Enterprise</li>
                <li><strong>Brand:</strong> Foodlet</li>
                <li><strong>Services:</strong> Food pre-ordering platform connecting users with restaurants</li>
                <li><strong>Website:</strong> <a href="https://foodlet.in" className="text-primary hover:underline">https://foodlet.in</a></li>
                <li><strong>Email:</strong> <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a></li>
                <li><strong>Phone:</strong> <a href="tel:+917082820828" className="text-primary hover:underline">+91 7082820828</a></li>
                <li><strong>Location:</strong> Mohali, Punjab, India</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">3. Scope of This Policy</h2>
              <p>This Master Privacy Policy applies to all data processing activities conducted by M&U Enterprise across:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Foodlet User App:</strong> Mobile application for users to browse restaurants and order food</li>
                <li><strong>Foodlet Restaurant App:</strong> Mobile application for restaurant partners to manage orders</li>
                <li><strong>Foodlet Website:</strong> Web platform at foodlet.in providing information and services</li>
                <li><strong>Associated Services:</strong> APIs, backend services, and third-party integrations</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">4. Types of Data We Collect</h2>
              <p>Across the Foodlet platform, we may collect:</p>
              
              <h3 className="text-xl font-headline text-foreground mt-4 mb-2">4.1 Personal Data</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name, email address, phone number</li>
                <li>Account credentials and authentication data</li>
                <li>Profile information and preferences</li>
              </ul>

              <h3 className="text-xl font-headline text-foreground mt-4 mb-2">4.2 Location Data</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>GPS coordinates and device location</li>
                <li>Delivery addresses and service areas</li>
                <li>Restaurant locations and proximity data</li>
              </ul>

              <h3 className="text-xl font-headline text-foreground mt-4 mb-2">4.3 Transaction Data</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Order history and preferences</li>
                <li>Payment information (processed through secure third-party gateways)</li>
                <li>Delivery or pickup details</li>
              </ul>

              <h3 className="text-xl font-headline text-foreground mt-4 mb-2">4.4 Business Data (Restaurant Partners)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Restaurant business information</li>
                <li>Menu items, prices, and availability</li>
                <li>Sales and performance analytics</li>
                <li>Bank account details for payouts</li>
              </ul>

              <h3 className="text-xl font-headline text-foreground mt-4 mb-2">4.5 Technical Data</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Device type, operating system, app version</li>
                <li>IP address, browser type, access times</li>
                <li>Usage patterns and analytics data</li>
                <li>Crash reports and error logs</li>
              </ul>

              <p className="mt-3"><strong>Data Storage:</strong> All data is securely stored using MongoDB database technology with industry-standard encryption at mongodb://localhost:27017/</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">5. How We Use Your Data</h2>
              <p>We use collected data for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Service Delivery:</strong> Provide food ordering, restaurant discovery, and order management services</li>
                <li><strong>Authentication:</strong> Verify user identity using Google OAuth and Firebase Authentication</li>
                <li><strong>Location Services:</strong> Show nearby restaurants and optimize delivery routes</li>
                <li><strong>Order Processing:</strong> Manage orders, payments, and fulfillment</li>
                <li><strong>Notifications:</strong> Send order updates, confirmations, and important announcements via push notifications</li>
                <li><strong>Customer Support:</strong> Respond to inquiries and resolve issues</li>
                <li><strong>Analytics:</strong> Improve platform performance and user experience</li>
                <li><strong>Marketing:</strong> Send promotional offers (with consent)</li>
                <li><strong>Legal Compliance:</strong> Meet regulatory requirements and prevent fraud</li>
              </ul>
              <p className="mt-3 font-semibold text-lg">We do not sell personal data to third parties.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">6. Data Sharing and Disclosure</h2>
              <p><strong>We do not sell your data.</strong> We may share data only in limited circumstances:</p>
              
              <h3 className="text-xl font-headline text-foreground mt-4 mb-2">6.1 Within Foodlet Platform</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>User orders shared with restaurant partners for fulfillment</li>
                <li>Restaurant menus and details shared with users</li>
              </ul>

              <h3 className="text-xl font-headline text-foreground mt-4 mb-2">6.2 Service Providers</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Google OAuth & Firebase:</strong> Authentication and cloud services</li>
                <li><strong>Google Cloud Platform:</strong> Hosting and infrastructure</li>
                <li><strong>MongoDB Atlas:</strong> Database storage and management</li>
                <li><strong>Payment Gateways:</strong> Secure payment processing (Razorpay, Stripe, etc.)</li>
                <li><strong>SMS Providers:</strong> Notifications and OTP delivery</li>
                <li><strong>Analytics Tools:</strong> Platform performance and usage analysis</li>
              </ul>

              <h3 className="text-xl font-headline text-foreground mt-4 mb-2">6.3 Legal Obligations</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>When required by law or court order</li>
                <li>To comply with tax and regulatory requirements</li>
                <li>To protect against fraud and security threats</li>
              </ul>

              <h3 className="text-xl font-headline text-foreground mt-4 mb-2">6.4 Business Transfers</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>In case of merger, acquisition, or sale of assets (with appropriate safeguards)</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">7. Data Security</h2>
              <p>We implement comprehensive security measures including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>End-to-end encryption for data transmission</li>
                <li>HTTPS/SSL for all communications</li>
                <li>Encrypted database storage with MongoDB</li>
                <li>Firebase Security Rules and authentication</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and role-based permissions</li>
                <li>Secure payment processing with PCI-DSS compliance</li>
                <li>Data backup and disaster recovery procedures</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">8. Your Rights Under DPDP Act</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
                <li><strong>Right to Grievance Redressal:</strong> Lodge complaints regarding data processing</li>
                <li><strong>Right to Nominate:</strong> Nominate another person to exercise your rights in case of death or incapacity</li>
              </ul>
              <p className="mt-3">To exercise these rights, contact us at <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a></p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">9. Consent Management</h2>
              <p>By using Foodlet services, you provide consent for data collection and processing as described in this policy. You can:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Withdraw consent by contacting support or deleting your account</li>
                <li>Manage notification preferences in app settings</li>
                <li>Control location permissions in device settings</li>
                <li>Opt out of promotional communications</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">10. Data Retention</h2>
              <p>We retain data for different periods based on type and purpose:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Account Data:</strong> Retained while account is active</li>
                <li><strong>Order History:</strong> Retained for 7 years for tax compliance</li>
                <li><strong>Financial Records:</strong> Retained as per accounting regulations</li>
                <li><strong>Deleted Accounts:</strong> Personal data deleted within 90 days; legal records retained as required</li>
                <li><strong>Analytics Data:</strong> Anonymized and retained for platform improvement</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">11. Children's Privacy</h2>
              <p>Foodlet services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from children without verifiable parental consent. If we discover we have collected data from a child, we will delete it promptly.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">12. International Data Transfers</h2>
              <p>Your data may be transferred to and processed in locations outside India, including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Google Cloud Platform data centers</li>
                <li>Firebase servers (Google infrastructure)</li>
                <li>Third-party service providers with international operations</li>
              </ul>
              <p className="mt-3">We ensure appropriate safeguards are in place for international transfers, including standard contractual clauses and data processing agreements.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">13. Cookies and Tracking</h2>
              <p>Our website and apps may use cookies and similar technologies for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Session management and authentication</li>
                <li>Analytics and performance monitoring</li>
                <li>Personalization and user preferences</li>
                <li>Security and fraud prevention</li>
              </ul>
              <p className="mt-3">You can control cookie preferences through your browser or device settings.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">14. Third-Party Links</h2>
              <p>Foodlet services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">15. Changes to This Privacy Policy</h2>
              <p>We may update this Master Privacy Policy periodically. Users will be notified of significant changes through:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Email notifications to registered accounts</li>
                <li>In-app notifications</li>
                <li>Website banner announcements</li>
                <li>Updated "Last Updated" date at the top of this page</li>
              </ul>
              <p className="mt-3">Continued use of Foodlet services after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">16. Contact Information</h2>
              <p>For questions, concerns, or to exercise your privacy rights, contact M&U Enterprise:</p>
              <ul className="list-none pl-0 space-y-2 mt-3">
                <li><strong>Company:</strong> M&U Enterprise</li>
                <li><strong>Brand:</strong> Foodlet</li>
                <li><strong>Email:</strong> <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a></li>
                <li><strong>Phone:</strong> <a href="tel:+917082820828" className="text-primary hover:underline">+91 7082820828</a></li>
                <li><strong>Address:</strong> Mohali, Punjab, India</li>
                <li><strong>Website:</strong> <a href="https://foodlet.in" className="text-primary hover:underline">https://foodlet.in</a></li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">17. Grievance Redressal</h2>
              <p><strong>Grievance Officer:</strong></p>
              <ul className="list-none pl-0 space-y-1 mt-3">
                <li><strong>Email:</strong> <a href="mailto:support@foodlet.in" className="text-primary hover:underline">support@foodlet.in</a></li>
                <li><strong>Phone:</strong> <a href="tel:+917082820828" className="text-primary hover:underline">+91 7082820828</a></li>
                <li><strong>Response Time:</strong> Within 30 days of receiving your complaint</li>
              </ul>
              <p className="mt-3">If you are not satisfied with our response, you may escalate to the Data Protection Board of India as per DPDP Act provisions.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-headline text-foreground mb-3">18. Compliance & Certifications</h2>
              <p>M&U Enterprise is committed to compliance with:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Digital Personal Data Protection Act, 2023 (DPDP Act)</li>
                <li>Information Technology Act, 2000</li>
                <li>Information Technology (Reasonable Security Practices) Rules, 2011</li>
                <li>Payment Card Industry Data Security Standard (PCI-DSS) for payment processing</li>
              </ul>
            </section>

            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-xl font-headline text-foreground mb-4">Application-Specific Privacy Policies</h3>
              <p className="text-muted-foreground mb-4">For detailed information about specific applications, please refer to:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/privacy-policy/user-app" className="block p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                  <h4 className="font-semibold text-primary mb-2">Foodlet User App</h4>
                  <p className="text-sm text-muted-foreground">Privacy policy for food ordering users</p>
                </Link>
                <Link href="/privacy-policy/restaurant-app" className="block p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                  <h4 className="font-semibold text-primary mb-2">Foodlet Restaurant App</h4>
                  <p className="text-sm text-muted-foreground">Privacy policy for restaurant partners</p>
                </Link>
              </div>
            </div>
          </article>
        </AnimatedWrapper>
      </div>
    </div>
  );
}

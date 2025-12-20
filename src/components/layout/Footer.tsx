
import Link from 'next/link';
import Image from 'next/image'; // For logo if needed in footer later
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'; // Added Linkedin
import logoSrc from '../../app/logo.png'; // Assuming logo is at src/app/logo.png

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <Link href="/" className="flex items-center space-x-2 text-2xl font-headline text-primary mb-4">
              <Image src={logoSrc} alt="Foodlet Logo" width={100} height={26} />
            </Link>
            <p className="text-sm text-muted-foreground">
              Redefining your dining experience with convenient meal pre-ordering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-headline text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#what-we-do" className="hover:text-primary transition-colors">What We Do</Link></li>
              <li><Link href="/#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Privacy Policies */}
          <div>
            <h3 className="text-lg font-headline text-foreground mb-4">Privacy Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">All Privacy Policies</Link></li>
              <li><Link href="/privacy-policy/user-app" className="hover:text-primary transition-colors">User App Policy</Link></li>
              <li><Link href="/privacy-policy/restaurant-app" className="hover:text-primary transition-colors">Restaurant App Policy</Link></li>
              <li><Link href="/privacy-policy/master" className="hover:text-primary transition-colors">Master Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-headline text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@foodlet.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 7082820828</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" /> 
                <span>Mohali, Punjab</span>
              </li>
            </ul>
          </div>

          {/* Social Media & Opening Hours (Adjust as needed for Foodlet) */}
          <div>
            <h3 className="text-lg font-headline text-foreground mb-4">Connect With Us</h3>
             <div className="flex space-x-3 mt-4">
              <Link href="https://www.facebook.com/profile.php?id=61571656661219" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="https://www.instagram.com/foodlet.in/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="https://www.linkedin.com/company/foodlet-in/about/?viewAsMember=true" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
            </div>
            <h3 className="text-lg font-headline text-foreground mb-2 mt-4">Service Hours</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Mon - Sun: 9:00 AM - 10:00 PM</li>
              <li>(Restaurant hours may vary)</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Foodlet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

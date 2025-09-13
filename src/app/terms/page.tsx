import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Proscenium",
  description: "Terms of Service for Proscenium event management and social platform",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                Proscenium
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link href="/privacy" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <p className="text-muted-foreground mb-6">
            <strong>Last updated:</strong> January 2025
          </p>

          <p className="text-muted-foreground mb-8">
            Welcome to Proscenium! These Terms of Service (&quot;Terms&quot;) govern your use of our event management and social 
            platform. By accessing or using our services, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-6">
            By creating an account or using Proscenium, you acknowledge that you have read, understood, and agree to 
            be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our services.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Description of Service</h2>
          <p className="text-muted-foreground mb-6">
            Proscenium is a comprehensive event management platform that allows users to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li>Create, organize, and manage events</li>
            <li>Sell and purchase event tickets</li>
            <li>Discover events in their area</li>
            <li>Connect with other event-goers and build communities</li>
            <li>Share experiences and content related to events</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-4">User Accounts</h2>
          <p className="text-muted-foreground mb-4">To use certain features of our platform, you must:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Be at least 13 years old (or the minimum age in your jurisdiction)</li>
            <li>Be responsible for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-4">User Conduct</h2>
          <p className="text-muted-foreground mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li>Use the platform for any illegal or unauthorized purpose</li>
            <li>Post false, misleading, or fraudulent information</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the platform</li>
            <li>Post content that is offensive, defamatory, or inappropriate</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Event Creation and Management</h2>
          <p className="text-muted-foreground mb-4">When creating events, you agree to:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li>Provide accurate event information</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Obtain necessary permits and licenses</li>
            <li>Honor all ticket sales and refund policies</li>
            <li>Ensure the safety and security of attendees</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Payment and Refunds</h2>
          <p className="text-muted-foreground mb-6">
            All payments are processed through secure third-party payment processors. Refund policies are determined 
            by individual event organizers. Proscenium may charge service fees for certain transactions, which will 
            be clearly disclosed before purchase.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
          <p className="text-muted-foreground mb-6">
            You retain ownership of content you create and share on our platform. By posting content, you grant 
            Proscenium a license to use, display, and distribute your content in connection with our services. 
            You are responsible for ensuring you have the rights to any content you post.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Privacy</h2>
          <p className="text-muted-foreground mb-6">
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, 
            and protect your information.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimers</h2>
          <p className="text-muted-foreground mb-6">
            Proscenium is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the accuracy, 
            completeness, or reliability of any content or services. We are not responsible for the actions or 
            content of third parties, including event organizers and attendees.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
          <p className="text-muted-foreground mb-6">
            To the maximum extent permitted by law, Proscenium shall not be liable for any indirect, incidental, 
            special, consequential, or punitive damages, including but not limited to loss of profits, data, or 
            use, arising from your use of our services.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
          <p className="text-muted-foreground mb-6">
            We may terminate or suspend your account at any time for violation of these Terms or for any other 
            reason at our discretion. You may also terminate your account at any time by contacting us.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
          <p className="text-muted-foreground mb-6">
            We reserve the right to modify these Terms at any time. We will notify users of significant changes 
            through the platform or via email. Continued use of our services after changes constitutes acceptance 
            of the new Terms.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
          <p className="text-muted-foreground mb-6">
            These Terms shall be governed by and construed in accordance with applicable laws. Any disputes 
            arising from these Terms or your use of our services shall be resolved through binding arbitration.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:proscenium.mail@gmail.com" className="text-primary hover:underline">
              proscenium.mail@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

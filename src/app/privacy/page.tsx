import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Proscenium",
  description: "Privacy Policy for Proscenium event management and social platform",
};

export default function PrivacyPolicy() {
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
                <Link href="/terms" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <p className="text-muted-foreground mb-6">
            <strong>Last updated:</strong> January 2025
          </p>

          <p className="text-muted-foreground mb-8">
            At Proscenium, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
            event management and social platform.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-medium text-foreground mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li>Name, email address, and phone number</li>
            <li>Profile information and preferences</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Event creation and attendance data</li>
            <li>Social interactions and content you share</li>
          </ul>

          <h3 className="text-xl font-medium text-foreground mb-3">Usage Information</h3>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li>Device information and IP address</li>
            <li>App usage patterns and preferences</li>
            <li>Location data (with your permission)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li>Provide and maintain our event management services</li>
            <li>Process ticket sales and payments</li>
            <li>Enable social features and community interactions</li>
            <li>Send you important updates about events and platform changes</li>
            <li>Improve our services and develop new features</li>
            <li>Ensure platform security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
          <p className="text-muted-foreground mb-4">
            We do not sell your personal information. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li>With event organizers for events you attend or create</li>
            <li>With other users as part of social features (with your consent)</li>
            <li>With service providers who help us operate our platform</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a business transfer or merger</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
          <p className="text-muted-foreground mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
            internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
          <p className="text-muted-foreground mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6">
            <li>Access and update your personal information</li>
            <li>Delete your account and associated data</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
            <li>Object to certain processing activities</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking</h2>
          <p className="text-muted-foreground mb-6">
            We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide 
            personalized content. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Children&apos;s Privacy</h2>
          <p className="text-muted-foreground mb-6">
            Our services are not intended for children under 13. We do not knowingly collect personal information 
            from children under 13. If you believe we have collected such information, please contact us immediately.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
          <p className="text-muted-foreground mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
            new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:proscenium.mail@gmail.com" className="text-primary hover:underline">
              proscenium.mail@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

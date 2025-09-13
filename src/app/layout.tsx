import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proscenium - Event Management & Social Platform",
  description: "Discover, create, and manage events with Proscenium. The ultimate platform for event organizers, ticket sellers, and event enthusiasts to connect and share experiences.",
  keywords: "event management, ticket sales, event discovery, social events, event platform",
  authors: [{ name: "Proscenium Team" }],
  openGraph: {
    title: "Proscenium - Event Management & Social Platform",
    description: "Discover, create, and manage events with Proscenium. The ultimate platform for event organizers, ticket sellers, and event enthusiasts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

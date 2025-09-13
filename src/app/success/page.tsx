'use client';

import { useEffect, useState } from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success - Proscenium",
  description: "Redirecting to Proscenium app",
};

export default function SuccessPage() {
  const [showFallback, setShowFallback] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    const attemptRedirect = () => {
      // Store the current time to detect if we're still on the page
      const startTime = Date.now();
      
      // Try to redirect to the app
      window.location.href = 'proscenium://onboarding/success';
      
      // Check if we're still on the page after a short delay
      setTimeout(() => {
        const timeOnPage = Date.now() - startTime;
        
        // If we've been on the page for more than 1.5 seconds, 
        // the app probably didn't open
        if (timeOnPage > 1500) {
          setIsRedirecting(false);
          setShowFallback(true);
        }
      }, 1500);
    };

    // Try redirect immediately
    attemptRedirect();
  }, []);

  const handleManualRedirect = () => {
    window.location.href = 'proscenium://onboarding/success';
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">Success!</h1>
        
        {isRedirecting && (
          <div className="mb-6">
            <p className="text-muted-foreground mb-4">Redirecting to Proscenium app...</p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        )}
        
        {showFallback && (
          <div className="space-y-4">
            <p className="text-muted-foreground mb-4">
              Having trouble opening the app? Try clicking the button below:
            </p>
            <button
              onClick={handleManualRedirect}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Open Proscenium App
            </button>
            <p className="text-sm text-muted-foreground">
              If you don&apos;t have the app installed, please download it from your app store.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

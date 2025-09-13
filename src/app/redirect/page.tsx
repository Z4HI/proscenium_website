'use client';

import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const [showFallback, setShowFallback] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    const attemptRedirect = () => {
      try {
        // Use the Universal Link that matches your AASA configuration
        const universalLink = 'https://proscenium-website.vercel.app/onboarding/success';
        
        // Direct redirect (no iframe needed)
        window.location.href = universalLink;
        
        // Fallback after 2 seconds
        setTimeout(() => {
          setIsRedirecting(false);
          setShowFallback(true);
        }, 2000);
      } catch (error) {
        console.error('Redirect failed:', error);
        setIsRedirecting(false);
        setShowFallback(true);
      }
    };

    // Try redirect after a short delay to ensure page is loaded
    setTimeout(attemptRedirect, 500);
  }, []);


  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">Redirecting...</h1>
        
        {isRedirecting && (
          <div className="mb-6">
            <p className="text-muted-foreground mb-4">Redirecting to Proscenium app...</p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        )}
        
        {showFallback && (
          <div className="space-y-4">
            <p className="text-muted-foreground mb-4">
              If you don&apos;t have the app installed, please download it from your app store.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

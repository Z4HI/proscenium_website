'use client';

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    // Signal to the app that the process is complete
    // The app should close the WebBrowser when it detects this page load
    window.location.href = 'proscenium://onboarding/success';
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">Redirecting...</h1>
        <p className="text-muted-foreground mb-4">Opening Proscenium app...</p>
        <p className="text-sm text-muted-foreground">
          If the app doesn&apos;t open, please make sure Proscenium is installed.
        </p>
      </div>
    </div>
  );
}
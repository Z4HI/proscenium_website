import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retry - Proscenium",
  description: "Redirecting to Proscenium app",
};

export default function RetryPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Try to redirect to the app immediately
            window.location.href = 'proscenium://onboarding/retry';
            
            // Fallback: if the app doesn't open, show a message after 2 seconds
            setTimeout(function() {
              document.getElementById('fallback-message').style.display = 'block';
            }, 2000);
          `,
        }}
      />
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Retry</h1>
          <p className="text-muted-foreground mb-4">Redirecting to Proscenium app...</p>
          <div id="fallback-message" style={{ display: 'none' }}>
            <p className="text-sm text-muted-foreground mb-4">
              If the app didn&apos;t open automatically, please:
            </p>
            <a 
              href="proscenium://onboarding/retry" 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Open Proscenium App
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Or download the app from your app store if you don&apos;t have it installed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

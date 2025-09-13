import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retry - Proscenium",
  description: "Redirecting to Proscenium app",
};

export default function RetryPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=proscenium://onboarding/retry" />
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Retry</h1>
          <p className="text-muted-foreground mb-4">Redirecting to Proscenium app...</p>
          <p className="text-sm text-muted-foreground">
            If you don&apos;t have the app installed, please download it from your app store.
          </p>
        </div>
      </div>
    </>
  );
}

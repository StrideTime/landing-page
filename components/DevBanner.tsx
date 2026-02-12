'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Sparkles, Heart } from 'lucide-react';

export function DevBanner() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSupport = () => {
    // If we're on the home page, scroll directly
    if (pathname === '/') {
      const supportSection = document.getElementById('support-section');
      if (supportSection) {
        supportSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page with hash
      router.push('/#support-section');
      // Wait for navigation and then scroll
      setTimeout(() => {
        const supportSection = document.getElementById('support-section');
        if (supportSection) {
          supportSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-center gap-3 text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <p className="text-center">
              <span className="font-semibold">Under Development:</span> Stride is currently being built. Join the waitlist to be notified when we launch!
            </p>
          </div>
          <button
            onClick={scrollToSupport}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-400 hover:bg-pink-500/20 transition-colors text-xs font-medium"
          >
            <Heart className="h-3 w-3" />
            Support the Project
          </button>
        </div>
      </div>
    </div>
  );
}

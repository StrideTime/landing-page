'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Logo variant={3} size={32} showText />
            </Link>
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Demo Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-sm font-medium text-primary">Interactive Demo</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Experience Stride in Action
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            See how Stride helps you master your productivity with intelligent task management and team collaboration.
          </p>

          <div className="aspect-video bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 rounded-2xl border-2 border-border flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-lg text-muted-foreground">
                Interactive demo coming soon
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Join the waitlist to be the first to try Stride
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-accent/20 border border-border">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Instant sync across all devices with offline-first architecture
              </p>
            </div>
            <div className="p-6 rounded-xl bg-accent/20 border border-border">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Goal Focused</h3>
              <p className="text-sm text-muted-foreground">
                Track progress toward meaningful goals with smart insights
              </p>
            </div>
            <div className="p-6 rounded-xl bg-accent/20 border border-border">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Team Ready</h3>
              <p className="text-sm text-muted-foreground">
                Collaborate seamlessly with built-in team intelligence
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/">
              <Button size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo variant={3} size={28} showText />
            <p className="text-sm text-muted-foreground">
              © 2026 Stride. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

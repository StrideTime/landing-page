import Link from 'next/link';
import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo variant={3} size={36} showText />
          <p className="text-sm text-muted-foreground">
            © 2026 Stride. All rights reserved.
          </p>
          <Link href="/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            View Demo →
          </Link>
        </div>
      </div>
    </footer>
  );
}

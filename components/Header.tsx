'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';

export function Header() {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-3">
              <Logo variant={3} size={40} className="sm:hidden" />
              <Logo variant={3} size={40} showText className="hidden sm:flex" />
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button
                variant="ghost"
                className={pathname === '/' ? 'bg-accent' : ''}
              >
                Home
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                variant="ghost"
                className={pathname === '/pricing' ? 'bg-accent' : ''}
              >
                Pricing
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                variant="outline"
                className={pathname === '/demo' ? 'bg-accent' : ''}
              >
                View Demo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

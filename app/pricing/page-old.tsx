'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles, Zap, Users, Building2, Cloud, HardDrive, Plug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/Logo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function PricingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist signup:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const pricing = {
    free: { monthly: 0, annual: 0 },
    personal: { monthly: 10, annual: 8 },
    team: { monthly: 49, annual: 39 },
    business: { monthly: 89, annual: 69 },
  };

  // Integrations data with logos
  const integrations = [
    {
      name: 'Google Calendar',
      logo: 'https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png',
      available: ['personal', 'team', 'business'],
      invertDark: false,
      colorize: false
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
      available: ['personal', 'team', 'business'],
      invertDark: true,
      colorize: false
    },
    {
      name: 'Canvas LMS',
      logo: 'https://www.svgrepo.com/show/501492/canvas-logo.svg',
      available: ['personal', 'team', 'business'],
      invertDark: false,
      colorize: 'red'
    },
    {
      name: 'Trello',
      logo: 'https://cdn.worldvectorlogo.com/logos/trello.svg',
      available: ['team', 'business'],
      invertDark: false,
      colorize: false
    },
    {
      name: 'Jira',
      logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
      available: ['team', 'business'],
      invertDark: false,
      colorize: false
    },
    {
      name: 'Slack',
      logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
      available: ['team', 'business'],
      invertDark: false,
      colorize: false
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Logo variant={3} size={32} showText />
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline">
                  View Demo
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full filter blur-[128px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full filter blur-[128px] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Simple, Transparent Pricing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Choose your plan
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start free. Upgrade for cloud sync. Add team collaboration when you need it.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-0 p-1 bg-accent rounded-lg mb-12 border border-border">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-background text-foreground shadow-sm border border-border'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all flex items-center gap-2 ${
                  billingCycle === 'annual'
                    ? 'bg-background text-foreground shadow-sm border border-border'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Annual
                <span className="text-xs bg-green-500/15 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full font-semibold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Free Plan */}
            <div className="rounded-2xl border-2 border-border bg-background p-6 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <HardDrive className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-xl font-bold">Free</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Desktop app, stored locally
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited personal tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Up to 3 projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Focus timer</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Goals & analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">System tray</span>
                </li>
              </ul>

              <Button disabled className="w-full">
                Coming Soon
              </Button>
            </div>

            {/* Personal Plan */}
            <div className="rounded-2xl border-2 border-primary bg-gradient-to-b from-primary/5 to-background p-6 flex flex-col relative shadow-lg">
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  MOST POPULAR
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Cloud className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Personal</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Cloud sync across all devices
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    ${billingCycle === 'monthly' ? pricing.personal.monthly : pricing.personal.annual}
                  </span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                {billingCycle === 'annual' && (
                  <p className="text-xs text-muted-foreground mt-1">$96 billed annually</p>
                )}
              </div>

              <div className="mb-3 text-xs font-semibold text-muted-foreground">EVERYTHING IN FREE, PLUS:</div>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Sync across all devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Mobile apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>

              <Button className="w-full mb-2" onClick={handleSubmit}>
                Start Free Trial
              </Button>
              <p className="text-xs text-center text-muted-foreground">14-day free trial</p>
            </div>

            {/* Small Team Plan */}
            <div className="rounded-2xl border-2 border-border bg-background p-6 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-xl font-bold">Small Team</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  For teams up to 10
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    ${billingCycle === 'monthly' ? pricing.team.monthly : pricing.team.annual}
                  </span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                {billingCycle === 'annual' && (
                  <p className="text-xs text-muted-foreground mt-1">$468 billed annually</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">+$5/month per extra seat</p>
              </div>

              <div className="mb-3 text-xs font-semibold text-muted-foreground">EVERYTHING IN PERSONAL, PLUS:</div>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Team workspace</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">10 team members</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Team projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Role permissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Team analytics</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full mb-2" onClick={handleSubmit}>
                Start Free Trial
              </Button>
              <p className="text-xs text-center text-muted-foreground">14-day free trial</p>
            </div>

            {/* Business Plan */}
            <div className="rounded-2xl border-2 border-border bg-background p-6 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-xl font-bold">Business</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  For teams up to 20
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    ${billingCycle === 'monthly' ? pricing.business.monthly : pricing.business.annual}
                  </span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                {billingCycle === 'annual' && (
                  <p className="text-xs text-muted-foreground mt-1">$828 billed annually</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">+$4/month per extra seat</p>
              </div>

              <div className="mb-3 text-xs font-semibold text-muted-foreground">EVERYTHING IN SMALL TEAM, PLUS:</div>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">20 team members</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Success manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Onboarding & training</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">99.9% uptime SLA</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full mb-2" onClick={handleSubmit}>
                Start Free Trial
              </Button>
              <p className="text-xs text-center text-muted-foreground">14-day free trial</p>
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-background p-8 text-center">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Enterprise</h3>
              <p className="text-muted-foreground mb-6">
                For larger teams. Custom pricing, unlimited seats, SSO, and on-premise options.
              </p>
              <Button size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Plans Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare all plans</h2>
            <p className="text-muted-foreground">
              Find the perfect plan for your needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold">Features</th>
                  <th className="text-center py-4 px-4">
                    <div className="font-semibold">Free</div>
                    <div className="text-sm text-muted-foreground font-normal">$0/mo</div>
                  </th>
                  <th className="text-center py-4 px-4 bg-primary/5">
                    <div className="font-semibold">Personal</div>
                    <div className="text-sm text-muted-foreground font-normal">
                      ${billingCycle === 'monthly' ? '10' : '8'}/mo
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="font-semibold">Small Team</div>
                    <div className="text-sm text-muted-foreground font-normal">
                      ${billingCycle === 'monthly' ? '49' : '39'}/mo
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="font-semibold">Business</div>
                    <div className="text-sm text-muted-foreground font-normal">
                      ${billingCycle === 'monthly' ? '89' : '69'}/mo
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Core Features */}
                <tr className="border-b bg-accent/10">
                  <td colSpan={5} className="py-3 px-4 font-semibold text-sm">
                    CORE FEATURES
                  </td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">Personal tasks</td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">Projects</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Up to 3</td>
                  <td className="text-center py-4 px-4 bg-primary/5">Unlimited</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">Focus timer</td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">Goals & analytics</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Basic</td>
                  <td className="text-center py-4 px-4 bg-primary/5">Advanced</td>
                  <td className="text-center py-4 px-4">Advanced</td>
                  <td className="text-center py-4 px-4">Advanced</td>
                </tr>

                {/* Sync & Access */}
                <tr className="border-b bg-accent/10">
                  <td colSpan={5} className="py-3 px-4 font-semibold text-sm">
                    SYNC & ACCESS
                  </td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">Cloud sync</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">Mobile apps</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>

                {/* Team Features */}
                <tr className="border-b bg-accent/10">
                  <td colSpan={5} className="py-3 px-4 font-semibold text-sm">
                    TEAM COLLABORATION
                  </td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">Team workspace</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">Team members</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Up to 10</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Up to 20</td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">Role permissions</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">Team analytics</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>

                {/* Support */}
                <tr className="border-b bg-accent/10">
                  <td colSpan={5} className="py-3 px-4 font-semibold text-sm">
                    SUPPORT
                  </td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">Support</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Community</td>
                  <td className="text-center py-4 px-4 bg-primary/5">Priority</td>
                  <td className="text-center py-4 px-4">Priority</td>
                  <td className="text-center py-4 px-4">Dedicated</td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">Success manager</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-accent/5">
                  <td className="py-4 px-4">SLA</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-muted-foreground">—</span>
                  </td>
                  <td className="text-center py-4 px-4 text-muted-foreground">99.9%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 border-y">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Plug className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Integrations</h2>
            <p className="text-muted-foreground">
              Connect Stride with your favorite tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((integration) => {
              return (
                <div key={integration.name} className="p-5 rounded-lg border bg-background flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="h-14 w-14 rounded-lg bg-white dark:bg-slate-800 border flex items-center justify-center shrink-0 p-2">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className={`h-full w-full object-contain ${integration.invertDark ? 'dark:invert' : ''}`}
                      style={integration.colorize === 'red' ? { filter: 'brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(3000%) hue-rotate(345deg) brightness(95%) contrast(90%)' } : undefined}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-3">{integration.name}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {['free', 'personal', 'team', 'business'].map((plan) => {
                        const isAvailable = integration.available.includes(plan);
                        const displayName = plan === 'personal' ? 'pro' : plan;
                        return (
                          <span
                            key={plan}
                            className={`text-xs px-2.5 py-1 rounded-md capitalize font-semibold transition-colors ${
                              isAvailable
                                ? 'bg-emerald-100 dark:bg-emerald-900/80 text-emerald-700 dark:text-emerald-200 ring-1 ring-emerald-300 dark:ring-emerald-700'
                                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-600 ring-1 ring-slate-200 dark:ring-slate-700/50 line-through'
                            }`}
                          >
                            {isAvailable && <span className="mr-1">✓</span>}{displayName}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Request Integration Card */}
            <div className="p-5 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer group">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Plug className="h-7 w-7 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-semibold mb-1">Want another integration?</div>
                <p className="text-xs text-muted-foreground mb-3">
                  Let us know what tools you'd like to see
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 hover:border-primary/50 hover:bg-primary/10"
                >
                  Request Integration
                  <ArrowRight className="h-3 w-3 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background border-y">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4 pb-1">
            <AccordionItem value="item-1" className="border rounded-lg px-6 pb-1">
              <AccordionTrigger className="text-left hover:no-underline">
                What's the difference between Free and Personal?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Free works only on your desktop with data stored locally. Personal adds cloud sync so you can access your tasks from phone, tablet, and web—anywhere you work.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 pb-1">
              <AccordionTrigger className="text-left hover:no-underline">
                When do I need a team plan?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                When you want to collaborate with others. Team plans create a shared workspace where multiple people can work together on projects with role-based permissions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 pb-1">
              <AccordionTrigger className="text-left hover:no-underline">
                Can I add more team members later?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Small Team plans can add seats at $5/month each. Business plans can add seats at $4/month each. Need more than 20 seats? Contact us about Enterprise pricing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 pb-1">
              <AccordionTrigger className="text-left hover:no-underline">
                Can I try before I buy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Personal and all team plans include a 14-day free trial. No credit card required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 pb-1">
              <AccordionTrigger className="text-left hover:no-underline">
                Can I switch plans?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! Upgrade or downgrade anytime. Changes take effect immediately with prorated billing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 pb-2">
              <AccordionTrigger className="text-left hover:no-underline">
                What happens to my data if I cancel?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can export everything anytime. We keep your data for 30 days after cancellation in case you change your mind.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the waitlist and be among the first to experience Stride when we launch.
          </p>
          <div className="max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" size="lg">
                  Join Waitlist
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <Check className="h-5 w-5 text-green-500" />
                <span className="font-medium text-green-600 dark:text-green-400">Thanks! You're on the list.</span>
              </div>
            )}
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
              <Link href="/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Demo
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
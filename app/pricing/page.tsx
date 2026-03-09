'use client';

import { useState, useRef } from 'react';
import { submitWaitlist, submitFeatureRequest } from '@/lib/submissions';
import { useFormDialog } from '@/hooks/useFormDialog';
import { Sparkles, Zap, Plug, CheckCircle2, Users, Check, ArrowRight, Building2, CreditCard, X, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PricingCard, IntegrationCard, ComparisonTable, FAQSection } from '@/components/pricing';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Footer } from '@/components/Footer';
import { pricingTiers, integrations, comparisonFeatures, faqItems } from './data';
import type { PricingTier } from '@/components/pricing/PricingCard';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const selectedTierRef = useRef<PricingTier | null>(null);

  const waitlist = useFormDialog({
    initialValues: { email: '' },
    onSubmit: v => submitWaitlist(v.email),
  });

  const tierWaitlist = useFormDialog({
    initialValues: { email: '' },
    onSubmit: v => submitWaitlist(v.email, selectedTierRef.current?.name?.toLowerCase()),
  });

  const integration = useFormDialog({
    initialValues: { name: '', description: '', email: '' },
    onSubmit: v => submitFeatureRequest({
      title: v.name,
      description: v.description,
      email: v.email,
      type: 'integration',
    }),
  });

  const handlePricingCta = (tier: PricingTier) => {
    if (tier.comingSoon) {
      selectedTierRef.current = tier;
      tierWaitlist.setOpen(true);
    } else {
      waitlist.setOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full filter blur-[128px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full filter blur-[128px] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Simple, Transparent Pricing</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
              Choose the perfect plan<br />for your workflow
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Start with our free plan and upgrade as you grow. No credit card required, cancel anytime.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div className="text-sm font-semibold">No credit card required</div>
                <div className="text-xs text-muted-foreground text-center">Start using Stride immediately</div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <X className="h-5 w-5 text-primary" />
                </div>
                <div className="text-sm font-semibold">Cancel anytime</div>
                <div className="text-xs text-muted-foreground text-center">No long-term commitment</div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div className="text-sm font-semibold">Scale as you grow</div>
                <div className="text-xs text-muted-foreground text-center">Add seats and features on demand</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing Toggle */}
          <div className="flex flex-col items-center mb-12 gap-3">
            <div className="inline-flex items-center gap-2 p-1.5 bg-accent/50 border border-border rounded-xl shadow-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`w-32 py-3 rounded-lg text-sm font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-background shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`w-32 py-3 rounded-lg text-sm font-semibold transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-background shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Annual
              </button>
            </div>
            <div className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full font-semibold">
              Save 20% with annual billing
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingTiers.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                billingCycle={billingCycle}
                onCtaClick={handlePricingCta}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Need something custom?</h2>
          <p className="text-muted-foreground mb-6">
            Enterprise plans include volume discounts, custom integrations, dedicated support, and tailored onboarding.
          </p>
          <Button size="lg" variant="outline">
            Contact Sales
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Compare Plans */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare all features</h2>
            <p className="text-muted-foreground">
              See everything that's included in each plan
            </p>
          </div>

          <ComparisonTable features={comparisonFeatures} />
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Plug className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Integrations</h2>
            <p className="text-muted-foreground">
              Connect Stride with your favorite tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((int) => (
              <IntegrationCard key={int.name} integration={int} />
            ))}

            {/* Request Integration Card */}
            <div
              className="p-5 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer group"
              onClick={() => integration.setOpen(true)}
            >
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
                  onClick={e => {
                    e.stopPropagation();
                    integration.setOpen(true);
                  }}
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
      <FAQSection items={faqItems} />

      {/* CTA Section */}
      <section id="waitlist-cta" className="py-24 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the waitlist and be among the first to experience Stride when we launch.
          </p>
          <Button
            size="lg"
            onClick={() => waitlist.setOpen(true)}
            className="px-8"
          >
            Join Waitlist
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />

      {/* Waitlist Dialog */}
      <Dialog open={waitlist.open} onOpenChange={waitlist.setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join the Waitlist</DialogTitle>
            <DialogDescription>
              Be the first to know when Stride launches. We'll send you an email with early access.
            </DialogDescription>
          </DialogHeader>

          {!waitlist.submitted ? (
            <form onSubmit={waitlist.handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="waitlist-email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="waitlist-email"
                  type="email"
                  placeholder="name@example.com"
                  value={waitlist.values.email}
                  onChange={e => waitlist.setField('email', e.target.value)}
                  required
                />
              </div>
              {waitlist.error && (
                <p className="text-sm text-red-500 text-center">{waitlist.error}</p>
              )}
              <Button type="submit" className="w-full">
                Join Waitlist
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. No spam, ever. View our{' '}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 py-4 px-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="font-medium text-green-600 dark:text-green-400">
                Thanks! You're on the list.
              </span>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Tier-Specific Coming Soon Dialog */}
      <Dialog open={tierWaitlist.open} onOpenChange={tierWaitlist.setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get Notified - {selectedTierRef.current?.name} Plan</DialogTitle>
            <DialogDescription>
              Be the first to know when the {selectedTierRef.current?.name} plan launches. We'll send you an email as soon as it's available.
            </DialogDescription>
          </DialogHeader>

          {!tierWaitlist.submitted ? (
            <form onSubmit={tierWaitlist.handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="tier-email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="tier-email"
                  type="email"
                  placeholder="name@example.com"
                  value={tierWaitlist.values.email}
                  onChange={e => tierWaitlist.setField('email', e.target.value)}
                  required
                />
              </div>
              {tierWaitlist.error && (
                <p className="text-sm text-red-500 text-center">{tierWaitlist.error}</p>
              )}
              <Button type="submit" className="w-full">
                Notify Me
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 py-4 px-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="font-medium text-green-600 dark:text-green-400">
                Thanks! We'll notify you when it's ready.
              </span>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Request Integration Dialog */}
      <Dialog open={integration.open} onOpenChange={integration.setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request an Integration</DialogTitle>
            <DialogDescription>
              Tell us what tool you'd like to integrate with Stride. We'll notify you when it's available.
            </DialogDescription>
          </DialogHeader>

          {!integration.submitted ? (
            <form onSubmit={integration.handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="integration-name" className="text-sm font-medium">
                  Integration Name
                </label>
                <Input
                  id="integration-name"
                  type="text"
                  placeholder="e.g., Notion, Linear, Figma"
                  value={integration.values.name}
                  onChange={e => integration.setField('name', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="integration-description" className="text-sm font-medium">
                  How would you use it?
                </label>
                <textarea
                  id="integration-description"
                  placeholder="Tell us how this integration would help your workflow..."
                  value={integration.values.description}
                  onChange={e => integration.setField('description', e.target.value)}
                  required
                  className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="integration-email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="integration-email"
                  type="email"
                  placeholder="Enter your email"
                  value={integration.values.email}
                  onChange={e => integration.setField('email', e.target.value)}
                  required
                />
              </div>
              {integration.error && (
                <p className="text-sm text-red-500 text-center">{integration.error}</p>
              )}
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 py-4 px-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="font-medium text-green-600 dark:text-green-400">
                Thanks! We'll notify you when it's ready.
              </span>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

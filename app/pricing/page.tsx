'use client';

import { useState } from 'react';
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

  // Waitlist dialog state
  const [waitlistDialogOpen, setWaitlistDialogOpen] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  // Tier-specific dialog state
  const [tierDialogOpen, setTierDialogOpen] = useState(false);
  const [tierDialogEmail, setTierDialogEmail] = useState('');
  const [tierDialogSubmitted, setTierDialogSubmitted] = useState(false);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  // Integration request dialog state
  const [integrationDialogOpen, setIntegrationDialogOpen] = useState(false);
  const [integrationEmail, setIntegrationEmail] = useState('');
  const [integrationName, setIntegrationName] = useState('');
  const [integrationDescription, setIntegrationDescription] = useState('');
  const [integrationSubmitted, setIntegrationSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist signup:', waitlistEmail);
    setWaitlistSubmitted(true);
    setTimeout(() => {
      setWaitlistSubmitted(false);
      setWaitlistEmail('');
      setWaitlistDialogOpen(false);
    }, 2000);
  };

  const handleTierDialogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tier waitlist signup:', tierDialogEmail, 'for tier:', selectedTier?.name);
    setTierDialogSubmitted(true);
    setTimeout(() => {
      setTierDialogSubmitted(false);
      setTierDialogEmail('');
      setTierDialogOpen(false);
    }, 2000);
  };

  const handlePricingCta = (tier: PricingTier) => {
    if (tier.comingSoon) {
      setSelectedTier(tier);
      setTierDialogOpen(true);
    } else {
      // Open main waitlist dialog for non-coming-soon tiers
      setWaitlistDialogOpen(true);
    }
  };

  const handleIntegrationRequest = () => {
    setIntegrationDialogOpen(true);
  };

  const handleIntegrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Integration request:', {
      email: integrationEmail,
      name: integrationName,
      description: integrationDescription,
    });
    setIntegrationSubmitted(true);
    setTimeout(() => {
      setIntegrationSubmitted(false);
      setIntegrationEmail('');
      setIntegrationName('');
      setIntegrationDescription('');
      setIntegrationDialogOpen(false);
    }, 2000);
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
            {integrations.map((integration) => (
              <IntegrationCard key={integration.name} integration={integration} />
            ))}

            {/* Request Integration Card */}
            <div
              className="p-5 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer group"
              onClick={handleIntegrationRequest}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleIntegrationRequest();
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
            onClick={() => setWaitlistDialogOpen(true)}
            className="px-8"
          >
            Join Waitlist
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />

      {/* Waitlist Dialog */}
      <Dialog open={waitlistDialogOpen} onOpenChange={setWaitlistDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join the Waitlist</DialogTitle>
            <DialogDescription>
              Be the first to know when Stride launches. We'll send you an email with early access.
            </DialogDescription>
          </DialogHeader>

          {!waitlistSubmitted ? (
            <form onSubmit={handleWaitlistSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="waitlist-email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="waitlist-email"
                  type="email"
                  placeholder="name@example.com"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  required
                />
              </div>
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
      <Dialog open={tierDialogOpen} onOpenChange={setTierDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get Notified - {selectedTier?.name} Plan</DialogTitle>
            <DialogDescription>
              Be the first to know when the {selectedTier?.name} plan launches. We'll send you an email as soon as it's available.
            </DialogDescription>
          </DialogHeader>

          {!tierDialogSubmitted ? (
            <form onSubmit={handleTierDialogSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="tier-email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="tier-email"
                  type="email"
                  placeholder="name@example.com"
                  value={tierDialogEmail}
                  onChange={(e) => setTierDialogEmail(e.target.value)}
                  required
                />
              </div>
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
      <Dialog open={integrationDialogOpen} onOpenChange={setIntegrationDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request an Integration</DialogTitle>
            <DialogDescription>
              Tell us what tool you'd like to integrate with Stride. We'll notify you when it's available.
            </DialogDescription>
          </DialogHeader>

          {!integrationSubmitted ? (
            <form onSubmit={handleIntegrationSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="integration-name" className="text-sm font-medium">
                  Integration Name
                </label>
                <Input
                  id="integration-name"
                  type="text"
                  placeholder="e.g., Notion, Linear, Figma"
                  value={integrationName}
                  onChange={(e) => setIntegrationName(e.target.value)}
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
                  value={integrationDescription}
                  onChange={(e) => setIntegrationDescription(e.target.value)}
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
                  value={integrationEmail}
                  onChange={(e) => setIntegrationEmail(e.target.value)}
                  required
                />
              </div>
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

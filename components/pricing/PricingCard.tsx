import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface PricingTier {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  price: {
    monthly: number;
    annual: number;
  };
  description: string;
  features: string[];
  ctaText: string;
  ctaVariant?: 'default' | 'outline';
  highlighted?: boolean;
  popular?: boolean;
  popularBadgeText?: string;
  additionalInfo?: string;
  comingSoon?: boolean;
  disabled?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
  billingCycle: 'monthly' | 'annual';
  onCtaClick: (tier: PricingTier) => void;
}

export function PricingCard({ tier, billingCycle, onCtaClick }: PricingCardProps) {
  const price = tier.price[billingCycle];
  const annualTotal = tier.price.annual * 12;
  const Icon = tier.icon;

  return (
    <div className={`rounded-2xl border-2 bg-background p-6 flex flex-col relative ${
      tier.highlighted ? 'border-primary shadow-lg' : 'border-border'
    }`}>
      {tier.popular && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
            {tier.popularBadgeText?.toUpperCase() || 'MOST POPULAR'}
          </Badge>
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-bold">{tier.name}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>

        {tier.comingSoon ? (
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className="text-xs">Coming Soon</Badge>
          </div>
        ) : (
          <>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">${price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            {billingCycle === 'annual' && price > 0 && (
              <p className="text-xs text-muted-foreground mt-1">${annualTotal} billed annually</p>
            )}
            {tier.additionalInfo && (
              <p className="text-xs text-muted-foreground mt-1">{tier.additionalInfo}</p>
            )}
          </>
        )}
      </div>

      <div className="mb-3 text-xs font-semibold text-muted-foreground">
        {tier.id === 'free' ? 'FEATURES' : 'EVERYTHING IN ' + (tier.id === 'personal' ? 'FREE' : tier.id === 'team' ? 'PERSONAL' : 'TEAM') + ', PLUS:'}
      </div>

      <ul className="space-y-3 mb-6 flex-1">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={tier.ctaVariant || 'default'}
        className="w-full mb-2"
        onClick={() => onCtaClick(tier)}
        disabled={tier.disabled}
      >
        {tier.ctaText}
      </Button>
      {tier.id !== 'free' && !tier.comingSoon && !tier.disabled && (
        <p className="text-xs text-center text-muted-foreground">14-day free trial</p>
      )}
    </div>
  );
}

import { HardDrive, Cloud, Users, Building2 } from 'lucide-react';
import type { PricingTier } from '@/components/pricing/PricingCard';
import type { Integration } from '@/components/pricing/IntegrationCard';
import type { ComparisonFeature } from '@/components/pricing/ComparisonTable';
import type { FAQItem } from '@/components/pricing/FAQSection';

export const pricingTiers: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    icon: HardDrive,
    price: {
      monthly: 0,
      annual: 0,
    },
    description: 'Desktop app, stored locally',
    features: [
      'Unlimited personal tasks',
      'Up to 3 projects',
      'Focus timer',
      'Goals & analytics',
      'System tray',
    ],
    ctaText: 'Get Notified',
    ctaVariant: 'outline',
    comingSoon: true,
    disabled: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: Cloud,
    price: {
      monthly: 10,
      annual: 8,
    },
    description: 'Cloud sync across all devices',
    features: [
      'Sync across all devices',
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      'Custom themes',
    ],
    ctaText: 'Get Notified',
    highlighted: true,
    popular: true,
    popularBadgeText: 'Best Value',
    comingSoon: true,
    disabled: false,
  },
  {
    id: 'team',
    name: 'Small Team',
    icon: Users,
    price: {
      monthly: 49,
      annual: 39,
    },
    description: 'For teams up to 10 members',
    features: [
      'Team workspace',
      '10 team members',
      'Team projects',
      'Role permissions',
      'Team analytics',
    ],
    ctaText: 'Get Notified',
    ctaVariant: 'outline',
    additionalInfo: '+$5/month per extra seat',
    comingSoon: true,
    disabled: false,
  },
  {
    id: 'business',
    name: 'Business',
    icon: Building2,
    price: {
      monthly: 89,
      annual: 69,
    },
    description: 'For teams up to 20 members',
    features: [
      'Everything in Team',
      '20 team members',
      'Advanced permissions',
      'SSO & security',
      'Dedicated support',
      'Custom integrations',
    ],
    ctaText: 'Get Notified',
    ctaVariant: 'outline',
    additionalInfo: '+$4/month per extra seat',
    comingSoon: true,
    disabled: false,
  },
];

export const integrations: Integration[] = [
  {
    name: 'Google Calendar',
    logo: 'https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png',
    available: ['pro', 'team', 'business'],
    invertDark: false,
    colorize: false,
    comingSoon: true,
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
    available: ['pro', 'team', 'business'],
    invertDark: true,
    colorize: false,
    comingSoon: true,
  },
  {
    name: 'Canvas LMS',
    logo: 'https://www.svgrepo.com/show/501492/canvas-logo.svg',
    available: ['pro', 'team', 'business'],
    invertDark: false,
    colorize: 'red',
    comingSoon: true,
  },
  {
    name: 'Trello',
    logo: 'https://cdn.worldvectorlogo.com/logos/trello.svg',
    available: ['team', 'business'],
    invertDark: false,
    colorize: false,
    comingSoon: true,
  },
  {
    name: 'Jira',
    logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
    available: ['team', 'business'],
    invertDark: false,
    colorize: false,
    comingSoon: true,
  },
  {
    name: 'Slack',
    logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
    available: ['team', 'business'],
    invertDark: false,
    colorize: false,
    comingSoon: true,
  },
];

export const comparisonFeatures: ComparisonFeature[] = [
  {
    category: 'Core Features',
    features: [
      { name: 'Personal tasks', free: true, pro: true, team: true, business: true },
      { name: 'Projects', free: '3', pro: 'Unlimited', team: 'Unlimited', business: 'Unlimited' },
      { name: 'Focus timer', free: true, pro: true, team: true, business: true },
      { name: 'Goals & analytics', free: true, pro: true, team: true, business: true },
      { name: 'System tray', free: true, pro: true, team: true, business: true },
    ],
  },
  {
    category: 'Sync & Access',
    features: [
      { name: 'Desktop app', free: true, pro: true, team: true, business: true },
      { name: 'Cloud sync', free: false, pro: true, team: true, business: true },
      { name: 'Mobile apps', free: false, pro: true, team: true, business: true },
      { name: 'Web access', free: false, pro: true, team: true, business: true },
    ],
  },
  {
    category: 'Collaboration',
    features: [
      { name: 'Team workspace', free: false, pro: false, team: true, business: true },
      { name: 'Team members', free: '1', pro: '1', team: '10', business: '20' },
      { name: 'Shared projects', free: false, pro: false, team: true, business: true },
      { name: 'Role permissions', free: false, pro: false, team: 'Basic', business: 'Advanced' },
      { name: 'Team analytics', free: false, pro: false, team: true, business: true },
    ],
  },
  {
    category: 'Advanced',
    features: [
      { name: 'Custom themes', free: false, pro: true, team: true, business: true },
      { name: 'Priority support', free: false, pro: true, team: true, business: true },
      { name: 'SSO & security', free: false, pro: false, team: false, business: true },
      { name: 'Custom integrations', free: false, pro: false, team: false, business: true },
      { name: 'Dedicated support', free: false, pro: false, team: false, business: true },
    ],
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What's the difference between Free and Pro?",
    answer: "Free works only on your desktop with data stored locally. Pro adds cloud sync so you can access your tasks from phone, tablet, and web—anywhere you work.",
  },
  {
    question: "When do I need a team plan?",
    answer: "When you want to collaborate with others. Team plans create a shared workspace where multiple people can work together on projects with role-based permissions.",
  },
  {
    question: "Can I add more team members later?",
    answer: "Yes! Small Team plans can add seats at $5/month each. Business plans can add seats at $4/month each. Need more than 20 seats? Contact us about Enterprise pricing.",
  },
  {
    question: "Can I try before I buy?",
    answer: "Yes! Pro and all team plans include a 14-day free trial. No credit card required.",
  },
  {
    question: "Can I switch plans?",
    answer: "Absolutely! Upgrade or downgrade anytime. Changes take effect immediately with prorated billing.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "You can export everything anytime. We keep your data for 30 days after cancellation in case you change your mind.",
  },
];

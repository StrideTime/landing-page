import { Badge } from '@/components/ui/badge';

export interface Integration {
  name: string;
  logo: string;
  available: string[];
  invertDark?: boolean;
  colorize?: string | false;
  comingSoon?: boolean;
}

interface IntegrationCardProps {
  integration: Integration;
  plans?: string[];
}

export function IntegrationCard({
  integration,
  plans = ['free', 'personal', 'team', 'business']
}: IntegrationCardProps) {
  return (
    <div className={`p-5 rounded-lg border bg-background flex items-start gap-4 transition-all ${
      integration.comingSoon
        ? 'opacity-60 hover:opacity-80'
        : 'hover:shadow-md'
    }`}>
      <div className={`h-14 w-14 rounded-lg bg-white dark:bg-slate-800 border flex items-center justify-center shrink-0 p-2 ${
        integration.comingSoon ? 'grayscale' : ''
      }`}>
        <img
          src={integration.logo}
          alt={integration.name}
          className={`h-full w-full object-contain ${integration.invertDark ? 'dark:invert' : ''}`}
          style={integration.colorize === 'red' ? { filter: 'brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(3000%) hue-rotate(345deg) brightness(95%) contrast(90%)' } : undefined}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="font-semibold">{integration.name}</div>
          {integration.comingSoon && (
            <Badge variant="outline" className="text-xs">Coming Soon</Badge>
          )}
        </div>
        {integration.comingSoon ? (
          <p className="text-xs text-muted-foreground">
            We're working on bringing this integration to Stride
          </p>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {plans.map((plan) => {
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
        )}
      </div>
    </div>
  );
}

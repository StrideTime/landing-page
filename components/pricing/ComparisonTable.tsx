import React from 'react';
import { Check, X } from 'lucide-react';

export interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    free: boolean | string;
    pro: boolean | string;
    team: boolean | string;
    business: boolean | string;
  }[];
}

interface ComparisonTableProps {
  features: ComparisonFeature[];
  plans?: {
    id: string;
    name: string;
  }[];
}

export function ComparisonTable({
  features,
  plans = [
    { id: 'free', name: 'Free' },
    { id: 'pro', name: 'Pro' },
    { id: 'team', name: 'Team' },
    { id: 'business', name: 'Business' }
  ]
}: ComparisonTableProps) {
  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-emerald-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-slate-300 dark:text-slate-700 mx-auto" />
      );
    }
    return <span className="text-sm text-center block">{value}</span>;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2">
            <th className="text-left py-4 px-4 font-semibold">Features</th>
            {plans.map((plan) => (
              <th key={plan.id} className="text-center py-4 px-4 font-semibold capitalize">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((category, categoryIndex) => (
            <React.Fragment key={`category-${categoryIndex}`}>
              <tr className="bg-muted/50">
                <td colSpan={plans.length + 1} className="py-3 px-4 font-semibold text-sm">
                  {category.category}
                </td>
              </tr>
              {category.features.map((feature, featureIndex) => (
                <tr
                  key={`feature-${categoryIndex}-${featureIndex}`}
                  className="border-b"
                >
                  <td className="py-3 px-4 text-sm">{feature.name}</td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="py-3 px-4">
                      {renderCell(feature[plan.id as keyof typeof feature] as boolean | string)}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

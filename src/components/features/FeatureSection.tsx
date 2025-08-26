import type { LucideIcon } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  features: Feature[];
  iconColor?: string;
  iconBgColor?: string;
}

export const FeatureSection = ({
  title,
  description,
  features,
  iconColor,
  iconBgColor,
}: FeatureSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
              iconColor={iconColor}
              iconBgColor={iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

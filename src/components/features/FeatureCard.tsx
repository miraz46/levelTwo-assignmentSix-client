import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  iconColor?: string;
  iconBgColor?: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  badge,
  iconColor = "text-primary",
  iconBgColor = "bg-primary/10",
}: FeatureCardProps) => {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconBgColor}`}
          >
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
          {badge && <Badge variant="secondary">{badge}</Badge>}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

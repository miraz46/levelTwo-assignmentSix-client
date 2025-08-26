import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { promotions } from "@/pages/data/randomJson";
import { Gift } from "lucide-react";

export default function PromotionalSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Gift className="h-3 w-3 mr-1" />
            Special Offers
          </Badge>
          <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
            Limited time promotions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take advantage of these exclusive deals and start saving on your
            rides today.
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
            >
              <div className={`h-2 bg-gradient-to-r ${promo.color}`} />
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${promo.color}`}
                  >
                    <promo.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {promo.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  {promo.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {promo.description}
                </p>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Promo Code:
                  </span>
                  <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded border dark:border-gray-600">
                    {promo.code}
                  </code>
                </div>
                <Button className="w-full group-hover:scale-105 transition-transform">
                  Claim Offer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

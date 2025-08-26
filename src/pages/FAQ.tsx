import { useState } from "react";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { categories, faqs } from "./data/randomJson";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryFAQs = (categoryId: string) => {
    return filteredFAQs.filter((faq) => faq.category === categoryId);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 dark:from-gray-800 to-indigo-100 dark:to-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8">
            Find answers to common questions about RideShare
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-400" />
            <Input
              type="text"
              placeholder="Search for answers..."
              className="pl-10 pr-4 py-3 text-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const categoryFAQs = getCategoryFAQs(category.id);
            return (
              <div key={category.id} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${category.color}`}
                >
                  <category.icon className="h-4 w-4" />
                </div>
                <span>{category.title}</span>
                <Badge variant="secondary">{categoryFAQs.length}</Badge>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const categoryFAQs = getCategoryFAQs(category.id);
            if (!categoryFAQs.length) return null;

            return (
              <div key={category.id} className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl">{category.title}</h2>
                  <Badge variant="outline">
                    {categoryFAQs.length} questions
                  </Badge>
                </div>

                <div className="space-y-4">
                  {categoryFAQs.map((faq) => (
                    <Card
                      key={faq.id}
                      className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
                    >
                      <Collapsible
                        open={openItems.includes(faq.id)}
                        onOpenChange={() => toggleItem(faq.id)}
                      >
                        <CollapsibleTrigger className="w-full">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between text-left">
                              <h3 className="text-lg pr-4">{faq.question}</h3>
                              <ChevronDown
                                className={`h-5 w-5 text-gray-500 dark:text-gray-300 transition-transform ${
                                  openItems.includes(faq.id) ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          </CardContent>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0 px-6 pb-6">
                            <p className="leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredFAQs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl mb-2">No results found</h3>
              <p className="mb-6">
                Sorry, we couldn't find any questions matching "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="text-primary hover:text-primary/80"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-4">Still have questions?</h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="tel:1-800-RIDESHARE"
              className="border border-white text-white dark:text-gray-100 px-6 py-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Call 1-800-RIDESHARE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

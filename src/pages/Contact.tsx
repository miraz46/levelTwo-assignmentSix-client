import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MessageSquare } from "lucide-react";

import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contactInfo } from "./data/randomJson";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions, feedback, or need support? We're here to help.
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center bg-white dark:bg-gray-800 dark:text-gray-200"
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-900 dark:text-gray-200 mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible. For urgent matters, please call our support line.
              </p>

              <Card className="bg-white dark:bg-gray-800 dark:text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Contact Form
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    We typically respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          {...register("name")}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select
                        onValueChange={(value) => setValue("subject", value)}
                      >
                        <SelectTrigger
                          className={errors.subject ? "border-destructive" : ""}
                        >
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-gray-800 dark:text-gray-200">
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="support">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="billing">
                            Billing Question
                          </SelectItem>
                          <SelectItem value="driver">Driver Support</SelectItem>
                          <SelectItem value="safety">Safety Concern</SelectItem>
                          <SelectItem value="partnership">
                            Partnership
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.subject && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        {...register("message")}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Quick answers to common questions. Can't find what you're
                looking for? Send us a message and we'll help you out.
              </p>

              <div className="space-y-6">
                <Card className="bg-white dark:bg-gray-800 dark:text-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg text-gray-900 dark:text-white mb-2">
                      How do I request a ride?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Simply open the app, enter your pickup location and
                      destination, and tap "Request Ride". A driver will be
                      matched to you automatically.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 dark:text-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg text-gray-900 dark:text-white mb-2">
                      What payment methods do you accept?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We accept all major credit cards, debit cards, PayPal, and
                      mobile payment services like Apple Pay and Google Pay.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 dark:text-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg text-gray-900 dark:text-white mb-2">
                      How do I become a driver?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      To become a driver, you need a valid driver's license,
                      insurance, and a vehicle that meets our requirements.
                      Apply through our driver portal.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 dark:text-gray-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg text-gray-900 dark:text-white mb-2">
                      Is RideShare available 24/7?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Yes! RideShare operates 24 hours a day, 7 days a week in
                      all our service areas, so you can get a ride whenever you
                      need one.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

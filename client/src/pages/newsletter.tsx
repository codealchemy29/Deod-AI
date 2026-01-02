import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsletterSubscriptionSchema } from "@shared/schema";
import {
  Mail,
  Sparkles,
  CheckCircle2,
  Users,
  TrendingUp,
  Gift,
  Bell,
  Zap,
  ArrowRight,
  Shield,
  BookOpen,
  Lightbulb,
  Rocket,
  Loader2,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Weekly AI Insights",
    description: "Curated trends, breakthroughs, and analysis delivered every week.",
  },
  {
    icon: Gift,
    title: "Exclusive Resources",
    description: "Access to guides, templates, and tools only for subscribers.",
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Be the first to know about new features and opportunities.",
  },
  {
    icon: Bell,
    title: "Creator Opportunities",
    description: "Get notified about partnerships, sponsorships, and collaborations.",
  },
];

const pastIssues = [
  {
    title: "The Future of AI Agents",
    date: "December 15, 2024",
    description: "How autonomous AI is reshaping productivity and what it means for creators.",
    icon: Rocket,
  },
  {
    title: "Building AI Products That Sell",
    date: "December 8, 2024",
    description: "Insights from top creators on what makes an AI product successful.",
    icon: Lightbulb,
  },
  {
    title: "The AI Tool Stack for 2025",
    date: "December 1, 2024",
    description: "Essential tools every AI creator should have in their arsenal.",
    icon: BookOpen,
  },
];

const formSchema = insertNewsletterSubscriptionSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive emails to subscribe",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Newsletter() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      agreedToTerms: false,
    },
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: { email: string }) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", { email: data.email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Welcome to DEODAI Insider!",
        description: "You've been subscribed successfully. Check your email for confirmation.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Subscription Failed",
        description: error.message?.includes("already subscribed") 
          ? "This email is already subscribed to our newsletter." 
          : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    subscribeMutation.mutate({ email: data.email });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Updated Gradients to #1e3a8a */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/20 via-blue-900/10 to-indigo-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#1e3a8a]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1e3a8a]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-[#1e3a8a]/10 text-[#1e3a8a] hover:bg-[#1e3a8a]/20" data-testid="badge-newsletter-hero">
            <Mail className="w-3 h-3 mr-1" />
            Newsletter
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-newsletter-title">
            Join the{" "}
            <span className="bg-gradient-to-r from-[#1e3a8a] via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              DEODAI Insider
            </span>{" "}
            Newsletter
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-newsletter-subtitle">
            Get weekly AI insights, creator opportunities, exclusive resources, 
            and early access to new features delivered straight to your inbox.
          </p>
          
          {/* Subscribe Form */}
          <Card className="max-w-lg mx-auto border-border/50 bg-card/80 backdrop-blur-sm" data-testid="card-subscribe-form">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email address"
                              className="focus-visible:ring-[#1e3a8a]"
                              {...field}
                              data-testid="input-newsletter-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white border-0" 
                      disabled={subscribeMutation.isPending}
                      data-testid="button-subscribe"
                    >
                      {subscribeMutation.isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="agreedToTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-left">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-[#1e3a8a] data-[state=checked]:border-[#1e3a8a]"
                            data-testid="checkbox-terms"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-muted-foreground leading-relaxed font-normal">
                            I agree to receive emails from DEODAI. You can unsubscribe anytime. 
                            We respect your privacy and won't share your data.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[#1e3a8a]" />
              15,000+ subscribers
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#1e3a8a]" />
              No spam, ever
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#1e3a8a]" />
              GDPR compliant
            </span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-benefits-title">
              What You'll Get
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              More than just a newsletter - a curated experience for AI enthusiasts and creators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm group hover:border-[#1e3a8a]/50 transition-colors" data-testid={`card-newsletter-benefit-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-[#1e3a8a]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Issues Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a]" data-testid="badge-past-issues">
              <Sparkles className="w-3 h-3 mr-1" />
              Past Issues
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-past-issues-title">
              See What You're Missing
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A sneak peek at some of our recent newsletter issues.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pastIssues.map((issue, index) => (
              <Card key={index} className="hover-elevate border-border/50 bg-card/50 backdrop-blur-sm group hover:border-[#1e3a8a]/30" data-testid={`card-past-issue-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1e3a8a] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <issue.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xs text-[#1e3a8a] font-medium mb-2">{issue.date}</div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#1e3a8a] transition-colors">{issue.title}</h3>
                  <p className="text-muted-foreground text-sm">{issue.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Mail className="h-12 w-12 text-[#1e3a8a] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-final-cta">
            Don't Miss Out on AI Insights
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of AI creators, developers, and enthusiasts who stay ahead with our weekly newsletter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 focus-visible:ring-[#1e3a8a]"
              data-testid="input-footer-newsletter"
            />
            <Button className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white border-0" data-testid="button-footer-subscribe">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
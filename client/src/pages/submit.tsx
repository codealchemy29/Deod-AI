import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertToolSubmissionSchema } from "@shared/schema";
import {
  Upload,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  Wallet,
  BarChart3,
  Clock,
  Shield,
  Zap,
  Send,
  PieChart,
  Loader2,
} from "lucide-react";

const categories = [
  { value: "text", label: "Text AI" },
  { value: "image", label: "Image AI" },
  { value: "video", label: "Video AI" },
  { value: "audio", label: "Audio AI" },
  { value: "code", label: "Code AI" },
  { value: "automation", label: "Automation" },
];

const benefits = [
  {
    icon: DollarSign,
    title: "90% Revenue Share",
    description: "Keep 90% of every sale. The most generous split in the industry.",
  },
  {
    icon: Zap,
    title: "Fast Approval",
    description: "Get your tool reviewed and approved within 48 hours.",
  },
  {
    icon: Wallet,
    title: "Weekly Payouts",
    description: "Get paid every week via your preferred payment method.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track your sales, views, and earnings in real-time.",
  },
  {
    icon: Shield,
    title: "Verification Badge",
    description: "Stand out with a verified creator badge on your tools.",
  },
  {
    icon: Clock,
    title: "No Lock-in",
    description: "Remove your tool anytime. You own your product.",
  },
];

const mockEarnings = {
  totalEarnings: 12450,
  thisMonth: 2340,
  pendingPayout: 890,
  tools: [
    { name: "AI Content Writer", earnings: 5200, sales: 145 },
    { name: "Image Enhancer Pro", earnings: 4100, sales: 98 },
    { name: "Code Helper Bot", earnings: 3150, sales: 78 },
  ],
};

const formSchema = insertToolSubmissionSchema.extend({
  toolName: z.string().min(2, "Tool name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(1, "Please select a category"),
  websiteUrl: z.string().url("Please enter a valid URL"),
  creatorEmail: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Submit() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      toolName: "",
      description: "",
      category: "",
      websiteUrl: "",
      creatorEmail: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest("POST", "/api/submissions", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Submission Received!",
        description: "Your tool has been submitted for review. We'll get back to you within 48 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    submitMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/10 to-teal-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4" data-testid="badge-submit-hero">
              <Upload className="w-3 h-3 mr-1" />
              Submit Your Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-submit-title">
              Submit Your AI Tool &{" "}
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Earn 90% Revenue
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-submit-subtitle">
              Join thousands of creators earning with DEOD AI. Submit your tool, 
              get verified, and start earning 90% of every sale.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Highlight */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-emerald-900/90 to-teal-900/90" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/10 text-white border-white/20" data-testid="badge-revenue-highlight">
                <TrendingUp className="w-3 h-3 mr-1" />
                Creator-First Revenue
              </Badge>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-8xl md:text-9xl font-bold">90%</span>
                  <span className="text-2xl md:text-3xl text-white/80">You Keep</span>
                </div>
              </div>
              
              <p className="text-lg text-white/70 mb-8">
                We believe creators deserve the lion's share. That's why we only take 10% - 
                no hidden fees, no surprises. The most transparent revenue model in the industry.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Instant earnings tracking</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Weekly payouts</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>No minimums</span>
                </div>
              </div>
            </div>
            
            {/* Revenue Split Visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 relative" data-testid="visual-revenue-split">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="12"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      strokeDasharray="226.2"
                      strokeDashoffset="22.62"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <PieChart className="h-8 w-8 mb-2 text-green-400" />
                    <span className="text-4xl font-bold">90/10</span>
                    <span className="text-sm text-white/70">Revenue Split</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500" />
                    You: 90%
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                    Platform: 10%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form & Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Submission Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-form-title">
                Submit Your Tool
              </h2>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm" data-testid="card-submission-form">
                <CardContent className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="toolName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tool Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your tool name"
                                {...field}
                                data-testid="input-submit-tool-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe what your tool does..."
                                rows={4}
                                className="resize-none"
                                {...field}
                                data-testid="input-submit-description"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-submit-category">
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {categories.map((cat) => (
                                  <SelectItem key={cat.value} value={cat.value}>
                                    {cat.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="websiteUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Website URL *</FormLabel>
                            <FormControl>
                              <Input
                                type="url"
                                placeholder="https://your-tool.com"
                                {...field}
                                data-testid="input-submit-website"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="creatorEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@example.com"
                                {...field}
                                data-testid="input-submit-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white border-0" 
                        size="lg" 
                        disabled={submitMutation.isPending}
                        data-testid="button-submit-form"
                      >
                        {submitMutation.isPending ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Submit for Review
                          </>
                        )}
                      </Button>
                      
                      <p className="text-muted-foreground text-sm text-center">
                        By submitting, you agree to our terms of service and creator guidelines.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-benefits-title">
                Why Submit to DEOD AI?
              </h2>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm" data-testid={`card-benefit-${index}`}>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Dashboard Preview */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4" data-testid="badge-dashboard">
              <BarChart3 className="w-3 h-3 mr-1" />
              Creator Dashboard
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-dashboard-title">
              Track Your Earnings in Real-Time
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get full visibility into your sales, revenue, and payouts with our creator dashboard.
            </p>
          </div>
          
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm max-w-4xl mx-auto" data-testid="card-dashboard-preview">
            <CardHeader className="border-b border-border/50">
              <CardTitle>Earnings Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <div className="text-3xl font-bold text-green-500">${mockEarnings.totalEarnings.toLocaleString()}</div>
                  <div className="text-muted-foreground text-sm">Total Earnings</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-500">${mockEarnings.thisMonth.toLocaleString()}</div>
                  <div className="text-muted-foreground text-sm">This Month</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-500">${mockEarnings.pendingPayout.toLocaleString()}</div>
                  <div className="text-muted-foreground text-sm">Pending Payout</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold">Your Tools</h3>
                {mockEarnings.tools.map((tool, index) => (
                  <div key={index} className="flex items-center justify-between gap-4 p-4 rounded-lg bg-muted/30">
                    <div>
                      <div className="font-medium">{tool.name}</div>
                      <div className="text-muted-foreground text-sm">{tool.sales} sales</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-green-500">${tool.earnings.toLocaleString()}</div>
                      <div className="text-muted-foreground text-xs">earned</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

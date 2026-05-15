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
  Gamepad2,
  Map,
  Image as ImageIcon,
  Video,
  Heart,
  Network,
  Cpu,
  Coins,
  ShoppingCart,
  Bot
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

const useCases = [
  {
    title: "Gaming Agents",
    icon: Gamepad2,
    features: ["Generate quests", "Coach players", "Manage tournaments", "Detect cheating", "Adapt NPC behavior"],
    description: "The CREATE → TRAIN → DEPLOY → MONETIZE lifecycle enables continuous learning from gameplay interactions.",
    color: "from-[#1e3a8a] to-blue-500"
  },
  {
    title: "LAND Management Agents",
    icon: Map,
    features: ["Handle rentals", "Manage commerce", "Schedule events", "Analyze traffic", "Optimize LAND profitability"],
    description: "LAND Intelligence Agents autonomously manage your virtual real estate. All activities generate DEOD flows automatically.",
    color: "from-teal-600 to-cyan-500"
  },
  {
    title: "NFT Marketplace Agents",
    icon: ImageIcon,
    features: ["Fraud detection", "Rarity analysis", "Price prediction", "Automated listings", "Portfolio advisory"],
    description: "These systems create intelligent marketplace infrastructure for your NFT assets.",
    color: "from-cyan-600 to-teal-600"
  },
  {
    title: "Creator & Media Agents",
    icon: Video,
    features: ["Generate music", "Create videos", "Produce films", "Mint NFTs", "Manage streaming royalties"],
    description: "All creator assets remain fully owned by the user through smart contracts.",
    color: "from-[#1e3a8a] to-indigo-600"
  },
  {
    title: "Avatar & Companion Agents",
    icon: Heart,
    features: ["Autonomous interactions", "Attending virtual events", "Managing user tasks", "Maintaining long-term memory"],
    description: "Companion Agents maintain emotional continuity and relationship context through semantic memory systems.",
    color: "from-pink-600 to-rose-500"
  }
];

const infrastructure = [
  "Multi-LLM orchestration",
  "DAI Agent SDK",
  "Polygon blockchain",
  "PostgreSQL + Redis + Pinecone memory stack",
  "Kubernetes-based scaling",
  "IPFS decentralized storage"
];

const monetization = [
  "Monthly subscriptions",
  "Usage-based payments",
  "Licensing fees",
  "Marketplace royalties",
  "Revenue-share agreements"
];

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
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-border">

  {/* background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/5 via-background to-teal-500/5 dark:from-[#1e3a8a]/10 dark:via-background dark:to-teal-500/10" />

  {/* glow effects */}
  <div className="absolute top-10 right-10 w-64 h-64 bg-[#1e3a8a]/10 rounded-full blur-3xl" />
  <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

    <div className="max-w-4xl">

      {/* badge */}
      <Badge className="mb-5 bg-[#1e3a8a]/10 text-[#1e3a8a] dark:text-blue-300 border-[#1e3a8a]/20">
        <Upload className="w-3 h-3 mr-1" />
        Decentrawood AI Infrastructure
      </Badge>

      {/* heading */}
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
        data-testid="text-submit-title"
      >
        Use Your{" "}
        <span className="bg-gradient-to-r from-[#1e3a8a] via-blue-700 to-teal-500 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
          Agent
        </span>
      </h1>

      {/* subtitle */}
      <p
        className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl"
        data-testid="text-submit-subtitle"
      >
        Once deployed, your AI agents become active participants inside the
        Decentrawood ecosystem — powering intelligent gameplay, virtual commerce,
        AI-generated media, autonomous interactions, and DEOD-powered revenue
        systems across the metaverse.
      </p>

      {/* quick feature pills */}
      <div className="flex flex-wrap gap-3">

        <div className="px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm text-sm font-medium text-foreground shadow-sm">
          11+ AI Agent Categories
        </div>

        <div className="px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm text-sm font-medium text-foreground shadow-sm">
          Multi-LLM Infrastructure
        </div>

        <div className="px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm text-sm font-medium text-foreground shadow-sm">
          Polygon + Web3 Powered
        </div>

      </div>

    </div>
  </div>
</section>

      {/* Revenue Highlight */}
      {/* <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-teal-900/90 to-blue-900/90" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl" />
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
                  <CheckCircle2 className="h-5 w-5 text-teal-400" />
                  <span>Instant earnings tracking</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-teal-400" />
                  <span>Weekly payouts</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-teal-400" />
                  <span>No minimums</span>
                </div>
              </div>
            </div>
            
        
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
                      stroke="url(#gradient-blue)"
                      strokeWidth="12"
                      strokeDasharray="226.2"
                      strokeDashoffset="22.62"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <PieChart className="h-8 w-8 mb-2 text-teal-400" />
                    <span className="text-4xl font-bold">90/10</span>
                    <span className="text-sm text-white/70">Revenue Split</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-500" />
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
      </section> */}

      {/* Submission Form & Benefits */}
      {/* <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
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
                                className="focus-visible:ring-blue-500"
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
                                className="resize-none focus-visible:ring-blue-500"
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
                                <SelectTrigger data-testid="select-submit-category" className="focus:ring-blue-500">
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
                                className="focus-visible:ring-blue-500"
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
                                className="focus-visible:ring-blue-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white border-0 hover:opacity-90 transition-opacity"
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

           
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-benefits-title">
                Why Submit to DEODAI?
              </h2>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm" data-testid={`card-benefit-${index}`}>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
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
      </section> */}


      {/* Earnings Dashboard Preview */}
      {/* <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-teal-100 text-teal-700" data-testid="badge-dashboard">
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
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-teal-500/10 border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-600">${mockEarnings.totalEarnings.toLocaleString()}</div>
                  <div className="text-muted-foreground text-sm">Total Earnings</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
                  <div className="text-3xl font-bold text-teal-600">${mockEarnings.thisMonth.toLocaleString()}</div>
                  <div className="text-muted-foreground text-sm">This Month</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20">
                  <div className="text-3xl font-bold text-indigo-600">${mockEarnings.pendingPayout.toLocaleString()}</div>
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
                      <div className="font-semibold text-teal-600">${tool.earnings.toLocaleString()}</div>
                      <div className="text-muted-foreground text-xs">earned</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* ================= USE YOUR AGENT ================= */}
      <section className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a] dark:text-blue-300 border-[#1e3a8a]/20">
              <Bot className="w-3 h-3 mr-1" />
              Use Your Agent
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Active Participants in Decentrawood
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Once deployed, agents become active participants in the Decentrawood ecosystem.
              Discover how users interact with agents across various verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${useCase.color}`} />
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                    <useCase.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4">{useCase.title}</h3>

                  <div className="space-y-3 mb-6">
                    {useCase.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm font-medium">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-teal-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed p-4 bg-muted/50 rounded-lg border border-border/50">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MARKETPLACE & INFRASTRUCTURE ================= */}
      <section className="py-16 md:py-24 bg-muted/30 border-t border-border overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Marketplace */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <ShoppingCart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold">Agent Marketplace & Monetization</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                The Decentrawood AI Agent Marketplace enables users to interact, trade, and license agents securely using DEOD tokens through smart contracts.
              </p>

              <Card className="bg-background border-border shadow-sm mb-8">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <Coins className="h-5 w-5 mr-2 text-teal-500" />
                    Marketplace Capabilities
                  </h4>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {["Buy agents", "Sell agents", "Rent agents", "License agents", "Fractionalize ownership"].map((action, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium bg-muted/50 p-2 rounded-md">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {action}
                      </div>
                    ))}
                  </div>

                  <h4 className="font-semibold text-lg mb-4 mt-6 border-t border-border pt-6">Revenue Models</h4>
                  <div className="space-y-3">
                    {monetization.map((model, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
                        <span className="font-medium">{model}</span>
                        <Badge variant="outline" className="bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 hover:bg-teal-100">Active</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Infrastructure */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-lg">
                  <Network className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h2 className="text-3xl font-bold">Core Infrastructure</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                This powerful framework runs behind the system to orchestrate all seven Decentrawood verticals from gaming to entertainment and AI commerce.
              </p>

              <div className="grid gap-4">
                {infrastructure.map((tech, i) => (
                  <Card key={i} className="bg-background border-border hover:border-teal-500/50 transition-colors group">
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-teal-50 dark:group-hover:bg-teal-900/20 transition-colors">
                        <Cpu className="h-5 w-5 text-muted-foreground group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
                      </div>
                      <span className="font-semibold text-lg">{tech}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
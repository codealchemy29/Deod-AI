var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertToolSubmissionSchema } from "@shared/schema";
import { Upload, DollarSign, TrendingUp, CheckCircle2, Wallet, BarChart3, Clock, Shield, Zap, Send, PieChart, Loader2, } from "lucide-react";
var categories = [
    { value: "text", label: "Text AI" },
    { value: "image", label: "Image AI" },
    { value: "video", label: "Video AI" },
    { value: "audio", label: "Audio AI" },
    { value: "code", label: "Code AI" },
    { value: "automation", label: "Automation" },
];
var benefits = [
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
var mockEarnings = {
    totalEarnings: 12450,
    thisMonth: 2340,
    pendingPayout: 890,
    tools: [
        { name: "AI Content Writer", earnings: 5200, sales: 145 },
        { name: "Image Enhancer Pro", earnings: 4100, sales: 98 },
        { name: "Code Helper Bot", earnings: 3150, sales: 78 },
    ],
};
var formSchema = insertToolSubmissionSchema.extend({
    toolName: z.string().min(2, "Tool name must be at least 2 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    category: z.string().min(1, "Please select a category"),
    websiteUrl: z.string().url("Please enter a valid URL"),
    creatorEmail: z.string().email("Please enter a valid email address"),
});
export default function Submit() {
    var _this = this;
    var toast = useToast().toast;
    var form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            toolName: "",
            description: "",
            category: "",
            websiteUrl: "",
            creatorEmail: "",
        },
    });
    var submitMutation = useMutation({
        mutationFn: function (data) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, apiRequest("POST", "/api/submissions", data)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        }); },
        onSuccess: function () {
            toast({
                title: "Submission Received!",
                description: "Your tool has been submitted for review. We'll get back to you within 48 hours.",
            });
            form.reset();
        },
        onError: function (error) {
            toast({
                title: "Submission Failed",
                description: error.message || "Something went wrong. Please try again.",
                variant: "destructive",
            });
        },
    });
    var onSubmit = function (data) {
        submitMutation.mutate(data);
    };
    return (<div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-teal-900/10 to-blue-900/20"/>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"/>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"/>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100" data-testid="badge-submit-hero">
              <Upload className="w-3 h-3 mr-1"/>
              Submit Your Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-submit-title">
              Submit Your AI Tool &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-500 bg-clip-text text-transparent">
                Earn 90% Revenue
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-submit-subtitle">
              Join thousands of creators earning with DEODAI. Submit your tool, 
              get verified, and start earning 90% of every sale.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Highlight */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-teal-900/90 to-blue-900/90"/>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"/>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl"/>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/10 text-white border-white/20" data-testid="badge-revenue-highlight">
                <TrendingUp className="w-3 h-3 mr-1"/>
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
                  <CheckCircle2 className="h-5 w-5 text-teal-400"/>
                  <span>Instant earnings tracking</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-teal-400"/>
                  <span>Weekly payouts</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-teal-400"/>
                  <span>No minimums</span>
                </div>
              </div>
            </div>
            
            {/* Revenue Split Visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 relative" data-testid="visual-revenue-split">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient-blue)" strokeWidth="12" strokeDasharray="226.2" strokeDashoffset="22.62" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6"/>
                        <stop offset="100%" stopColor="#14b8a6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <PieChart className="h-8 w-8 mb-2 text-teal-400"/>
                    <span className="text-4xl font-bold">90/10</span>
                    <span className="text-sm text-white/70">Revenue Split</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"/>
                    You: 90%
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-white/20"/>
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
                      <FormField control={form.control} name="toolName" render={function (_a) {
            var field = _a.field;
            return (<FormItem>
                            <FormLabel>Tool Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your tool name" {...field} data-testid="input-submit-tool-name" className="focus-visible:ring-blue-500"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>);
        }}/>
                      
                      <FormField control={form.control} name="description" render={function (_a) {
            var field = _a.field;
            return (<FormItem>
                            <FormLabel>Description *</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Describe what your tool does..." rows={4} className="resize-none focus-visible:ring-blue-500" {...field} data-testid="input-submit-description"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>);
        }}/>
                      
                      <FormField control={form.control} name="category" render={function (_a) {
            var field = _a.field;
            return (<FormItem>
                            <FormLabel>Category *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-submit-category" className="focus:ring-blue-500">
                                  <SelectValue placeholder="Select a category"/>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {categories.map(function (cat) { return (<SelectItem key={cat.value} value={cat.value}>
                                    {cat.label}
                                  </SelectItem>); })}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>);
        }}/>
                      
                      <FormField control={form.control} name="websiteUrl" render={function (_a) {
            var field = _a.field;
            return (<FormItem>
                            <FormLabel>Website URL *</FormLabel>
                            <FormControl>
                              <Input type="url" placeholder="https://your-tool.com" {...field} data-testid="input-submit-website" className="focus-visible:ring-blue-500"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>);
        }}/>
                      
                      <FormField control={form.control} name="creatorEmail" render={function (_a) {
            var field = _a.field;
            return (<FormItem>
                            <FormLabel>Your Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@example.com" {...field} data-testid="input-submit-email" className="focus-visible:ring-blue-500"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>);
        }}/>
                      
                      <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white border-0 hover:opacity-90 transition-opacity" size="lg" disabled={submitMutation.isPending} data-testid="button-submit-form">
                        {submitMutation.isPending ? (<>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin"/>
                            Submitting...
                          </>) : (<>
                            <Send className="h-4 w-4 mr-2"/>
                            Submit for Review
                          </>)}
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
                Why Submit to DEODAI?
              </h2>
              <div className="grid gap-4">
                {benefits.map(function (benefit, index) { return (<Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm" data-testid={"card-benefit-".concat(index)}>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-5 w-5 text-white"/>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>); })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Dashboard Preview */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-teal-100 text-teal-700" data-testid="badge-dashboard">
              <BarChart3 className="w-3 h-3 mr-1"/>
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
                {mockEarnings.tools.map(function (tool, index) { return (<div key={index} className="flex items-center justify-between gap-4 p-4 rounded-lg bg-muted/30">
                    <div>
                      <div className="font-medium">{tool.name}</div>
                      <div className="text-muted-foreground text-sm">{tool.sales} sales</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-teal-600">${tool.earnings.toLocaleString()}</div>
                      <div className="text-muted-foreground text-xs">earned</div>
                    </div>
                  </div>); })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>);
}

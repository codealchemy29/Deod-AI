import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Search,
  Wrench,
  DollarSign,
  ShoppingBag,
  Newspaper,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Bot,
  Brain,
  Code,
  Palette,
  Video,
  Music,
  CheckCircle2,
  Mail,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Learn AI",
    description: "Master AI skills from beginner to advanced with structured learning paths.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Search,
    title: "Explore Tools",
    description: "Discover verified AI tools and agents across every category.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: "Create Tools",
    description: "Build and launch your own AI tools without friction.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: DollarSign,
    title: "90% Revenue",
    description: "Earn 90% revenue share on every approved tool submission.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace",
    description: "Buy and sell AI tools, prompts, and agents.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Newspaper,
    title: "AI News",
    description: "Stay updated with real-time AI news and insights.",
    color: "from-indigo-500 to-violet-500",
  },
];

const toolCategories = [
  { icon: Brain, label: "Text AI", count: "150+" },
  { icon: Palette, label: "Image AI", count: "120+" },
  { icon: Video, label: "Video AI", count: "80+" },
  { icon: Music, label: "Audio AI", count: "60+" },
  { icon: Code, label: "Code AI", count: "100+" },
  { icon: Bot, label: "Automation", count: "90+" },
];

const stats = [
  { value: "10,000+", label: "AI Creators" },
  { value: "500+", label: "AI Tools" },
  { value: "$2M+", label: "Creator Earnings" },
  { value: "50K+", label: "Active Learners" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5" data-testid="badge-hero">
              <Sparkles className="w-3 h-3 mr-1" />
              The Future of AI Creation
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                DEOD AI
              </span>
              <br />
              <span className="text-foreground">
                Learn, Build, Discover & Monetize
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" data-testid="text-hero-subtitle">
              The all-in-one AI platform to master skills, explore powerful tools, 
              create your own AI products, and earn <span className="font-semibold text-foreground">90% revenue</span> as a creator.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/learn">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-0 px-8" data-testid="button-get-started">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/submit">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8" data-testid="button-submit-tool">
                  Submit Your AI Tool
                </Button>
              </Link>
              <Link href="/explore">
                <Button size="lg" variant="ghost" className="w-full sm:w-auto" data-testid="button-explore-tools">
                  Explore AI Tools
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground text-sm">
              <Users className="h-4 w-4" />
              <span>Join 10,000+ AI creators worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-features-title">
              Everything You Need for AI Success
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From learning to earning, DEOD AI provides the complete toolkit for AI creators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover-elevate border-border/50 bg-card/50 backdrop-blur-sm" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Highlight Section */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-cyan-900/90" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20" data-testid="badge-revenue">
              <TrendingUp className="w-3 h-3 mr-1" />
              Creator-First Revenue Model
            </Badge>
            
            <div className="mb-6">
              <span className="text-7xl md:text-8xl lg:text-9xl font-bold">90%</span>
              <p className="text-xl md:text-2xl mt-2 text-white/80">You Keep</p>
            </div>
            
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8" data-testid="text-revenue-description">
              Submit your AI tools and earn 90% of every sale. We only take 10%. 
              No hidden fees, no surprises. The most creator-friendly revenue share in the industry.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/submit">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90" data-testid="button-start-earning">
                  Start Earning Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Instant Approval
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Weekly Payouts
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                No Lock-in
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-20 md:py-24 lg:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-categories-title">
              Explore AI Tools by Category
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover hundreds of verified AI tools across every domain.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {toolCategories.map((category, index) => (
              <Link href="/explore" key={index}>
                <Card className="group hover-elevate cursor-pointer border-border/50 bg-card/50" data-testid={`card-category-${index}`}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <category.icon className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="font-medium text-sm">{category.label}</div>
                    <div className="text-muted-foreground text-xs mt-1">{category.count} tools</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why DEOD AI Section */}
      <section className="py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4" data-testid="badge-why">
                Why Choose DEOD AI
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-why-title">
                Built for the Next Generation of AI Creators
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                DEOD AI is more than a platform. It's an ecosystem designed to empower 
                creators, developers, and entrepreneurs with the tools, education, 
                visibility, and real monetization they deserve.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Lightning Fast Launch</h4>
                    <p className="text-muted-foreground text-sm">Go from idea to launch in minutes with our no-code tool builder.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Verified & Trusted</h4>
                    <p className="text-muted-foreground text-sm">Every tool goes through our verification process for quality assurance.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Thriving Community</h4>
                    <p className="text-muted-foreground text-sm">Join thousands of AI enthusiasts learning and building together.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <Card className="relative border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden" data-testid="card-preview">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="h-24 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center">
                        <Brain className="h-8 w-8 text-purple-500" />
                      </div>
                      <div className="h-32 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center">
                        <Code className="h-10 w-10 text-blue-500" />
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="h-32 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
                        <Palette className="h-10 w-10 text-cyan-500" />
                      </div>
                      <div className="h-24 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center">
                        <Video className="h-8 w-8 text-pink-500" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 md:py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4" data-testid="badge-newsletter">
            <Mail className="w-3 h-3 mr-1" />
            Newsletter
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-newsletter-title">
            Join the DEOD AI Insider Newsletter
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get weekly AI insights, creator opportunities, and early access to new features.
          </p>
          <Link href="/newsletter">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-0" data-testid="button-join-newsletter">
              Subscribe Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

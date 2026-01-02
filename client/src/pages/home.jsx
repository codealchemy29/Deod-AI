import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { GraduationCap, Search, Wrench, DollarSign, ShoppingBag, Newspaper, ArrowRight, Sparkles, Brain, Code, Palette, Video, Music, Bot, CheckCircle2, Mail, ExternalLink, Filter, Grid3X3, Star } from "lucide-react";
/* =======================
    DATA & HELPERS
======================= */
var features = [
    { icon: GraduationCap, title: "Learn AI", description: "Master AI skills from beginner to advanced with structured learning paths." },
    { icon: Search, title: "Explore Tools", description: "Discover verified AI tools and agents across every category." },
    { icon: Wrench, title: "Create Tools", description: "Build and launch your own AI tools without friction." },
    { icon: DollarSign, title: "90% Revenue", description: "Earn 90% revenue share on every approved tool submission." },
    { icon: ShoppingBag, title: "Marketplace", description: "Buy and sell AI tools, prompts, and agents." },
    { icon: Newspaper, title: "AI News", description: "Stay updated with real-time AI news and insights." },
];
var categories = [
    { id: "all", label: "All Tools", icon: Grid3X3 },
    { id: "text", label: "Text AI", icon: Brain },
    { id: "image", label: "Image AI", icon: Palette },
    { id: "video", label: "Video AI", icon: Video },
    { id: "audio", label: "Audio AI", icon: Music },
    { id: "code", label: "Code AI", icon: Code },
    { id: "automation", label: "Automation", icon: Bot },
];
function getCategoryIcon(category) {
    var cat = categories.find(function (c) { return c.id === category; });
    return (cat === null || cat === void 0 ? void 0 : cat.icon) || Brain;
}
function getCategoryColor(category) {
    switch (category) {
        case "text": return "from-[#1e3a8a] to-teal-500";
        case "image": return "from-teal-500 to-cyan-500";
        case "video": return "from-blue-600 to-sky-500";
        case "audio": return "from-teal-600 to-emerald-500";
        case "code": return "from-indigo-900 to-blue-700";
        case "automation": return "from-cyan-600 to-teal-600";
        default: return "from-muted to-muted-foreground";
    }
}
function ToolCardSkeleton() {
    return (<Card className="bg-card border border-border/50 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Skeleton className="w-12 h-12 rounded-lg bg-muted"/>
          <div className="flex-1">
            <Skeleton className="h-5 w-24 mb-2 bg-muted"/>
            <Skeleton className="h-4 w-16 bg-muted"/>
          </div>
        </div>
        <Skeleton className="h-4 w-full mb-2 bg-muted"/>
        <Skeleton className="h-6 w-16 mb-4 bg-muted"/>
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <Skeleton className="h-4 w-12 bg-muted"/>
          <Skeleton className="h-6 w-16 bg-muted"/>
        </div>
        <Skeleton className="h-9 w-full mt-4 bg-muted"/>
      </CardContent>
    </Card>);
}
/* =======================
    PAGE
======================= */
export default function Home() {
    var _a = useState(""), searchQuery = _a[0], setSearchQuery = _a[1];
    var _b = useState("all"), selectedCategory = _b[0], setSelectedCategory = _b[1];
    var _c = useState("all"), pricingFilter = _c[0], setPricingFilter = _c[1];
    var _d = useQuery({
        queryKey: ["/api/tools"],
    }), _e = _d.data, tools = _e === void 0 ? [] : _e, isLoading = _d.isLoading, error = _d.error;
    var filteredTools = tools.filter(function (tool) {
        var matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase());
        var matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
        var matchesPricing = pricingFilter === "all" ||
            (pricingFilter === "free" && tool.pricing.toLowerCase().includes("free")) ||
            (pricingFilter === "paid" && !tool.pricing.toLowerCase().includes("free"));
        return matchesSearch && matchesCategory && matchesPricing;
    });
    return (<div className="min-h-screen bg-background text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-background to-teal-500/10 dark:from-blue-900/20 dark:via-background dark:to-teal-500/20"/>
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <Badge className="mb-6 bg-[#1e3a8a]/10 text-[#1e3a8a] dark:text-blue-300 border-[#1e3a8a]/20">
            <Sparkles className="w-3 h-3 mr-1"/>
            The Future of AI Creation
          </Badge>

          <h1 className="font-bold mb-6">
            <span className="block text-6xl md:text-7xl lg:text-8xl text-[#1e3a8a] dark:text-blue-400">
              DEODAI
            </span>
            <span className="block mt-4 text-xl md:text-2xl lg:text-4xl text-foreground">
              AI Evolving Everyday — Learn & Build Smarter
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Learn AI, explore powerful tools, and earn
            <span className="font-semibold text-foreground"> 90% revenue</span> as a creator.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn">
              <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4"/>
              </Button>
            </Link>
            <Link href="/submit">
              <Button size="lg" variant="outline" className="px-8 border-border">Submit Tool</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(function (f, i) { return (<Card key={i} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                    <f.icon className="h-6 w-6 text-teal-600 dark:text-teal-400"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground">{f.description}</p>
                </CardContent>
              </Card>); })}
          </div>
        </div>
      </section>

      {/* ================= REVENUE ================= */}
      <section className="bg-[#1e3a8a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"/>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="text-8xl font-bold mb-2 tracking-tighter">90%</div>
          <p className="text-xl text-white/80 mb-8 uppercase tracking-widest font-medium">You Keep</p>
          <Link href="/submit">
            <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-white/90 px-10">
              Start Earning Today <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= UPDATED EXPLORE TOOLS SECTION ================= */}
      <section className="py-28 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Explore AI Tools by Category</h2>
            <p className="text-muted-foreground text-lg mb-8">Discover and filter through verified AI tools.</p>

            {/* Live Filters Integrated into Home */}
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-10">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                <Input type="search" placeholder="Quick search tools..." className="pl-10 bg-muted/30 border-border focus-visible:ring-[#1e3a8a]" value={searchQuery} onChange={function (e) { return setSearchQuery(e.target.value); }}/>
              </div>
              <div className="flex gap-2">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[160px] bg-muted/30 border-border">
                    <Filter className="h-4 w-4 mr-2"/>
                    <SelectValue placeholder="Category"/>
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(function (cat) { return (<SelectItem key={cat.id} value={cat.id}>{cat.label}</SelectItem>); })}
                  </SelectContent>
                </Select>
                <Select value={pricingFilter} onValueChange={setPricingFilter}>
                  <SelectTrigger className="w-[140px] bg-muted/30 border-border">
                    <SelectValue placeholder="Pricing"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Pricing</SelectItem>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading
            ? Array.from({ length: 6 }).map(function (_, i) { return <ToolCardSkeleton key={i}/>; })
            : filteredTools.slice(0, 6).map(function (tool) {
                var Icon = getCategoryIcon(tool.category);
                return (<Card key={tool.id} className="bg-card border-border hover:shadow-lg transition-all group">
                      <CardContent className="p-6">
                        <div className="flex gap-4 mb-4">
                          <div className={"w-12 h-12 rounded-lg bg-gradient-to-r ".concat(getCategoryColor(tool.category), " flex items-center justify-center text-white shadow-sm")}>
                            <Icon className="h-6 w-6"/>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-lg group-hover:text-[#1e3a8a] transition-colors">{tool.name}</h3>
                              {tool.verified && <CheckCircle2 className="h-4 w-4 text-teal-500"/>}
                            </div>
                            <p className="text-sm text-muted-foreground">{tool.creatorName}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">{tool.description}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <span className="flex items-center gap-1 text-sm"><Star className="h-4 w-4 fill-yellow-500 text-yellow-500"/> 4.8</span>
                          <Badge className={tool.pricing.toLowerCase().includes("free") ? "bg-teal-500/10 text-teal-600 border-none" : "bg-muted text-muted-foreground border-none"}>
                            {tool.pricing}
                          </Badge>
                        </div>
                        <Button variant="outline" className="w-full mt-4 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white">
                          View Tool <ExternalLink className="ml-2 h-4 w-4"/>
                        </Button>
                      </CardContent>
                    </Card>);
            })}
          </div>

          {/* View More CTA */}
          {!isLoading && filteredTools.length > 0 && (<div className="mt-12 text-center">
              <Link href="/explore">
                <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white">
                  Browse All {tools.length} Tools <ArrowRight className="ml-2 h-4 w-4"/>
                </Button>
              </Link>
            </div>)}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-24 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge className="mb-4 bg-muted text-muted-foreground border-border"><Mail className="w-3 h-3 mr-1"/> Newsletter</Badge>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Join the  Insider</h2>
          <p className="text-muted-foreground text-lg mb-8">Weekly AI insights and creator opportunities.</p>
          <Link href="/newsletter">
            <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-10">
              Subscribe Now <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
          </Link>
        </div>
      </section>
    </div>);
}

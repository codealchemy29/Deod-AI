import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    GraduationCap,
    Search,
    Wrench,
    DollarSign,
    ShoppingBag,
    Newspaper,
    ArrowRight,
    Sparkles,
    TrendingUp,
    Brain,
    Code,
    Palette,
    Video,
    Music,
    Bot,
    CheckCircle2,
    Mail,
    ExternalLink,
    Filter,
    Grid3X3,
    Star,
    Users,
} from "lucide-react";
import { useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import EnrollmentForm from "@/components/EnrollmentForm";

import type { AiTool } from "@shared/schema";
import { getMe } from "@/utils/auth";

/* =======================
    DATA & HELPERS
======================= */

const features = [
    {
        icon: GraduationCap,
        title: "Learn AI",
        description:
            "Master AI skills from beginner to advanced with structured learning paths.",
    },
    {
        icon: Search,
        title: "Explore Tools",
        description:
            "Discover verified AI tools and agents across every category.",
    },
    {
        icon: Wrench,
        title: "Create Tools",
        description: "Build and launch your own AI tools without friction.",
    },
    {
        icon: DollarSign,
        title: "90% Revenue",
        description:
            "Earn 90% revenue share on every approved tool submission.",
    },
    {
        icon: ShoppingBag,
        title: "Marketplace",
        description: "Buy and sell AI tools, prompts, and agents.",
    },
    {
        icon: Newspaper,
        title: "AI News",
        description: "Stay updated with real-time AI news and insights.",
    },
];

const categories = [
    { id: "all", label: "All Tools", icon: Grid3X3 },
    { id: "text", label: "Text AI", icon: Brain },
    { id: "image", label: "Image AI", icon: Palette },
    { id: "video", label: "Video AI", icon: Video },
    { id: "audio", label: "Audio AI", icon: Music },
    { id: "code", label: "Code AI", icon: Code },
    { id: "automation", label: "Automation", icon: Bot },
];

function getCategoryIcon(category: string) {
    const cat = categories.find((c) => c.id === category);
    return cat?.icon || Brain;
}

function getCategoryColor(category: string) {
    switch (category) {
        case "text":
            return "from-[#1e3a8a] to-teal-500";
        case "image":
            return "from-teal-500 to-cyan-500";
        case "video":
            return "from-blue-600 to-sky-500";
        case "audio":
            return "from-teal-600 to-emerald-500";
        case "code":
            return "from-indigo-900 to-blue-700";
        case "automation":
            return "from-cyan-600 to-teal-600";
        default:
            return "from-muted to-muted-foreground";
    }
}

function ToolCardSkeleton() {
    return (
        <Card className="bg-card border border-border/50 overflow-hidden">
            <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                    <Skeleton className="w-12 h-12 rounded-lg bg-muted" />
                    <div className="flex-1">
                        <Skeleton className="h-5 w-24 mb-2 bg-muted" />
                        <Skeleton className="h-4 w-16 bg-muted" />
                    </div>
                </div>
                <Skeleton className="h-4 w-full mb-2 bg-muted" />
                <Skeleton className="h-6 w-16 mb-4 bg-muted" />
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <Skeleton className="h-4 w-12 bg-muted" />
                    <Skeleton className="h-6 w-16 bg-muted" />
                </div>
                <Skeleton className="h-9 w-full mt-4 bg-muted" />
            </CardContent>
        </Card>
    );
}

/* =======================
    PAGE
======================= */

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [pricingFilter, setPricingFilter] = useState("all");
    const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

    // const { data:  isLoading, error } = useQuery<AiTool[]>({
    //   queryKey: ["/api/tools"],
    // });
    const [user, setUser] = useState<any>(null);
    const [, setLocation] = useLocation();
    useEffect(() => {
    getMe().then((data) => {
        if (data) {
            setUser(data);
        }
    });
}, []);
    const tools = [
        {
            name: "Whispr FlowAI",
            description:
                "Tool for automating workflows — converts voice/text inputs into tasks, summaries, and action items for teams.",
            category: "automation",
            useCase: "Workflow Automation",
            pricing: "TBD",
            creatorName: "Whispr",
            verified: true,
        },
        {
            name: "Gemini",
            description:
                "Google’s AI for content creation, coding help, image generation, chat, and research.",
            category: "multi",
            useCase: "Content, Coding, Image Generation, Research",
            pricing: "TBD",
            creatorName: "Google",
            verified: true,
        },
        {
            name: "EmilyAI",
            description:
                "Assistant focused on email drafting, inbox management, scheduling, and communication automation.",
            category: "productivity",
            useCase: "Email Management, Scheduling",
            pricing: "TBD",
            creatorName: "EmilyAI",
            verified: true,
        },
        {
            name: "FirefliesAI",
            description:
                "Meeting assistant — records, transcribes, summarizes, and analyzes meetings automatically.",
            category: "productivity",
            useCase: "Meeting Transcription, Analysis",
            pricing: "TBD",
            creatorName: "Fireflies",
            verified: true,
        },
        {
            name: "ChatGPT",
            description:
                "General-purpose AI for chat, coding, research, content, automation, data analysis, etc.",
            category: "text",
            useCase: "Conversation, Coding, Research, Content, Automation",
            pricing: "TBD",
            creatorName: "OpenAI",
            verified: true,
        },
        {
            name: "Claude",
            description:
                "Anthropic’s AI known for long-context tasks, analysis, writing, and safe enterprise workflows.",
            category: "text",
            useCase: "Analysis, Writing, Enterprise Workflows",
            pricing: "TBD",
            creatorName: "Anthropic",
            verified: true,
        },
        {
            name: "Phot AI",
            description:
                "AI design tool for photo editing, background removal, retouching, and AI-generated images.",
            category: "image",
            useCase: "Photo Editing, Image Generation",
            pricing: "TBD",
            creatorName: "Phot AI",
            verified: true,
        },
        {
            name: "SupergrowAI",
            description:
                "Tool for creating social media content, captions, and growth-focused marketing posts.",
            category: "marketing",
            useCase: "Social Media Content, Marketing",
            pricing: "TBD",
            creatorName: "Supergrow",
            verified: true,
        },
        {
            name: "Numerous AI",
            description:
                "Spreadsheet AI — automates Excel/Sheets tasks, formulas, cleaning, insights, and AI functions.",
            category: "productivity",
            useCase: "Spreadsheet Automation, Data Analysis",
            pricing: "TBD",
            creatorName: "Numerous",
            verified: true,
        },
        {
            name: "SunoAI",
            description:
                "Music generator — creates songs, vocals, background tracks instantly from text prompts.",
            category: "audio",
            useCase: "Music Generation",
            pricing: "TBD",
            creatorName: "Suno",
            verified: true,
        },
        {
            name: "Notebook LM",
            description:
                "Google AI for research and study, summarizes documents, PDFs, notes, and creates study guides.",
            category: "education",
            useCase: "Document Summarization, Study Guides",
            pricing: "TBD",
            creatorName: "Google",
            verified: true,
        },
        {
            name: "Social SonicAI",
            description:
                "AI for social media automation, scheduling, content creation, and engagement optimization.",
            category: "marketing",
            useCase: "Social Media Automation, Content Creation",
            pricing: "TBD",
            creatorName: "Social Sonic",
            verified: true,
        },
        {
            name: "BoltAI",
            description:
                "Website builder — creates full websites, HTML/CSS/JS code from simple prompts.",
            category: "web",
            useCase: "Website Generation, Code Generation",
            pricing: "TBD",
            creatorName: "Bolt",
            verified: true,
        },
        {
            name: "VapiAI",
            description:
                "Voice agent platform for creating AI calling bots, customer support, and sales automation with voice.",
            category: "voice",
            useCase: "AI Calling Bots, Customer Support",
            pricing: "TBD",
            creatorName: "Vapi",
            verified: true,
        },
        {
            name: "ChronicleAI",
            description:
                "Storytelling and documentation tool — helps create timelines, narratives, and structured stories.",
            category: "productivity",
            useCase: "Storytelling, Documentation",
            pricing: "TBD",
            creatorName: "Chronicle",
            verified: true,
        },
        {
            name: "Humanic AI",
            description:
                "HR automation tool using AI for candidate screening, onboarding flows, and employee insights.",
            category: "hr",
            useCase: "HR Automation, Employee Insights",
            pricing: "TBD",
            creatorName: "Humanic",
            verified: true,
        },
        {
            name: "HappenstanceAI",
            description:
                "For career discovery — analyzes personality, skills, and recommends career paths.",
            category: "career",
            useCase: "Career Guidance, Skill Analysis",
            pricing: "TBD",
            creatorName: "Happenstance",
            verified: true,
        },
        {
            name: "Perplexity Comet",
            description:
                "AI designed for deep research — provides verified answers with citations and advanced retrieval.",
            category: "research",
            useCase: "Research, Verification, Retrieval",
            pricing: "TBD",
            creatorName: "Perplexity",
            verified: true,
        },
    ];
    const filteredTools = tools.filter((tool) => {
        const matchesSearch =
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
            selectedCategory === "all" || tool.category === selectedCategory;
        const matchesPricing =
            pricingFilter === "all" ||
            (pricingFilter === "free" &&
                tool.pricing.toLowerCase().includes("free")) ||
            (pricingFilter === "paid" &&
                !tool.pricing.toLowerCase().includes("free"));
        return matchesSearch && matchesCategory && matchesPricing;
    });

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-background to-teal-500/10 dark:from-blue-900/20 dark:via-background dark:to-teal-500/20" />
                <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
                    <Badge className="mb-6 bg-[#1e3a8a]/10 text-[#1e3a8a] dark:text-blue-300 border-[#1e3a8a]/20">
                        <Sparkles className="w-3 h-3 mr-1" />
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
                        <span className="font-semibold text-foreground">
                            {" "}
                            90% revenue
                        </span>{" "}
                        as a creator.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/learn">
                            <Button
                                size="lg"
                                className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-8"
                            >
                                Get Started Free{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/submit">
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-8 border-border"
                            >
                                Submit Tool
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <Card
                                key={i}
                                className="bg-card border-border hover:shadow-lg transition-all duration-300"
                            >
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                                        <f.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {f.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {f.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= REVENUE ================= */}
            <section className="bg-[#1e3a8a] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-none">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Limited Time Offer
                    </Badge>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Introduction to AI
                    </h2>

                    <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
                        Master the basics of Artificial Intelligence in our
                        comprehensive workshop. Perfect for beginners.
                    </p>

                    <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
                        <span className="font-semibold">18 Feb 2025</span> 
                        <br />
                        <span className="font-semibold">1:00 PM - 2:00 PM</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <div className="text-center">
                            <div className="text-sm uppercase tracking-widest text-blue-200 font-semibold mb-1">
                                Workshop Price
                            </div>
                            <div className="text-5xl font-bold">$10</div>
                        </div>

                        <div className="hidden sm:block w-px h-16 bg-white/20 mx-4"></div>

                        <Button
                            size="lg"
                            onClick={() => setIsEnrollmentOpen(true)}
                            className="h-14 px-8 rounded-full text-lg bg-white text-[#1e3a8a] hover:bg-blue-50 font-semibold shadow-xl shadow-blue-900/20 transition-transform hover:scale-105"
                        >
                            Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    <p className="mt-6 text-sm text-blue-200">
                        * Includes certificate of completion
                    </p>
                </div>
            </section>

            {/* ================= UPDATED EXPLORE TOOLS SECTION ================= */}
            <section className="py-28 bg-background border-t border-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 tracking-tight">
                            Explore AI Tools by Category
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Discover and filter through verified AI tools.
                        </p>

                        {/* Live Filters Integrated into Home */}
                        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-10">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Quick search tools..."
                                    className="pl-10 bg-muted/30 border-border focus-visible:ring-[#1e3a8a]"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex gap-2">
                                <Select
                                    value={selectedCategory}
                                    onValueChange={setSelectedCategory}
                                >
                                    <SelectTrigger className="w-[160px] bg-muted/30 border-border">
                                        <Filter className="h-4 w-4 mr-2" />
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((cat) => (
                                            <SelectItem
                                                key={cat.id}
                                                value={cat.id}
                                            >
                                                {cat.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select
                                    value={pricingFilter}
                                    onValueChange={setPricingFilter}
                                >
                                    <SelectTrigger className="w-[140px] bg-muted/30 border-border">
                                        <SelectValue placeholder="Pricing" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            All Pricing
                                        </SelectItem>
                                        <SelectItem value="free">
                                            Free
                                        </SelectItem>
                                        <SelectItem value="paid">
                                            Paid
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {false
                            ? Array.from({ length: 6 }).map((_, i) => (
                                  <ToolCardSkeleton key={i} />
                              ))
                            : filteredTools.slice(0, 6).map((tool, index) => {
                                  const Icon = getCategoryIcon(tool.category);
                                  return (
                                      <Card
                                          key={index}
                                          className="bg-card border-border hover:shadow-lg transition-all group"
                                      >
                                          <CardContent className="p-6">
                                              <div className="flex gap-4 mb-4">
                                                  <div
                                                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(tool.category)} flex items-center justify-center text-white shadow-sm`}
                                                  >
                                                      <Icon className="h-6 w-6" />
                                                  </div>
                                                  <div className="flex-1">
                                                      <div className="flex items-center gap-2">
                                                          <h3 className="font-semibold text-lg group-hover:text-[#1e3a8a] transition-colors">
                                                              {tool.name}
                                                          </h3>
                                                          {tool.verified && (
                                                              <CheckCircle2 className="h-4 w-4 text-teal-500" />
                                                          )}
                                                      </div>
                                                      <p className="text-sm text-muted-foreground">
                                                          {tool.creatorName}
                                                      </p>
                                                  </div>
                                              </div>
                                              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
                                                  {tool.description}
                                              </p>
                                              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                                  <span className="flex items-center gap-1 text-sm">
                                                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />{" "}
                                                      4.8
                                                  </span>
                                                  <Badge
                                                      className={
                                                          tool.pricing
                                                              .toLowerCase()
                                                              .includes("free")
                                                              ? "bg-teal-500/10 text-teal-600 border-none"
                                                              : "bg-muted text-muted-foreground border-none"
                                                      }
                                                  >
                                                      {tool.pricing}
                                                  </Badge>
                                              </div>
                                              <Button
                                                  variant="outline"
                                                  className="w-full mt-4 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
                                              >
                                                  View Tool{" "}
                                                  <ExternalLink className="ml-2 h-4 w-4" />
                                              </Button>
                                          </CardContent>
                                      </Card>
                                  );
                              })}
                    </div>

                    {/* View More CTA */}
                    {false && filteredTools.length > 0 && (
                        <div className="mt-12 text-center">
                            <Link href="/explore">
                                <Button
                                    size="lg"
                                    className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white"
                                >
                                    Browse All {tools.length} Tools{" "}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* ================= NEWSLETTER ================= */}
            <section className="py-24 bg-card border-t border-border">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Badge className="mb-4 bg-muted text-muted-foreground border-border">
                        <Mail className="w-3 h-3 mr-1" /> Newsletter
                    </Badge>
                    <h2 className="text-4xl font-bold mb-4 tracking-tight">
                        Join the Insider
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Weekly AI insights and creator opportunities.
                    </p>
                    <Link href="/newsletter">
                        <Button
                            size="lg"
                            className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white px-10"
                        >
                            Subscribe Now{" "}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* ================= ENROLLMENT DIALOG ================= */}
            <Dialog open={isEnrollmentOpen} onOpenChange={setIsEnrollmentOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <EnrollmentForm isEnrolled={user?.isEnrolledIntro} />
                </DialogContent>
            </Dialog>
        </div>
    );
}

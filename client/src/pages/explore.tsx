import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
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
  Search,
  Brain,
  Palette,
  Video,
  Music,
  Code,
  Bot,
  ExternalLink,
  CheckCircle2,
  Filter,
  Grid3X3,
  Star,
} from "lucide-react";
import type { AiTool } from "@shared/schema";

/* =======================
    DATA
======================= */

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

/* =======================
    SKELETON
======================= */

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
        <Skeleton className="h-4 w-3/4 mb-4 bg-muted" />
        <Skeleton className="h-6 w-20 mb-4 bg-muted" />
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

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [pricingFilter, setPricingFilter] = useState("all");

  // const { data: tools = [], isLoading, error } = useQuery<AiTool[]>({
  //   queryKey: ["/api/tools"],
  // });
 const tools = [
  { name: "Whispr FlowAI", description: "Tool for automating workflows — converts voice/text inputs into tasks, summaries, and action items for teams.", category: "automation", useCase: "Workflow Automation", pricing: "TBD", creatorName: "Whispr", verified: true },
  { name: "Gemini", description: "Google’s AI for content creation, coding help, image generation, chat, and research.", category: "multi", useCase: "Content, Coding, Image Generation, Research", pricing: "TBD", creatorName: "Google", verified: true },
  { name: "EmilyAI", description: "Assistant focused on email drafting, inbox management, scheduling, and communication automation.", category: "productivity", useCase: "Email Management, Scheduling", pricing: "TBD", creatorName: "EmilyAI", verified: true },
  { name: "FirefliesAI", description: "Meeting assistant — records, transcribes, summarizes, and analyzes meetings automatically.", category: "productivity", useCase: "Meeting Transcription, Analysis", pricing: "TBD", creatorName: "Fireflies", verified: true },
  { name: "ChatGPT", description: "General-purpose AI for chat, coding, research, content, automation, data analysis, etc.", category: "text", useCase: "Conversation, Coding, Research, Content, Automation", pricing: "TBD", creatorName: "OpenAI", verified: true },
  { name: "Claude", description: "Anthropic’s AI known for long-context tasks, analysis, writing, and safe enterprise workflows.", category: "text", useCase: "Analysis, Writing, Enterprise Workflows", pricing: "TBD", creatorName: "Anthropic", verified: true },
  { name: "Phot AI", description: "AI design tool for photo editing, background removal, retouching, and AI-generated images.", category: "image", useCase: "Photo Editing, Image Generation", pricing: "TBD", creatorName: "Phot AI", verified: true },
  { name: "SupergrowAI", description: "Tool for creating social media content, captions, and growth-focused marketing posts.", category: "marketing", useCase: "Social Media Content, Marketing", pricing: "TBD", creatorName: "Supergrow", verified: true },
  { name: "Numerous AI", description: "Spreadsheet AI — automates Excel/Sheets tasks, formulas, cleaning, insights, and AI functions.", category: "productivity", useCase: "Spreadsheet Automation, Data Analysis", pricing: "TBD", creatorName: "Numerous", verified: true },
  { name: "SunoAI", description: "Music generator — creates songs, vocals, background tracks instantly from text prompts.", category: "audio", useCase: "Music Generation", pricing: "TBD", creatorName: "Suno", verified: true },
  { name: "Notebook LM", description: "Google AI for research and study, summarizes documents, PDFs, notes, and creates study guides.", category: "education", useCase: "Document Summarization, Study Guides", pricing: "TBD", creatorName: "Google", verified: true },
  { name: "Social SonicAI", description: "AI for social media automation, scheduling, content creation, and engagement optimization.", category: "marketing", useCase: "Social Media Automation, Content Creation", pricing: "TBD", creatorName: "Social Sonic", verified: true },
  { name: "BoltAI", description: "Website builder — creates full websites, HTML/CSS/JS code from simple prompts.", category: "web", useCase: "Website Generation, Code Generation", pricing: "TBD", creatorName: "Bolt", verified: true },
  { name: "VapiAI", description: "Voice agent platform for creating AI calling bots, customer support, and sales automation with voice.", category: "voice", useCase: "AI Calling Bots, Customer Support", pricing: "TBD", creatorName: "Vapi", verified: true },
  { name: "ChronicleAI", description: "Storytelling and documentation tool — helps create timelines, narratives, and structured stories.", category: "productivity", useCase: "Storytelling, Documentation", pricing: "TBD", creatorName: "Chronicle", verified: true },
  { name: "Humanic AI", description: "HR automation tool using AI for candidate screening, onboarding flows, and employee insights.", category: "hr", useCase: "HR Automation, Employee Insights", pricing: "TBD", creatorName: "Humanic", verified: true },
  { name: "HappenstanceAI", description: "For career discovery — analyzes personality, skills, and recommends career paths.", category: "career", useCase: "Career Guidance, Skill Analysis", pricing: "TBD", creatorName: "Happenstance", verified: true },
  { name: "Perplexity Comet", description: "AI designed for deep research — provides verified answers with citations and advanced retrieval.", category: "research", useCase: "Research, Verification, Retrieval", pricing: "TBD", creatorName: "Perplexity", verified: true },
];
  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || tool.category === selectedCategory;
    const matchesPricing =
      pricingFilter === "all" ||
      (pricingFilter === "free" && tool.pricing.toLowerCase().includes("free")) ||
      (pricingFilter === "paid" && !tool.pricing.toLowerCase().includes("free"));
    return matchesSearch && matchesCategory && matchesPricing;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-border">
        {/* Adaptive Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/5 via-background to-teal-500/5 dark:from-[#1e3a8a]/10 dark:via-background dark:to-teal-500/10" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#1e3a8a]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a] dark:text-blue-300 border-[#1e3a8a]/20">
              <Search className="w-3 h-3 mr-1" />
              AI Tools Directory
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Explore the Best{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] via-blue-700 to-teal-500 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                AI Tools & Agents
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              Discover, compare, and integrate the most powerful AI tools across every category.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search AI tools..."
                className="pl-10 bg-muted/50 focus-visible:ring-[#1e3a8a]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[160px] bg-muted/50 border-border">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={pricingFilter} onValueChange={setPricingFilter}>
                <SelectTrigger className="w-[140px] bg-muted/50 border-border">
                  <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="all">All Pricing</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                size="sm"
                variant={selectedCategory === cat.id ? "default" : "outline"}
                className={
                  selectedCategory === cat.id
                    ? "bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white"
                    : "border-border hover:bg-[#1e3a8a]/5 hover:text-[#1e3a8a]"
                }
                onClick={() => setSelectedCategory(cat.id)}
              >
                <cat.icon className="h-4 w-4 mr-1" />
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground mb-6">
            {false ? "Loading..." : `Showing ${filteredTools.length} tools`}
          </p>

          {/* {error && (
            <div className="text-center py-12 text-destructive">
              Failed to load tools. Please try again.
            </div>
          )} */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {false
              ? Array.from({ length: 6 }).map((_, i) => <ToolCardSkeleton key={i} />)
              : filteredTools.map((tool,index) => {
                  const Icon = getCategoryIcon(tool.category);
                  return (
                    <Card key={index} className="bg-card border-border hover:shadow-md dark:hover:shadow-[#1e3a8a]/10 transition group">
                      <CardContent className="p-6">
                        <div className="flex gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(
                              tool.category
                            )} flex items-center justify-center shadow-sm`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-lg group-hover:text-[#1e3a8a] transition-colors">{tool.name}</h3>
                              {tool.verified && (
                                <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
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

                        <Badge variant="secondary" className="mb-4 text-xs bg-muted text-muted-foreground">
                          {tool.useCase}
                        </Badge>

                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <span className="flex items-center gap-1 text-sm">
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            4.8
                          </span>

                          <Badge
                            className={
                              tool.pricing.toLowerCase().includes("free")
                                ? "bg-teal-600/10 text-teal-600 dark:text-teal-400 border-teal-600/20"
                                : "bg-muted text-muted-foreground"
                            }
                          >
                            {tool.pricing}
                          </Badge>
                        </div>

                        <Button
                          variant="outline"
                          className="w-full mt-4 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all active:scale-[0.98]"
                        >
                          Coming Soon
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
          </div>

          {false && filteredTools.length === 0 && (
            <div className="text-center py-20 bg-card rounded-2xl border border-dashed border-border mt-10">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold">No tools matched your search</h3>
              <p className="text-muted-foreground mt-2">
                Try adjusting your filters or browsing all categories.
              </p>
              <Button 
                variant="outline" 
                className="mt-4 text-[#1e3a8a]"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setPricingFilter("all");
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
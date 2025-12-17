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
      return "from-blue-500 to-cyan-500";
    case "image":
      return "from-purple-500 to-pink-500";
    case "video":
      return "from-orange-500 to-amber-500";
    case "audio":
      return "from-green-500 to-emerald-500";
    case "code":
      return "from-indigo-500 to-violet-500";
    case "automation":
      return "from-pink-500 to-rose-500";
    default:
      return "from-gray-500 to-gray-600";
  }
}

function ToolCardSkeleton() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Skeleton className="w-12 h-12 rounded-lg" />
          <div className="flex-1">
            <Skeleton className="h-5 w-24 mb-2" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-4" />
        <Skeleton className="h-6 w-20 mb-4" />
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="h-9 w-full mt-4" />
      </CardContent>
    </Card>
  );
}

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [pricingFilter, setPricingFilter] = useState("all");

  const { data: tools = [], isLoading, error } = useQuery<AiTool[]>({
    queryKey: ["/api/tools"],
  });

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4" data-testid="badge-explore-hero">
              <Search className="w-3 h-3 mr-1" />
              AI Tools Directory
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-explore-title">
              Explore the Best{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                AI Tools & Agents
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="text-explore-subtitle">
              Discover, compare, and integrate the most powerful AI tools across every category.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search AI tools..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search-tools"
              />
            </div>
            
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[160px]" data-testid="select-category">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={pricingFilter} onValueChange={setPricingFilter}>
                <SelectTrigger className="w-[140px]" data-testid="select-pricing">
                  <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Pricing</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Category Pills */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
                className="flex-shrink-0"
                data-testid={`button-category-${cat.id}`}
              >
                <cat.icon className="h-4 w-4 mr-1" />
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <p className="text-muted-foreground" data-testid="text-results-count">
              {isLoading ? "Loading..." : `Showing ${filteredTools.length} tools`}
            </p>
          </div>
          
          {error && (
            <div className="text-center py-12" data-testid="error-state-tools">
              <p className="text-destructive">Failed to load tools. Please try again.</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <ToolCardSkeleton key={index} />
              ))
            ) : (
              filteredTools.map((tool, index) => {
                const CategoryIcon = getCategoryIcon(tool.category);
                return (
                  <Card
                    key={tool.id}
                    className="group hover-elevate border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
                    data-testid={`card-tool-${index}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(
                            tool.category
                          )} flex items-center justify-center flex-shrink-0`}
                        >
                          <CategoryIcon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg truncate">{tool.name}</h3>
                            {tool.verified && (
                              <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm">{tool.creatorName}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {tool.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="text-xs">
                          {tool.useCase}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1 text-sm">
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            4.8
                          </span>
                        </div>
                        <Badge
                          variant={tool.pricing.toLowerCase().includes("free") ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {tool.pricing}
                        </Badge>
                      </div>
                      
                      <Button className="w-full mt-4" variant="outline" data-testid={`button-view-tool-${index}`}>
                        View Tool
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
          
          {!isLoading && filteredTools.length === 0 && (
            <div className="text-center py-12" data-testid="empty-state-tools">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No tools found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

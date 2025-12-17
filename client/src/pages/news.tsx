import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Newspaper,
  Search,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Rocket,
  BookOpen,
} from "lucide-react";
import type { NewsArticle } from "@shared/schema";

const categories = [
  { id: "all", label: "All" },
  { id: "Research", label: "Research" },
  { id: "Startups", label: "Startups" },
  { id: "Tool Launches", label: "Tool Launches" },
  { id: "Industry", label: "Industry" },
  { id: "Tutorials", label: "Tutorials" },
];

function getCategoryColor(category: string) {
  switch (category) {
    case "Research":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
    case "Startups":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400";
    case "Tool Launches":
      return "bg-green-500/10 text-green-600 dark:text-green-400";
    case "Industry":
      return "bg-orange-500/10 text-orange-600 dark:text-orange-400";
    case "Tutorials":
      return "bg-pink-500/10 text-pink-600 dark:text-pink-400";
    default:
      return "bg-gray-500/10 text-gray-600 dark:text-gray-400";
  }
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "Research":
      return Lightbulb;
    case "Startups":
      return Rocket;
    case "Industry":
      return TrendingUp;
    case "Tutorials":
      return BookOpen;
    default:
      return Newspaper;
  }
}

function ArticleCardSkeleton() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <CardContent className="p-4">
        <Skeleton className="h-5 w-20 mb-3" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-4" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function News() {
  const { data: articles = [], isLoading, error } = useQuery<NewsArticle[]>({
    queryKey: ["/api/news"],
  });

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-violet-900/10 to-purple-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4" data-testid="badge-news-hero">
              <Newspaper className="w-3 h-3 mr-1" />
              AI News
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-news-title">
              Latest AI News,{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-500 bg-clip-text text-transparent">
                Trends & Breakthroughs
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="text-news-subtitle">
              Stay informed with the latest developments in artificial intelligence, 
              machine learning, and the AI industry.
            </p>
            
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search news..."
                className="pl-10"
                data-testid="input-search-news"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={cat.id === "all" ? "default" : "outline"}
                size="sm"
                className="flex-shrink-0"
                data-testid={`button-category-${cat.id}`}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {isLoading ? (
            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <Skeleton className="aspect-video md:aspect-auto md:h-full" />
                <CardContent className="p-6 flex flex-col justify-center">
                  <Skeleton className="h-6 w-24 mb-4" />
                  <Skeleton className="h-10 w-full mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-6" />
                  <Skeleton className="h-4 w-48 mb-6" />
                  <Skeleton className="h-10 w-32" />
                </CardContent>
              </div>
            </Card>
          ) : featuredArticle ? (
            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm" data-testid="card-featured-article">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-purple-500/20 flex items-center justify-center">
                  <Newspaper className="h-24 w-24 text-indigo-500/30" />
                </div>
                <CardContent className="p-6 flex flex-col justify-center">
                  <Badge className={`w-fit mb-4 ${getCategoryColor(featuredArticle.category)}`}>
                    {featuredArticle.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredArticle.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      5 min read
                    </span>
                    <span>{featuredArticle.publishedAt}</span>
                  </div>
                  <Button className="w-fit" data-testid="button-read-featured">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ) : null}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold" data-testid="text-latest-title">
              Latest Articles
            </h2>
            <Button variant="outline" data-testid="button-view-all-news">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {error && (
            <div className="text-center py-12" data-testid="error-state-news">
              <p className="text-destructive">Failed to load news. Please try again.</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <ArticleCardSkeleton key={index} />
              ))
            ) : (
              otherArticles.map((article, index) => {
                const CategoryIcon = getCategoryIcon(article.category);
                return (
                  <Card key={article.id} className="group hover-elevate border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden" data-testid={`card-article-${index}`}>
                    <div className="aspect-video bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-purple-500/10 flex items-center justify-center">
                      <CategoryIcon className="h-12 w-12 text-indigo-500/30" />
                    </div>
                    <CardContent className="p-4">
                      <Badge className={`mb-3 ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          5 min read
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
          
          {!isLoading && articles.length === 0 && (
            <div className="text-center py-12" data-testid="empty-state-news">
              <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Check back soon for the latest AI news.
              </p>
            </div>
          )}
          
          {!isLoading && articles.length > 0 && (
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" data-testid="button-load-more">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

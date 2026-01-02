import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { ShoppingBag, Search, Star, ShoppingCart, Filter, Grid3X3, Brain, Palette, Code, Bot, FileText, Sparkles, User, } from "lucide-react";
var categories = [
    { id: "all", label: "All Products", icon: Grid3X3 },
    { id: "tools", label: "AI Tools", icon: Brain },
    { id: "prompts", label: "Prompts", icon: FileText },
    { id: "agents", label: "AI Agents", icon: Bot },
    { id: "templates", label: "Templates", icon: Palette },
    { id: "code", label: "Code & APIs", icon: Code },
];
function getCategoryIcon(category) {
    var cat = categories.find(function (c) { return c.id === category; });
    return (cat === null || cat === void 0 ? void 0 : cat.icon) || Grid3X3;
}
function getCategoryColor(category) {
    // Using the primary brand color #1e3a8a with varying shades for depth
    switch (category) {
        case "tools":
            return "from-[#1e3a8a] to-blue-600";
        case "prompts":
            return "from-blue-800 to-indigo-700";
        case "agents":
            return "from-teal-700 to-cyan-600";
        case "templates":
            return "from-[#1e3a8a]/80 to-blue-500/80";
        case "code":
            return "from-slate-800 to-[#1e3a8a]";
        default:
            return "from-slate-500 to-slate-600";
    }
}
function renderStars(rating) {
    var normalizedRating = rating / 10;
    return (<div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(function (star) { return (<Star key={star} className={"h-3.5 w-3.5 ".concat(star <= Math.round(normalizedRating)
                ? "fill-yellow-500 text-yellow-500"
                : "text-muted-foreground")}/>); })}
    </div>);
}
function ProductCardSkeleton() {
    return (<Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
      <Skeleton className="h-32 w-full"/>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <Skeleton className="h-5 w-20"/>
          <Skeleton className="h-4 w-16"/>
        </div>
        <Skeleton className="h-6 w-full mb-2"/>
        <Skeleton className="h-4 w-full mb-2"/>
        <Skeleton className="h-4 w-3/4 mb-4"/>
        <Skeleton className="h-4 w-32 mb-4"/>
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/50">
          <Skeleton className="h-8 w-16"/>
          <Skeleton className="h-9 w-24"/>
        </div>
      </CardContent>
    </Card>);
}
export default function Marketplace() {
    var _a = useState(""), searchQuery = _a[0], setSearchQuery = _a[1];
    var _b = useState("all"), selectedCategory = _b[0], setSelectedCategory = _b[1];
    var _c = useState("popular"), sortBy = _c[0], setSortBy = _c[1];
    var _d = useQuery({
        queryKey: ["/api/marketplace"],
    }), _e = _d.data, products = _e === void 0 ? [] : _e, isLoading = _d.isLoading, error = _d.error;
    var filteredProducts = products
        .filter(function (product) {
        var matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        var matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    })
        .sort(function (a, b) {
        if (sortBy === "popular")
            return (b.reviewCount || 0) - (a.reviewCount || 0);
        if (sortBy === "rating")
            return (b.rating || 0) - (a.rating || 0);
        if (sortBy === "price-low")
            return a.price - b.price;
        if (sortBy === "price-high")
            return b.price - a.price;
        return 0;
    });
    return (<div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/20 via-blue-900/10 to-indigo-900/20"/>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#1e3a8a]/20 rounded-full blur-3xl"/>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"/>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a] hover:bg-[#1e3a8a]/20" data-testid="badge-marketplace-hero">
              <ShoppingBag className="w-3 h-3 mr-1"/>
              Marketplace
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-marketplace-title">
              AI Marketplace for{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Tools, Agents & Prompts
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="text-marketplace-subtitle">
              Discover premium AI products from top creators. Buy once, use forever.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
              <Input type="search" placeholder="Search products..." className="pl-10 focus-visible:ring-[#1e3a8a]" value={searchQuery} onChange={function (e) { return setSearchQuery(e.target.value); }} data-testid="input-search-products"/>
            </div>
            
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[160px] focus:ring-[#1e3a8a]" data-testid="select-marketplace-category">
                  <Filter className="h-4 w-4 mr-2"/>
                  <SelectValue placeholder="Category"/>
                </SelectTrigger>
                <SelectContent>
                  {categories.map(function (cat) { return (<SelectItem key={cat.id} value={cat.id}>
                      {cat.label}
                    </SelectItem>); })}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[140px] focus:ring-[#1e3a8a]" data-testid="select-sort">
                  <SelectValue placeholder="Sort by"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Category Pills */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(function (cat) { return (<Button key={cat.id} variant={selectedCategory === cat.id ? "default" : "outline"} size="sm" onClick={function () { return setSelectedCategory(cat.id); }} className={"flex-shrink-0 ".concat(selectedCategory === cat.id ? "bg-[#1e3a8a] hover:bg-[#1e3a8a]/90" : "hover:border-[#1e3a8a] hover:text-[#1e3a8a]")} data-testid={"button-marketplace-category-".concat(cat.id)}>
                <cat.icon className="h-4 w-4 mr-1"/>
                {cat.label}
              </Button>); })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <p className="text-muted-foreground" data-testid="text-products-count">
              {isLoading ? "Loading..." : "Showing ".concat(filteredProducts.length, " products")}
            </p>
          </div>
          
          {error && (<div className="text-center py-12" data-testid="error-state-products">
              <p className="text-destructive">Failed to load products. Please try again.</p>
            </div>)}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (Array.from({ length: 6 }).map(function (_, index) { return (<ProductCardSkeleton key={index}/>); })) : (filteredProducts.map(function (product, index) {
            var _a;
            var CategoryIcon = getCategoryIcon(product.category);
            return (<Card key={product.id} className="group hover-elevate border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-[#1e3a8a]/50" data-testid={"card-product-".concat(index)}>
                    <div className={"h-32 bg-gradient-to-br ".concat(getCategoryColor(product.category), " opacity-10 relative group-hover:opacity-20 transition-opacity")}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CategoryIcon className="h-12 w-12 text-[#1e3a8a]/40"/>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs bg-[#1e3a8a]/10 text-[#1e3a8a]">
                          {(_a = categories.find(function (c) { return c.id === product.category; })) === null || _a === void 0 ? void 0 : _a.label}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {renderStars(product.rating || 0)}
                          <span className="text-xs text-muted-foreground">
                            ({product.reviewCount})
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-[#1e3a8a] transition-colors">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <User className="h-3.5 w-3.5 text-[#1e3a8a]"/>
                        <span>{product.creatorName}</span>
                      </div>
                      
                      <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/50">
                        <div className="text-2xl font-bold text-[#1e3a8a]">${product.price}</div>
                        <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white border-0" data-testid={"button-buy-".concat(index)}>
                          <ShoppingCart className="h-4 w-4 mr-2"/>
                          Buy Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>);
        }))}
          </div>
          
          {!isLoading && filteredProducts.length === 0 && (<div className="text-center py-12" data-testid="empty-state-products">
              <ShoppingBag className="h-12 w-12 text-[#1e3a8a]/40 mx-auto mb-4"/>
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>)}
        </div>
      </section>

      {/* Become a Seller CTA */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a]" data-testid="badge-seller-cta">
            <Sparkles className="w-3 h-3 mr-1"/>
            Become a Seller
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-seller-cta">
            Sell Your AI Products & Earn 90%
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join the marketplace and start selling your AI tools, prompts, agents, 
            and templates. Keep 90% of every sale.
          </p>
          <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white border-0" data-testid="button-become-seller">
            Start Selling Today
          </Button>
        </div>
      </section>
    </div>);
}

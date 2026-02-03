import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Home from "@/pages/home";
import Learn from "@/pages/learn";
import Explore from "@/pages/explore";
import Create from "@/pages/create";
import Submit from "@/pages/submit";
import News from "@/pages/news";
import Newsletter from "@/pages/newsletter";
import Marketplace from "@/pages/marketplace";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";
import Register from "./pages/register";
import Login from "./pages/login";
import Profile from "./pages/profile";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/learn" component={Learn} />
      <Route path="/explore" component={Explore} />
      <Route path="/create" component={Create} />
      <Route path="/submit" component={Submit} />
      <Route path="/news" component={News} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

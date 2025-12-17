import { Link } from "wouter";
import { Brain, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="footer-link-home">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg p-1.5">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                DEOD AI
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The AI ecosystem where builders learn, create, and earn. Empowering the next generation of AI creators.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Button variant="ghost" size="icon" data-testid="footer-link-twitter" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="footer-link-github" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="footer-link-linkedin" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="footer-link-email" aria-label="Email">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-testid="footer-link-learn">
                  Learn AI
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-testid="footer-link-explore">
                  Explore Tools
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-testid="footer-link-create">
                  Create Tools
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-testid="footer-link-submit">
                  Submit Tools
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-testid="footer-link-marketplace">
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-testid="footer-link-news">
                  AI News
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-testid="footer-link-newsletter">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-3">
              Get weekly AI insights and creator opportunities.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                data-testid="input-footer-email"
              />
              <Button type="submit" data-testid="button-footer-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            2024 DEOD AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm hover:text-foreground cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-muted-foreground text-sm hover:text-foreground cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "wouter";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export function Footer() {
    return (<footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="footer-link-home">
  {/* Light Theme Footer Logo (Hidden in Dark Mode) */}
  <img src="/image-removebg-preview.png" alt="Logo" className="h-20 w-[130px] md:h-18 md:w-[180px] object-contain dark:hidden"/>

  {/* Dark Theme Footer Logo (Hidden by default, shown in Dark Mode) */}
  <img src="/logo_black.png" // Replace with your dark theme footer logo path
     alt="Logo" className="hidden h-20 w-[130px] md:h-18 md:w-[180px] object-contain dark:block"/>
    </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The AI ecosystem where builders learn, create, and earn. Empowering the next generation of AI creators.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Button variant="ghost" size="icon" data-testid="footer-link-twitter" aria-label="Twitter" className="hover:text-[#1e3a8a] hover:bg-[#1e3a8a]/5">
                <Twitter className="h-4 w-4"/>
              </Button>
              <Button variant="ghost" size="icon" data-testid="footer-link-github" aria-label="GitHub" className="hover:text-[#1e3a8a] hover:bg-[#1e3a8a]/5">
                <Github className="h-4 w-4"/>
              </Button>
              <Button variant="ghost" size="icon" data-testid="footer-link-linkedin" aria-label="LinkedIn" className="hover:text-[#1e3a8a] hover:bg-[#1e3a8a]/5">
                <Linkedin className="h-4 w-4"/>
              </Button>
              <Button variant="ghost" size="icon" data-testid="footer-link-email" aria-label="Email" className="hover:text-[#1e3a8a] hover:bg-[#1e3a8a]/5">
                <Mail className="h-4 w-4"/>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#1e3a8a]">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="text-muted-foreground hover:text-[#1e3a8a] text-sm transition-colors" data-testid="footer-link-learn">
                  Learn AI
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-muted-foreground hover:text-[#1e3a8a] text-sm transition-colors" data-testid="footer-link-explore">
                  Explore Tools
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-muted-foreground hover:text-[#1e3a8a] text-sm transition-colors" data-testid="footer-link-create">
                  Create Tools
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-muted-foreground hover:text-[#1e3a8a] text-sm transition-colors" data-testid="footer-link-submit">
                  Submit Tools
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-muted-foreground hover:text-[#1e3a8a] text-sm transition-colors" data-testid="footer-link-marketplace">
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#1e3a8a]">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-[#1e3a8a] text-sm transition-colors" data-testid="footer-link-news">
                  AI News
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-muted-foreground hover:text-[#1e3a8a] text-sm transition-colors" data-testid="footer-link-newsletter">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#1e3a8a] text-sm transition-colors" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#1e3a8a]">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-3">
              Get weekly AI insights and creator opportunities.
            </p>
            <form className="flex gap-2" onSubmit={function (e) { return e.preventDefault(); }}>
              <Input type="email" placeholder="Enter your email" className="flex-1 focus-visible:ring-[#1e3a8a]" data-testid="input-footer-email"/>
              <Button type="submit" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white" data-testid="button-footer-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            2026 DEODAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm hover:text-[#1e3a8a] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-muted-foreground text-sm hover:text-[#1e3a8a] cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>);
}

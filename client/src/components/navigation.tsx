import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Brain,
  GraduationCap,
  Search,
  Wrench,
  Upload,
  Newspaper,
  Mail,
  ShoppingBag,
  Info
} from "lucide-react";

const navItems = [
  { href: "/learn", label: "Learn AI", icon: GraduationCap },
  { href: "/explore", label: "Explore Tools", icon: Search },
  { href: "/create", label: "Create Tools", icon: Wrench },
  { href: "/submit", label: "Submit Tools", icon: Upload },
  { href: "/news", label: "News", icon: Newspaper },
  { href: "/newsletter", label: "Newsletter", icon: Mail },
  { href: "/marketplace", label: "Marketplace", icon: ShoppingBag },
  { href: "/about", label: "About", icon: Info },
];

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-home">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-background rounded-lg p-1.5">
                <Brain className="h-6 w-6 text-purple-500" />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              DEOD AI
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={location === item.href ? "secondary" : "ghost"}
                  size="sm"
                  className="text-sm"
                  data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <div className="hidden md:block">
              <Link href="/submit">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-0"
                  data-testid="button-submit-tool-nav"
                >
                  Submit Your Tool
                </Button>
              </Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={location === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`mobile-link-${item.label.toLowerCase().replace(' ', '-')}`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-border/50">
                <Link href="/submit">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-0"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid="mobile-button-submit-tool"
                  >
                    Submit Your Tool
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

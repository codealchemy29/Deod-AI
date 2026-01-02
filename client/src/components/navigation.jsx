import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Menu, X, Sun, Moon, GraduationCap, Search, Wrench, Upload, Newspaper, Mail, ShoppingBag, Info } from "lucide-react";
var navItems = [
    { href: "/about", label: "About", icon: Info },
    { href: "/learn", label: "Learn AI", icon: GraduationCap },
    { href: "/explore", label: "Explore Tools", icon: Search },
    { href: "/create", label: "Create Tools", icon: Wrench },
    { href: "/submit", label: "Submit Tools", icon: Upload },
    { href: "/marketplace", label: "Marketplace", icon: ShoppingBag },
    { href: "/news", label: "News", icon: Newspaper },
    { href: "/newsletter", label: "Newsletter", icon: Mail },
];
export function Navigation() {
    var location = useLocation()[0];
    var _a = useState(false), mobileMenuOpen = _a[0], setMobileMenuOpen = _a[1];
    var _b = useTheme(), theme = _b.theme, toggleTheme = _b.toggleTheme;
    return (<header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         <Link href="/" className="flex items-center gap-2 group" data-testid="link-home">
  <div className="relative w-max">
    {/* Updated Blurred background to Navy Blue theme */}
    <div className="absolute inset-0 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity"/>
    
    <div className="relative rounded-lg p-2 flex items-center justify-center">
      {/* Light Theme Logo (Visible by default, hidden in dark mode) */}
      <img src="/image-removebg-preview.png" alt="Logo" className="h-20 w-[130px] md:h-28 md:w-[180px] object-contain dark:hidden"/>

      {/* Dark Theme Logo (Hidden by default, visible only in dark mode) */}
      <img src="/logo_black.png" // Replace with your dark theme logo path
     alt="Logo" className="hidden h-20 w-[130px] md:h-28 md:w-[180px] object-contain dark:block"/>
    </div>
  </div>
    </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(function (item) { return (<Link key={item.href} href={item.href}>
                <button className={"px-3 py-2 text-sm font-medium transition-colors rounded-md ".concat(location === item.href
                ? "bg-[#1e3a8a]/10 text-[#1e3a8a]"
                : "text-muted-foreground hover:text-[#1e3a8a] hover:bg-[#1e3a8a]/5")} data-testid={"link-".concat(item.label.toLowerCase().replace(' ', '-'))}>
                  {item.label}
                </button>
              </Link>); })}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} data-testid="button-theme-toggle" aria-label="Toggle theme" className="hover:text-[#1e3a8a] hover:bg-[#1e3a8a]/5">
              {theme === "light" ? (<Moon className="h-5 w-5"/>) : (<Sun className="h-5 w-5"/>)}
            </Button>

            <div className="hidden md:block">
              <Link href="/submit">
                <Button className="bg-gradient-to-r from-[#1e3a8a] to-blue-700 text-white border-0 shadow-sm hover:shadow-md transition-all active:scale-95" data-testid="button-submit-tool-nav">
                  Submit Your Tool
                </Button>
              </Link>
            </div>

            <Button variant="ghost" size="icon" className="lg:hidden hover:text-[#1e3a8a] hover:bg-[#1e3a8a]/5" onClick={function () { return setMobileMenuOpen(!mobileMenuOpen); }} data-testid="button-mobile-menu" aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (<div className="lg:hidden py-4 border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map(function (item) { return (<Link key={item.href} href={item.href}>
                  <Button variant={location === item.href ? "secondary" : "ghost"} className={"w-full justify-start gap-2 ".concat(location === item.href
                    ? "bg-[#1e3a8a]/10 text-[#1e3a8a]"
                    : "hover:text-[#1e3a8a] hover:bg-[#1e3a8a]/5")} onClick={function () { return setMobileMenuOpen(false); }} data-testid={"mobile-link-".concat(item.label.toLowerCase().replace(' ', '-'))}>
                    <item.icon className={"h-4 w-4 ".concat(location === item.href ? "text-[#1e3a8a]" : "")}/>
                    {item.label}
                  </Button>
                </Link>); })}
              <div className="pt-2 mt-2 border-t border-border/50">
                <Link href="/submit">
                  <Button className="w-full bg-gradient-to-r from-[#1e3a8a] to-blue-700 text-white border-0" onClick={function () { return setMobileMenuOpen(false); }} data-testid="mobile-button-submit-tool">
                    Submit Your Tool
                  </Button>
                </Link>
              </div>
            </div>
          </div>)}
      </nav>
    </header>);
}

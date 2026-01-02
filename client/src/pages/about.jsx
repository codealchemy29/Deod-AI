import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Target, Heart, Users, Zap, Shield, Globe, ArrowRight, Brain, Rocket, TrendingUp, Award, CheckCircle2, } from "lucide-react";
var values = [
    {
        icon: Users,
        title: "Creator-First",
        description: "Every decision we make puts creators at the center. Your success is our success.",
    },
    {
        icon: Shield,
        title: "Trust & Transparency",
        description: "No hidden fees, no surprises. What you see is what you get.",
    },
    {
        icon: Zap,
        title: "Innovation",
        description: "We're constantly pushing boundaries to bring you the latest in AI technology.",
    },
    {
        icon: Globe,
        title: "Accessibility",
        description: "AI should be accessible to everyone, regardless of technical background.",
    },
];
var stats = [
    { value: "10,000+", label: "AI Creators" },
    { value: "500+", label: "AI Tools" },
    { value: "$2M+", label: "Creator Earnings" },
    { value: "50K+", label: "Active Learners" },
];
var milestones = [
    {
        year: "2023",
        title: "DEODAI Founded",
        description: "Started with a vision to democratize AI creation and monetization.",
    },
    {
        year: "2024 Q1",
        title: "Platform Launch",
        description: "Launched with 50 AI tools and 1,000 early adopters.",
    },
    {
        year: "2024 Q2",
        title: "Creator Program",
        description: "Introduced 90% revenue share, attracting top AI creators.",
    },
    {
        year: "2024 Q4",
        title: "10K Creators",
        description: "Reached 10,000 creators and $2M in creator payouts.",
    },
];
export default function About() {
    return (<div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Navy Blue Gradient Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/20 via-blue-900/10 to-indigo-900/20"/>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#1e3a8a]/20 rounded-full blur-3xl"/>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1e3a8a]/10 rounded-full blur-3xl"/>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-[#1e3a8a]/10 text-[#1e3a8a] border-[#1e3a8a]/20" data-testid="badge-about-hero">
            <Info className="w-3 h-3 mr-1"/>
            About Us
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-about-title">
            About{" "}
            <span className="bg-gradient-to-r from-[#1e3a8a] via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              DEODAI
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-about-subtitle">
            DEODAI is built to empower the next generation of AI creators, developers, 
            and entrepreneurs by giving them tools, education, visibility, and real monetization.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a]" data-testid="badge-mission">
                <Target className="w-3 h-3 mr-1"/>
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-mission-title">
                The AI Ecosystem Where Builders Learn, Create, and Earn
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We believe the future of AI should be shaped by creators, not just corporations. 
                That's why we built DEODAI - a platform where anyone can learn AI skills, 
                discover powerful tools, build their own AI products, and earn real revenue.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our mission is to democratize AI creation and ensure that creators get the 
                recognition and rewards they deserve. With our 90% revenue share model, 
                we're putting more money in creators' pockets than anywhere else.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#1e3a8a]"/>
                  <span className="text-sm">Mission-driven</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#1e3a8a]"/>
                  <span className="text-sm">Creator-first</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#1e3a8a]"/>
                  <span className="text-sm">Future-ready</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/20 to-blue-500/20 rounded-3xl blur-2xl"/>
              <Card className="relative border-border/50 bg-card/50 backdrop-blur-sm" data-testid="card-mission-visual">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="h-24 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center border border-[#1e3a8a]/20">
                        <Brain className="h-10 w-10 text-[#1e3a8a]"/>
                      </div>
                      <div className="h-32 rounded-lg bg-blue-600/10 flex items-center justify-center border border-blue-600/20">
                        <Rocket className="h-12 w-12 text-blue-600"/>
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="h-32 rounded-lg bg-indigo-600/10 flex items-center justify-center border border-indigo-600/20">
                        <TrendingUp className="h-12 w-12 text-indigo-600"/>
                      </div>
                      <div className="h-24 rounded-lg bg-slate-800/10 flex items-center justify-center border border-slate-800/20">
                        <Award className="h-10 w-10 text-slate-800"/>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`about-stat-${index}`}>
                  <div className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a]" data-testid="badge-values">
              <Heart className="w-3 h-3 mr-1"/>
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-values-title">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our core values guide everything we do at DEODAI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(function (value, index) { return (<Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm group hover:border-[#1e3a8a]/50 transition-colors" data-testid={"card-value-".concat(index)}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-7 w-7 text-[#1e3a8a]"/>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#1e3a8a] transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>); })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="py-16 md:py-24 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a]" data-testid="badge-journey">
                <Sparkles className="w-3 h-3 mr-1" />
                Our Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-journey-title">
                Building the Future of AI Creation
              </h2>
            </div>
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4" data-testid={`milestone-${index}`}>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-900/20">
                      {index + 1}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-[#1e3a8a] to-transparent mt-2 opacity-30" />
                    )}
                  </div>
                  <Card className="flex-1 border-border/50 bg-card/50 backdrop-blur-sm hover:border-[#1e3a8a]/30 transition-colors">
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2 text-[#1e3a8a] bg-[#1e3a8a]/5">{milestone.year}</Badge>
                      <h3 className="font-semibold text-lg mb-1">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section> */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-cta">
            Ready to Join the AI Revolution?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Whether you want to learn AI, explore tools, or start earning as a creator, 
            DEODAI is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/learn">
              <Button size="lg" className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white border-0" data-testid="button-about-start-learning">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4"/>
              </Button>
            </Link>
            <Link href="/submit">
              <Button size="lg" variant="outline" className="w-full sm:w-auto hover:border-[#1e3a8a] hover:text-[#1e3a8a]" data-testid="button-about-become-creator">
                Become a Creator
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>);
}

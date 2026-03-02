import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Wrench,
  Sparkles,
  Code,
  Layers,
  Zap,
  ArrowRight,
  CheckCircle2,
  Save,
  Eye,
  Send,
  Brain,
  Palette,
  Video,
  Music,
  Bot,
  FileCode,
  Settings,
  TestTube,
} from "lucide-react";

/* =======================
    DATA
======================= */

const buildSteps = [
  {
    step: 1,
    title: "Define Your Tool",
    description: "Give your AI tool a name, description, and choose its category.",
    icon: Settings,
  },
  {
    step: 2,
    title: "Configure AI Model",
    description: "Select and configure the AI model that powers your tool.",
    icon: Brain,
  },
  {
    step: 3,
    title: "Design Interface",
    description: "Create the user interface with our no-code builder.",
    icon: Palette,
  },
  {
    step: 4,
    title: "Test & Iterate",
    description: "Test your tool and refine based on feedback.",
    icon: TestTube,
  },
  {
    step: 5,
    title: "Publish & Earn",
    description: "Launch your tool and start earning 90% revenue.",
    icon: Zap,
  },
];

const templates = [
  {
    name: "Text Generator",
    description: "Create a custom text generation tool with prompts.",
    category: "Text AI",
    icon: FileCode,
    color: "from-[#1e3a8a] to-teal-500",
  },
  {
    name: "Image Analyzer",
    description: "Build an AI that analyzes and describes images.",
    category: "Image AI",
    icon: Palette,
    color: "from-teal-600 to-cyan-500",
  },
  {
    name: "Chatbot",
    description: "Create a conversational AI assistant.",
    category: "Automation",
    icon: Bot,
    color: "from-cyan-600 to-teal-600",
  },
  {
    name: "Code Assistant",
    description: "Build a tool that helps with coding tasks.",
    category: "Code AI",
    icon: Code,
    color: "from-[#1e3a8a] to-indigo-600",
  },
];

const supportedModels = [
  "GPT-4",
  "GPT-3.5 Turbo",
  "Claude 3",
  "Gemini Pro",
  "Llama 2",
  "Custom Model",
];

/* =======================
    PAGE
======================= */

export default function Create() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/5 via-background to-teal-500/5 dark:from-[#1e3a8a]/10 dark:via-background dark:to-teal-500/10" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#1e3a8a]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a] dark:text-blue-300 border-[#1e3a8a]/20">
              <Wrench className="w-3 h-3 mr-1" />
              Tool Builder
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Create & Launch Your Own{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] via-blue-700 to-teal-500 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                AI Tools
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Build powerful AI tools without friction. Use our no-code and low-code
              friendly builder to create, test, and launch your AI products.
            </p>

            {/* <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border">
                View Templates
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* ================= BUILD STEPS ================= */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Idea to Launch in 5 Steps
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our streamlined workflow makes it easy to bring your AI tool ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {buildSteps.map((step, index) => (
              <div key={index} className="relative group">
                <Card className="h-full bg-card border-border hover:shadow-md transition">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1e3a8a] to-teal-500 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Step {step.step}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>

                {index < buildSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2">
                    <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUILDER PREVIEW ================= */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            <div>
              <Badge className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a] dark:text-blue-300 border-[#1e3a8a]/20">
                <Sparkles className="w-3 h-3 mr-1" />
                Tool Builder
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Intuitive No-Code Builder
              </h2>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our visual builder makes it easy for anyone to create AI tools.
                No coding required, but developers can extend with custom code.
              </p>

              <div className="space-y-4">
                {[
                  "Drag & Drop Interface",
                  "Pre-built AI Integrations",
                  "Custom Code Support",
                  "Real-time Preview",
                ].map((title, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">{title}</h4>
                      <p className="text-muted-foreground text-sm">
                        Build faster with creator-first tooling.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-card border-border shadow-xl overflow-hidden">
              <CardHeader className="border-b border-border bg-muted/50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Create New Tool</CardTitle>
                  <Badge variant="outline" className="border-border">Draft</Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Tool Name</Label>
                  <Input placeholder="My AI Tool" className="bg-background border-border" />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Description</Label>
                  <Textarea rows={3} placeholder="Describe what your tool does..." className="bg-background border-border" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Category</Label>
                    <Select>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="text">Text AI</SelectItem>
                        <SelectItem value="image">Image AI</SelectItem>
                        <SelectItem value="video">Video AI</SelectItem>
                        <SelectItem value="audio">Audio AI</SelectItem>
                        <SelectItem value="code">Code AI</SelectItem>
                        <SelectItem value="automation">Automation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">AI Model</Label>
                    <Select>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        {supportedModels.map((model) => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                  <Button variant="outline" className="flex-1 border-border">
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button variant="outline" className="flex-1 border-border">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button className="flex-1 bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Publish
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* ================= TEMPLATES ================= */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start with a Template
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose from our pre-built templates to get started faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, i) => (
              <Card key={i} className="bg-card border-border hover:shadow-md transition cursor-pointer group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${template.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform`}>
                    <template.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs bg-muted text-muted-foreground">
                    {template.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
                  <p className="text-muted-foreground text-sm">{template.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your AI Tool?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Start creating today and join thousands of creators earning with DEODAI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white">
              Start Creating
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/submit">
              <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                Submit Existing Tool
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
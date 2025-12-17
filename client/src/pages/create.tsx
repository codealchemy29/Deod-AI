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
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Image Analyzer",
    description: "Build an AI that analyzes and describes images.",
    category: "Image AI",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Chatbot",
    description: "Create a conversational AI assistant.",
    category: "Automation",
    icon: Bot,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Code Assistant",
    description: "Build a tool that helps with coding tasks.",
    category: "Code AI",
    icon: Code,
    color: "from-indigo-500 to-violet-500",
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

export default function Create() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-amber-900/10 to-yellow-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4" data-testid="badge-create-hero">
              <Wrench className="w-3 h-3 mr-1" />
              Tool Builder
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-create-title">
              Create & Launch Your Own{" "}
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 bg-clip-text text-transparent">
                AI Tools
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-create-subtitle">
              Build powerful AI tools without friction. Use our no-code and low-code 
              friendly builder to create, test, and launch your AI products.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-500 text-white border-0" data-testid="button-start-building">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-view-templates">
                View Templates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-process-title">
              From Idea to Launch in 5 Steps
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our streamlined workflow makes it easy to bring your AI tool ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {buildSteps.map((step, index) => (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Step {step.step}</div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {index < buildSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Builder Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge variant="secondary" className="mb-4" data-testid="badge-builder">
                <Sparkles className="w-3 h-3 mr-1" />
                Tool Builder
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-builder-title">
                Intuitive No-Code Builder
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our visual builder makes it easy for anyone to create AI tools. 
                No coding required, but developers can extend with custom code.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Drag & Drop Interface</h4>
                    <p className="text-muted-foreground text-sm">Build your tool's UI without writing code.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Pre-built AI Integrations</h4>
                    <p className="text-muted-foreground text-sm">Connect to GPT-4, Claude, Gemini, and more.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Custom Code Support</h4>
                    <p className="text-muted-foreground text-sm">Extend functionality with JavaScript or Python.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Real-time Preview</h4>
                    <p className="text-muted-foreground text-sm">See your changes instantly as you build.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Builder Preview Card */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden" data-testid="card-builder-preview">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-lg">Create New Tool</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Draft</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="tool-name">Tool Name</Label>
                  <Input
                    id="tool-name"
                    placeholder="My AI Tool"
                    data-testid="input-tool-name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tool-description">Description</Label>
                  <Textarea
                    id="tool-description"
                    placeholder="Describe what your tool does..."
                    className="resize-none"
                    rows={3}
                    data-testid="input-tool-description"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select>
                      <SelectTrigger data-testid="select-tool-category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
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
                    <Label>AI Model</Label>
                    <Select>
                      <SelectTrigger data-testid="select-ai-model">
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        {supportedModels.map((model) => (
                          <SelectItem key={model} value={model.toLowerCase().replace(/\s+/g, "-")}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/50">
                  <Button variant="outline" className="flex-1" data-testid="button-save-draft">
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button variant="outline" className="flex-1" data-testid="button-preview">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-orange-600 to-amber-500 text-white border-0" data-testid="button-publish">
                    <Send className="h-4 w-4 mr-2" />
                    Publish
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-templates-title">
              Start with a Template
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from our pre-built templates to get started faster.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <Card key={index} className="group hover-elevate border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden cursor-pointer" data-testid={`card-template-${index}`}>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${template.color} flex items-center justify-center mb-4`}>
                    <template.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">{template.category}</Badge>
                  <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
                  <p className="text-muted-foreground text-sm">{template.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-title">
            Ready to Build Your AI Tool?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Start creating today and join thousands of creators earning with DEOD AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-500 text-white border-0" data-testid="button-start-creating">
              Start Creating
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/submit">
              <Button size="lg" variant="outline" data-testid="button-submit-existing">
                Submit Existing Tool
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

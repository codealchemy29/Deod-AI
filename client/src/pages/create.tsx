import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  Zap,
  ArrowRight,
  CheckCircle2,
  Save,
  Eye,
  Send,
  Brain,
  Video,
  Music,
  Bot,
  Settings,
  Map,
  MousePointerClick,
  Coins,
  Library,
  Network,
  Image as ImageIcon,
  Heart,
  Gamepad2,
  ShieldCheck,
  Activity,
  Rocket
} from "lucide-react";

/* =======================
    DATA
======================= */

const buildSteps = [
  {
    step: 1,
    title: "Access Agent Studio",
    description: "Begin by purchasing a LAND parcel or directly entering the Studio through the dashboard. LAND is minted as an ERC-721 NFT.",
    icon: Map,
  },
  {
    step: 2,
    title: "Create AI Agent",
    description: "The frontend securely encodes your User ID, Wallet address, and LAND parcel ID, redirecting you into the native DAI Agent Studio.",
    icon: MousePointerClick,
  },
  {
    step: 3,
    title: "Configure the Agent",
    description: "Define the agent role, capabilities, personality, monetization rules, memory permissions, and skill manifest.",
    icon: Settings,
  },
  {
    step: 4,
    title: "Memory & Intelligence",
    description: "Setup the three-tier memory architecture: Working, Episodic, and Semantic Memory using Pinecone/Weaviate.",
    icon: Brain,
  },
  {
    step: 5,
    title: "Monetization",
    description: "Configure revenue models like subscriptions, per-task fees, licensing, sales, or fractional ownership.",
    icon: Coins,
  },
  {
    step: 6,
    title: "Select & Deploy",
    description: "Accelerate deployment using the Agent Template Library and Decentrawood SDK.",
    icon: Library,
  },
];

const deploySteps = [
  {
    step: 1,
    title: "Deploy Agent",
    description: "The engine registers the agent, generates a DAI Address, provisions a Polygon wallet, and links DEOD payments.",
    icon: Rocket,
  },
  {
    step: 2,
    title: "Auto Registration",
    description: "Webhooks trigger. Agent NFT (ERC-721) is minted and ownership is assigned to create permanent blockchain proof.",
    icon: CheckCircle2,
  },
  {
    step: 3,
    title: "LAND Linkage",
    description: "Updates metadata with Agent address and ERC-4907 delegation rules, binding agent to your LAND parcel.",
    icon: Map,
  },
  {
    step: 4,
    title: "Verification & AgentScore",
    description: "System tracks reputation, economic metrics, and task analytics published as an ERC-5114 soul-bound NFT.",
    icon: Activity,
  },
  {
    step: 5,
    title: "Security Validation",
    description: "Platform validates HMAC-SHA256 signatures, prompt injection safety, and on-chain ownership.",
    icon: ShieldCheck,
  },
  {
    step: 6,
    title: "Go Live",
    description: "Agent appears in dashboard and Marketplace, ready to interact and naturally generate DEOD revenue.",
    icon: Zap,
  },
];

const templates = [
  {
    name: "Gaming Agent Templates",
    description: "Pre-built models specialized for interactions in gaming ecosystems.",
    category: "Gaming",
    icon: Gamepad2,
    color: "from-[#1e3a8a] to-blue-500",
  },
  {
    name: "LAND Management Templates",
    description: "Automated agents that handle your virtual real estate properties.",
    category: "Real Estate",
    icon: Map,
    color: "from-teal-600 to-cyan-500",
  },
  {
    name: "NFT Intelligence Templates",
    description: "Tools to analyze, track, and manage NFT assets autonomously.",
    category: "Web3",
    icon: ImageIcon,
    color: "from-cyan-600 to-teal-600",
  },
  {
    name: "Media Production Templates",
    description: "Agents designed for seamless audio and video production flows.",
    category: "Media",
    icon: Video,
    color: "from-[#1e3a8a] to-indigo-600",
  },
  {
    name: "Companion Agent Templates",
    description: "Create interactive, highly personalized companion AI agents.",
    category: "Social",
    icon: Heart,
    color: "from-pink-600 to-rose-500",
  },
];

const agentCategories = [
  "Gaming Agents",
  "LAND Management Agents",
  "NFT Marketplace Agents",
  "Avatar Agents",
  "Companion Agents",
  "Music & Video Agents",
  "Movie Production Agents",
  "Dating & Safety Agents"
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
              <Bot className="w-3 h-3 mr-1" />
              Decentrawood Agent Infrastructure (DAI)
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Know Your{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] via-blue-700 to-teal-500 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                Agent
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              The Decentrawood platform allows users to create autonomous AI agents directly through
              the proprietary DAI. These agents are not simple bots — they are ownable, revenue-generating
              AI assets called <strong>TIDAs (Tokenized Intelligent Digital Assets)</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white">
                Launch Agent Studio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUILD STEPS ================= */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Step-by-Step Agent Creation Flow
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Follow our comprehensive path to mold, memory-map, and deploy your intelligent agent within Decentrawood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildSteps.map((step, index) => (
              <div key={index} className="relative group">
                <Card className="h-full bg-card border-border hover:shadow-md transition">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1e3a8a] to-teal-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase text-teal-600 dark:text-teal-400 tracking-wider">
                          Step {step.step}
                        </div>
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUILDER PREVIEW ================= */}
      {/* <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            <div>
              <Badge className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a] dark:text-blue-300 border-[#1e3a8a]/20">
                <Network className="w-3 h-3 mr-1" />
                Intelligence & Monetization
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Three-Tier Memory Architecture
              </h2>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Every agent receives a specialized intelligence setup enabling persistent behavior and evolving capabilities across all verticals.
              </p>

              <div className="space-y-6 mb-8">
                <Card className="bg-background border-border">
                  <CardContent className="p-4 flex gap-4 items-start pb-4">
                    <Brain className="h-6 w-6 text-teal-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Working Memory</h4>
                      <p className="text-sm text-muted-foreground">Handles active, short-term conversations and tasks.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-background border-border">
                  <CardContent className="p-4 flex gap-4 items-start pb-4">
                    <Network className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Episodic Memory</h4>
                      <p className="text-sm text-muted-foreground">Stores granular details of interaction history.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-background border-border">
                  <CardContent className="p-4 flex gap-4 items-start pb-4">
                    <Library className="h-6 w-6 text-indigo-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Semantic Memory</h4>
                      <p className="text-sm text-muted-foreground">Long-term vector knowledge integration via Pinecone/Weaviate.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-card border-border shadow-xl overflow-hidden">
              <CardHeader className="border-b border-border bg-muted/50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">DAI Agent Configuration</CardTitle>
                  <Badge variant="outline" className="border-border">Studio</Badge>
                </div>
                <CardDescription>Configure your agent's identity and revenue rules</CardDescription>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Agent Name</Label>
                  <Input placeholder="e.g. MetaGuide AI" className="bg-background border-border" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Vertical / Category</Label>
                    <Select>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        {agentCategories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Monetization Model</Label>
                    <Select>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select Revenue Model" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="subscription">Subscription Access</SelectItem>
                        <SelectItem value="per_task">Per-Task Fees</SelectItem>
                        <SelectItem value="licensing">Licensing</SelectItem>
                        <SelectItem value="marketplace">Marketplace Sales</SelectItem>
                        <SelectItem value="fractional">Fractional Ownership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Personality & Skill Manifest</Label>
                  <Textarea rows={4} placeholder="Describe how your agent behaves, its primary skills, and its role within Decentrawood..." className="bg-background border-border" />
                </div>

                <div className="bg-blue-50/50 dark:bg-blue-900/10 p-3 rounded-lg border border-blue-100 dark:border-blue-900 flex gap-3 text-sm">
                  <Coins className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <p className="text-blue-900 dark:text-blue-300">
                    <strong>Note:</strong> DEOD token settlement is integrated directly into the agent lifecycle. Ensure you hold DEOD for setup fees.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                  <Button variant="outline" className="flex-1 border-border">
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button className="flex-1 bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Mint TIDA Agent
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section> */}

      {/* ================= VERIFY & DEPLOY ================= */}
      <section className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Verify Your Agent
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              After configuration, your agent seamlessly moves through the Decentrawood deployment and verification pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deploySteps.map((step, index) => (
              <div key={index} className="relative group">
                <Card className="h-full bg-card border-border hover:shadow-md transition">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-indigo-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-white">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase text-cyan-600 dark:text-cyan-400 tracking-wider">
                          Phase {step.step}
                        </div>
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEMPLATES ================= */}
      <section className="py-16 md:py-24 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Select Templates & SDKs
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Developers can dramatically accelerate deployment using our specialized templates via the Decentrawood SDK and Agent Template Library.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
            Ready to Forge Your Digital Asset?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Create your ownable, revenue-generating Tokenized Intelligent Digital Asset today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white">
              Enter Agent Studio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                Learn about Decentrawood SDK
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
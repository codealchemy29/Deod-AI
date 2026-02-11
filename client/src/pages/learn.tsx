import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  GraduationCap,
  BookOpen,
  Brain,
  Code,
  Bot,
  Zap,
  Clock,
  Users,
  Star,
  ArrowRight,
  Play,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, Check } from "lucide-react";
declare global {
  interface Window {
    ethereum?: any;
  }
}
import { API_BASE_URL } from "@/config/api";
import { CLAIM_URL } from "@/config/env";

/* =======================
    DATA
======================= */

// const learningPaths = [
//   {
//     title: "AI Fundamentals",
//     description: "Start your AI journey with core concepts and terminology.",
//     level: "Beginner",
//     duration: "4 weeks",
//     lessons: 24,
//     students: "12,500+",
//     icon: Brain,
//     topics: ["Introduction to AI", "Machine Learning Basics", "Neural Networks", "AI Ethics"],
//   },
//   {
//     title: "Machine Learning Mastery",
//     description: "Deep dive into ML algorithms and practical applications.",
//     level: "Intermediate",
//     duration: "8 weeks",
//     lessons: 48,
//     students: "8,200+",
//     icon: Layers,
//     topics: ["Supervised Learning", "Unsupervised Learning", "Model Training", "Feature Engineering"],
//   },
//   {
//     title: "Large Language Models",
//     description: "Understand and work with LLMs like GPT, Claude, and more.",
//     level: "Intermediate",
//     duration: "6 weeks",
//     lessons: 36,
//     students: "6,800+",
//     icon: BookOpen,
//     topics: ["Transformer Architecture", "Prompt Engineering", "Fine-tuning", "RAG Systems"],
//   },
//   {
//     title: "AI Agents & Automation",
//     description: "Build intelligent agents that can reason and take actions.",
//     level: "Advanced",
//     duration: "8 weeks",
//     lessons: 42,
//     students: "4,500+",
//     icon: Bot,
//     topics: ["Agent Frameworks", "Tool Use", "Multi-Agent Systems", "Production Deployment"],
//   },
//   {
//     title: "AI Application Development",
//     description: "Create production-ready AI applications from scratch.",
//     level: "Advanced",
//     duration: "10 weeks",
//     lessons: 56,
//     students: "3,200+",
//     icon: Code,
//     topics: ["API Integration", "Backend Architecture", "Frontend Development", "Scaling & Optimization"],
//   },
//   {
//     title: "AI Business & Monetization",
//     description: "Turn your AI skills into a profitable business.",
//     level: "All Levels",
//     duration: "4 weeks",
//     lessons: 20,
//     students: "5,100+",
//     icon: Zap,
//     topics: ["Market Research", "Product Strategy", "Pricing Models", "Marketing & Sales"],
//   },
// ];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const featuredCourses = [
  {
    title: "Build Your First AI Chatbot",
    instructor: "Sarah Chen",
    rating: 4.9,
    students: 3500,
    duration: "3 hours",
    level: "Beginner",
    progress: 0,
  },
  {
    title: "Advanced Prompt Engineering",
    instructor: "Mike Johnson",
    rating: 4.8,
    students: 2800,
    duration: "5 hours",
    level: "Intermediate",
    progress: 35,
  },
  {
    title: "RAG Applications with LangChain",
    instructor: "Emily Davis",
    rating: 4.9,
    students: 1900,
    duration: "6 hours",
    level: "Advanced",
    progress: 0,
  },
];

/* =======================
    HELPERS
======================= */

function getLevelColor(level: string) {
  switch (level) {
    case "Beginner":
      return "bg-green-500/10 text-green-600 dark:text-green-400";
    case "Intermediate":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
    case "Advanced":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400";
    default:
      return "bg-gray-500/10 text-gray-600 dark:text-gray-400";
  }
}

/* =======================
    PAGE
======================= */

export default function Learn() {
  const [open, setOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  // const couponCode = "DEOD50";
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [couponOpen, setCouponOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const authToken = localStorage.getItem("token");
  const [activeCouponMessage, setActiveCouponMessage] = useState<string | null>(
    null,
  );

  // const { toast } = useToast();
  const [plans, setPlans] = useState<any[]>([]);
  const [loadingPlans, setLoadingPlans] = useState(true);

  const [couponData, setCouponData] = useState<any>(null);
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [isExistingCoupon, setIsExistingCoupon] = useState(false);
  console.log("coupondata=>", couponData);

  const createCoupon = async () => {
    setActiveCouponMessage(null);
    
  const token = localStorage.getItem("token");

    // ✅ LOGIN CHECK FIRST
  if (!token) {
    setCouponError("Please login or register first to redeem a coupon.");
    setCouponOpen(true);
    setIsExistingCoupon(false);
    return;
  }

  const existingCoupon = await getActiveCouponForPackage(selectedPlan._id);
console.log("isExistingCoupon:", isExistingCoupon);
  if (existingCoupon) {
    setCouponData(existingCoupon);
    setIsExistingCoupon(true);
    setCouponOpen(true);
    setEnrollOpen(false);
    return;
  }
  

    // const token = localStorage.getItem("token");
    // if (!token) {
    //   setCouponError("Please login first");
    //   return;
    // }

    const payload = {
      packageId: selectedPlan._id,
      senderWalletAddress:
        walletAddress || "0x0000000000000000000000000000000000000000",

      // 🔹 MOCK VALUES (until blockchain payment is live)
      transactionHash: "0xDEV_TX_" + Date.now().toString(16),

      deodAmount: Number((selectedPlan.discountedPrice * 87.89).toFixed(6)), // mock conversion

      usdAmount: Number(selectedPlan.discountedPrice),
    };

    console.log("Coupon payload:", payload);

    try {
      setCouponLoading(true);
      setCouponError(null);

      const res = await fetch(`${API_BASE_URL}/api/v1/coupons`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      console.log("Coupon API response:", json);

      if (!res.ok) {
        throw new Error(json.message || "Coupon creation failed");
      }

      setCouponData(json.data);
      setIsExistingCoupon(false);
      setEnrollOpen(false);
      setCouponOpen(true);
    } catch (err: any) {
      setCouponError(err.message);
    } finally {
      setCouponLoading(false);
    }
  };

  const getActiveCouponForPackage = async (packageId: string) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const res = await fetch(`${API_BASE_URL}/api/v1/coupons/my-coupons`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) return null;

    const json = await res.json();

    if (!Array.isArray(json?.data)) return null;

    return (
      json.data.find(
        (c: any) =>
          c.packageId === packageId &&
          c.isActive &&
          !c.isRedeemed
      ) || null
    );
  } catch (err) {
    console.error("Error checking active coupon:", err);
    return null;
  }
};


  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/packages`);
        const json = await res.json();

        if (res.ok) {
          setPlans(json.data.filter((p: any) => p.isActive));
        }
      } catch (err) {
        console.error("Failed to fetch packages", err);
      } finally {
        setLoadingPlans(false);
      }
    };

    fetchPackages();
  }, []);

  // 🔹 CLICK HANDLER
  const handleEnrollClick = (plan: any) => {
    setSelectedPlan(plan);
    setEnrollOpen(true);
  };

  // const handleCopy = async () => {
  //   try {
  //     await navigator.clipboard.writeText(COUPON_CODE);
  //     setCopied(true);
  //     setTimeout(() => setCopied(false), 2000);
  //   } catch (err) {
  //     console.error("Copy failed");
  //   }
  // };

  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletError, setWalletError] = useState<string | null>(null);

  const connectMetaMask = async () => {
    try {
      if (!window.ethereum) {
        setWalletError("MetaMask is not installed");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setWalletAddress(accounts[0]);
      setWalletError(null);
    } catch (err: any) {
      console.error(err);
      setWalletError("Wallet connection failed");
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Themed Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-teal-50 dark:from-[#1e3a8a]/10 dark:via-background dark:to-teal-900/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <Badge className="mb-6 bg-[#1e3a8a]/10 text-[#1e3a8a] dark:text-blue-300 border-[#1e3a8a]/20">
            <GraduationCap className="w-3 h-3 mr-1" />
            AI Education
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learn AI Skills That{" "}
            <span className="bg-gradient-to-r from-[#1e3a8a] to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
              Actually Matter
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10">
            From beginner fundamentals to advanced AI engineering. Master the
            skills that will define the future of technology with structured
            learning paths and hands-on projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => setOpen(true)}
              className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white"
            >
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              onClick={() => setOpen(true)}
              variant="outline"
              className="border-border"
            >
              Learn AI With Tutor
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground">
            {[
              "Free to start",
              "Project-based learning",
              "Certificate on completion",
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEARNING PATHS ================= */}
      {/* <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Structured Learning Paths
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your path and progress from fundamentals to advanced topics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-md dark:hover:shadow-[#1e3a8a]/10 transition">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                      <path.icon className="h-6 w-6 text-[#1e3a8a] dark:text-blue-400" />
                    </div>
                    <Badge className={getLevelColor(path.level)}>
                      {path.level}
                    </Badge>
                  </div>
                  <CardTitle>{path.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {path.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {path.topics.slice(0, 3).map((topic, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                        {topic}
                      </Badge>
                    ))}
                    {path.topics.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                        +{path.topics.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground border-t border-border pt-3">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {path.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {path.lessons} lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {path.students}
                    </span>
                  </div>

                  <Button variant="outline" className="w-full hover:bg-[#1e3a8a]/10 hover:text-[#1e3a8a] border-border">
                    Start Path
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-28 bg-gray-50 dark:bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">AI Course Pricing Plans</h2>

          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your learning stage and goals.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan._id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className={`relative rounded-2xl shadow-xl p-8 border transition
            bg-white dark:bg-card text-foreground
            ${plan.isPopular ? "border-indigo-600" : "border-border"}
          `}
              >
                {plan.isPopular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2
              bg-indigo-600 text-white text-sm px-4 py-1 rounded-full"
                  >
                    Most Popular
                  </span>
                )}

                {/* Title */}
                {/* Title */}
                <h2 className="text-2xl font-bold">{plan.title}</h2>

                <p className="text-indigo-600 font-medium capitalize">
                  {plan.level} level
                </p>

                {/* Price */}
                <div className="mt-6 flex items-end justify-center gap-2">
                  <span className="line-through text-muted-foreground">
                    ${plan.originalPrice}
                  </span>

                  <span className="text-4xl font-bold">
                    ${plan.discountedPrice}
                  </span>

                  <span className="text-sm text-muted-foreground">
                    {plan.currency}
                  </span>
                </div>

                {/* Features */}
                <div className="mt-6 text-left">
                  <h4 className="font-semibold mb-2">What you’ll get:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {plan.features.map((feature: string, i: number) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <p className="mt-4 text-sm text-muted-foreground">
                  <strong className="text-foreground">Best for:</strong>{" "}
                  {plan.bestFor.join(", ")}
                </p>

                {/* CTA */}
                <button
                  onClick={() => handleEnrollClick(plan)}
                  className={`mt-6 w-full py-3 rounded-xl font-semibold transition ${
                    plan.isPopular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED COURSES ================= */}
      <section className="py-28 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-2">Featured Courses</h2>
              <p className="text-muted-foreground">
                Hand-picked courses from top AI instructors.
              </p>
            </div>
            <Button variant="outline" className="border-border">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-md transition overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-[#1e3a8a]/20 to-teal-500/20 flex items-center justify-center">
                  <Play className="h-10 w-10 text-[#1e3a8a] dark:text-blue-400" />
                </div>

                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <span className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      {course.rating}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    By {course.instructor}
                  </p>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{course.duration}</span>
                    <span>{course.students.toLocaleString()} students</span>
                  </div>

                  {course.progress > 0 && (
                    <Progress
                      value={course.progress}
                      className="h-1.5 bg-muted"
                    />
                  )}

                  <Button
                    className="w-full"
                    variant={course.progress > 0 ? "default" : "outline"}
                    style={
                      course.progress > 0 ? { backgroundColor: "#1e3a8a" } : {}
                    }
                  >
                    {course.progress > 0 ? "Continue Learning" : "Start Course"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMING SOON ================= */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge className="mb-4 bg-[#1e3a8a] text-white">Coming Soon</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Interactive Labs & Certifications
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Interactive coding labs, AI sandbox environments, and
            industry-recognized certifications are launching soon.
          </p>
          <Link href="/newsletter">
            <Button
              size="lg"
              className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white"
            >
              Notify Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-xl p-6">
          <DialogHeader>
            <DialogTitle>Course Registration</DialogTitle>
          </DialogHeader>

          <form className="space-y-4">
            {/* Name */}
            <div className="space-y-1">
              <Label>Name</Label>
              <Input placeholder="Enter your name" />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email" />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <Label>Phone Number</Label>
              <Input type="tel" placeholder="Enter your phone number" />
            </div>

            {/* Course Select */}
            <div className="space-y-1">
              <Label>Select Course</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner Level</SelectItem>
                  <SelectItem value="intermediate">
                    Intermediate Level
                  </SelectItem>
                  <SelectItem value="pro">Pro Level</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Payment Option */}
            <div className="space-y-1">
              <Label>Payment Option</Label>

              <Select onValueChange={(value) => setPaymentMethod(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="deod-usdt">Deod / USDT</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {paymentMethod === "deod-usdt" && (
              <div className="mt-4 border border-dashed border-indigo-500 rounded-xl p-4 bg-indigo-50 dark:bg-indigo-950/30">
                <p className="text-sm text-muted-foreground mb-2">
                  🎁 You received a coupon code
                </p>

                <div className="flex items-center justify-between bg-white dark:bg-card border rounded-lg px-4 py-3">
                  <span className="text-lg font-bold tracking-widest text-indigo-600">
                    DEOD50
                  </span>

                  <Badge className="bg-indigo-600 text-white">50% OFF</Badge>
                </div>

                <div className="flex gap-3 mt-4">
                  <Button
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
                    onClick={() => alert("Coupon redeemed!")}
                  >
                    Redeem Now
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => alert("You can redeem later")}
                  >
                    Redeem Later
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-2">
                  You can use this coupon now or later during payment.
                </p>
              </div>
            )}

            {/* Submit */}
            <Button className="w-full bg-[#1e3a8a] text-white mt-4">
              Register Now
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={enrollOpen} onOpenChange={setEnrollOpen}>
        <DialogContent className="max-w-lg p-6">
          {!selectedPlan ? (
            <div className="text-center text-muted-foreground">
              Loading plan...
            </div>
          ) : (
            <div>
              <div className="flex justify-between mb-5">
                <div>
                  <h2 className="text-2xl font-bold">{selectedPlan.title}</h2>
                  <p className="text-indigo-600 capitalize">
                    {selectedPlan.level} level
                  </p>
                </div>

                <Button variant="outline" size="sm" onClick={connectMetaMask}>
                  {walletAddress
                    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                    : "Connect Wallet"}
                </Button>
              </div>

              <div className="flex items-end gap-3 mb-6">
                <span className="line-through text-muted-foreground">
                  ${selectedPlan.originalPrice}
                </span>
                <span className="text-4xl font-bold">
                  ${selectedPlan.discountedPrice}
                </span>
              </div>

              <Badge className="mb-4">
                Best for: {selectedPlan.bestFor.join(", ")}
              </Badge>

              <Button
                className="w-full bg-[#1e3a8a] text-white"
                disabled={couponLoading}
                onClick={createCoupon}
              >
                {couponLoading ? "Generating Coupon..." : "Continue to Payment"}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={couponOpen} onOpenChange={setCouponOpen}>
        <DialogContent className="max-w-md p-6">
          {/* {activeCouponMessage && (
      <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 
          border border-amber-400 rounded-lg px-4 py-3 text-sm">
        <CheckCircle2 className="h-4 w-4 text-amber-500" />
        <span>{activeCouponMessage}</span>
      </div>
    )} */}
{couponError && !couponData && (
  <div className="bg-red-50 border border-red-400 rounded-lg px-4 py-3 text-sm text-red-600">
    {couponError}
  </div>
)}
          {couponData ? (
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-bold">
                {isExistingCoupon
                  ? "Active Coupon Found 🎟️"
                  : "🎉 Coupon Generated"}
              </h2>
              {isExistingCoupon && (
                <div
                  className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 
      border border-green-400 rounded-lg px-4 py-3 text-sm text-green-700 dark:text-green-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>
                    Your coupon is already active. Please redeem it below.
                  </span>
                </div>
              )}
              <p className="text-muted-foreground">
                Use this coupon during payment
              </p>

              <div
                className="flex items-center justify-between gap-3
          border border-dashed border-indigo-600 rounded-xl
          px-4 py-3 bg-indigo-50 dark:bg-indigo-950/30"
              >
                <span className="text-xl font-bold tracking-widest text-indigo-600">
                  {couponData.code}
                </span>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigator.clipboard.writeText(couponData.code)}
                >
                  <Copy className="h-5 w-5" />
                </Button>
              </div>

              <div className="text-sm text-muted-foreground space-y-1">
                <p>Amount: ${couponData.usdAmount}</p>
                <p>Wallet: {couponData.senderWalletAddress.slice(0, 6)}…</p>
              </div>

              <a
                href={`${CLAIM_URL}/coupon?coupon=${couponData.code}&token=${couponData.redemptionToken}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-[#1e3a8a] text-white">
                  {isExistingCoupon
                    ? "Redeem Active Coupon"
                    : "Claim & Continue Payment"}
                </Button>
              </a>
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              No coupon available
            </p>
          )}

          {couponError && (
            <p className="text-sm text-red-500 text-center mt-2">
              {couponError}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

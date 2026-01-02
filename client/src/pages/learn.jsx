import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, BookOpen, Brain, Code, Bot, Zap, Clock, Users, Star, ArrowRight, Play, CheckCircle2, Layers, } from "lucide-react";
/* =======================
    DATA
======================= */
var learningPaths = [
    {
        title: "AI Fundamentals",
        description: "Start your AI journey with core concepts and terminology.",
        level: "Beginner",
        duration: "4 weeks",
        lessons: 24,
        students: "12,500+",
        icon: Brain,
        topics: ["Introduction to AI", "Machine Learning Basics", "Neural Networks", "AI Ethics"],
    },
    {
        title: "Machine Learning Mastery",
        description: "Deep dive into ML algorithms and practical applications.",
        level: "Intermediate",
        duration: "8 weeks",
        lessons: 48,
        students: "8,200+",
        icon: Layers,
        topics: ["Supervised Learning", "Unsupervised Learning", "Model Training", "Feature Engineering"],
    },
    {
        title: "Large Language Models",
        description: "Understand and work with LLMs like GPT, Claude, and more.",
        level: "Intermediate",
        duration: "6 weeks",
        lessons: 36,
        students: "6,800+",
        icon: BookOpen,
        topics: ["Transformer Architecture", "Prompt Engineering", "Fine-tuning", "RAG Systems"],
    },
    {
        title: "AI Agents & Automation",
        description: "Build intelligent agents that can reason and take actions.",
        level: "Advanced",
        duration: "8 weeks",
        lessons: 42,
        students: "4,500+",
        icon: Bot,
        topics: ["Agent Frameworks", "Tool Use", "Multi-Agent Systems", "Production Deployment"],
    },
    {
        title: "AI Application Development",
        description: "Create production-ready AI applications from scratch.",
        level: "Advanced",
        duration: "10 weeks",
        lessons: 56,
        students: "3,200+",
        icon: Code,
        topics: ["API Integration", "Backend Architecture", "Frontend Development", "Scaling & Optimization"],
    },
    {
        title: "AI Business & Monetization",
        description: "Turn your AI skills into a profitable business.",
        level: "All Levels",
        duration: "4 weeks",
        lessons: 20,
        students: "5,100+",
        icon: Zap,
        topics: ["Market Research", "Product Strategy", "Pricing Models", "Marketing & Sales"],
    },
];
var featuredCourses = [
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
function getLevelColor(level) {
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
    return (<div className="min-h-screen bg-background text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Themed Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-teal-50 dark:from-[#1e3a8a]/10 dark:via-background dark:to-teal-900/10"/>

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <Badge className="mb-6 bg-[#1e3a8a]/10 text-[#1e3a8a] dark:text-blue-300 border-[#1e3a8a]/20">
            <GraduationCap className="w-3 h-3 mr-1"/>
            AI Education
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learn AI Skills That{" "}
            <span className="bg-gradient-to-r from-[#1e3a8a] to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
              Actually Matter
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10">
            From beginner fundamentals to advanced AI engineering. Master the skills
            that will define the future of technology with structured learning paths
            and hands-on projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white">
              Start Learning Free
              <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
            <Button size="lg" variant="outline" className="border-border">
              View All Paths
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground">
            {[
            "Free to start",
            "Project-based learning",
            "Certificate on completion",
        ].map(function (item, i) { return (<span key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400"/>
                {item}
              </span>); })}
          </div>
        </div>
      </section>

      {/* ================= LEARNING PATHS ================= */}
      <section className="py-28 bg-background">
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
            {learningPaths.map(function (path, index) { return (<Card key={index} className="bg-card border-border hover:shadow-md dark:hover:shadow-[#1e3a8a]/10 transition">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                      <path.icon className="h-6 w-6 text-[#1e3a8a] dark:text-blue-400"/>
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
                    {path.topics.slice(0, 3).map(function (topic, i) { return (<Badge key={i} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                        {topic}
                      </Badge>); })}
                    {path.topics.length > 3 && (<Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                        +{path.topics.length - 3} more
                      </Badge>)}
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground border-t border-border pt-3">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4"/>
                      {path.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4"/>
                      {path.lessons} lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4"/>
                      {path.students}
                    </span>
                  </div>

                  <Button variant="outline" className="w-full hover:bg-[#1e3a8a]/10 hover:text-[#1e3a8a] border-border">
                    Start Path
                    <ArrowRight className="ml-2 h-4 w-4"/>
                  </Button>
                </CardContent>
              </Card>); })}
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
              <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map(function (course, index) { return (<Card key={index} className="bg-card border-border hover:shadow-md transition overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#1e3a8a]/20 to-teal-500/20 flex items-center justify-center">
                  <Play className="h-10 w-10 text-[#1e3a8a] dark:text-blue-400"/>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <span className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500"/>
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

                  {course.progress > 0 && (<Progress value={course.progress} className="h-1.5 bg-muted"/>)}

                  <Button className="w-full" variant={course.progress > 0 ? "default" : "outline"} style={course.progress > 0 ? { backgroundColor: '#1e3a8a' } : {}}>
                    {course.progress > 0 ? "Continue Learning" : "Start Course"}
                  </Button>
                </CardContent>
              </Card>); })}
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
            <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white">
              Notify Me
              <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
          </Link>
        </div>
      </section>

    </div>);
}

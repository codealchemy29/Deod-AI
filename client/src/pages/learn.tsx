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

const learningPaths = [
  {
    title: "AI Fundamentals",
    description: "Start your AI journey with core concepts and terminology.",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 24,
    students: "12,500+",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-orange-500 to-amber-500",
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
    color: "from-green-500 to-emerald-500",
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
    color: "from-indigo-500 to-violet-500",
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
    color: "from-pink-500 to-rose-500",
    topics: ["Market Research", "Product Strategy", "Pricing Models", "Marketing & Sales"],
  },
];

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

export default function Learn() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4" data-testid="badge-learn-hero">
              <GraduationCap className="w-3 h-3 mr-1" />
              AI Education
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-learn-title">
              Learn AI Skills That{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Actually Matter
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-learn-subtitle">
              From beginner fundamentals to advanced AI engineering. Master the skills 
              that will define the future of technology with structured learning paths 
              and hands-on projects.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0" data-testid="button-start-learning">
                Start Learning Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-view-paths">
                View All Paths
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mt-8 text-muted-foreground text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Free to start
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Project-based learning
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Certificate on completion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-paths-title">
              Structured Learning Paths
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your path and progress from fundamentals to advanced topics with our curated curriculum.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className="group hover-elevate border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden" data-testid={`card-path-${index}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${path.color} flex items-center justify-center`}>
                      <path.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge className={getLevelColor(path.level)}>{path.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{path.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{path.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {path.topics.slice(0, 3).map((topic, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {path.topics.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{path.topics.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border/50">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {path.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5" />
                      {path.lessons} lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {path.students}
                    </span>
                  </div>
                  
                  <Button className="w-full" variant="outline" data-testid={`button-start-path-${index}`}>
                    Start Path
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-featured-title">
                Featured Courses
              </h2>
              <p className="text-muted-foreground">
                Hand-picked courses from top AI instructors.
              </p>
            </div>
            <Button variant="outline" data-testid="button-view-all-courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="group hover-elevate border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden" data-testid={`card-course-${index}`}>
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                    <span className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      {course.rating}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  
                  <p className="text-muted-foreground text-sm">By {course.instructor}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {course.students.toLocaleString()} students
                    </span>
                  </div>
                  
                  {course.progress > 0 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-1.5" />
                    </div>
                  )}
                  
                  <Button className="w-full" variant={course.progress > 0 ? "default" : "outline"} data-testid={`button-course-${index}`}>
                    {course.progress > 0 ? "Continue Learning" : "Start Course"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4" data-testid="badge-coming-soon">
            Coming Soon
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-coming-title">
            Interactive Labs & Certifications
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We're building interactive coding labs, AI sandbox environments, and 
            industry-recognized certifications. Be the first to know when they launch.
          </p>
          <Link href="/newsletter">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0" data-testid="button-notify-me">
              Notify Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

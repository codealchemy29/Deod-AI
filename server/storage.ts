import { 
  type User, 
  type InsertUser,
  type AiTool,
  type InsertAiTool,
  type Course,
  type InsertCourse,
  type NewsArticle,
  type InsertNewsArticle,
  type NewsletterSubscription,
  type InsertNewsletterSubscription,
  type MarketplaceProduct,
  type InsertMarketplaceProduct,
  type ToolSubmission,
  type InsertToolSubmission,
} from "@shared/schema";
import crypto from "crypto";
const randomUUID = () => crypto.randomUUID();

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // AI Tools
  getAiTools(): Promise<AiTool[]>;
  getAiToolById(id: string): Promise<AiTool | undefined>;
  getAiToolsByCategory(category: string): Promise<AiTool[]>;
  createAiTool(tool: InsertAiTool): Promise<AiTool>;
  
  // Courses
  getCourses(): Promise<Course[]>;
  getCourseById(id: string): Promise<Course | undefined>;
  getCoursesByLevel(level: string): Promise<Course[]>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  // News Articles
  getNewsArticles(): Promise<NewsArticle[]>;
  getNewsArticleById(id: string): Promise<NewsArticle | undefined>;
  getNewsArticlesByCategory(category: string): Promise<NewsArticle[]>;
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
  
  // Newsletter Subscriptions
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined>;
  
  // Marketplace Products
  getMarketplaceProducts(): Promise<MarketplaceProduct[]>;
  getMarketplaceProductById(id: string): Promise<MarketplaceProduct | undefined>;
  getMarketplaceProductsByCategory(category: string): Promise<MarketplaceProduct[]>;
  createMarketplaceProduct(product: InsertMarketplaceProduct): Promise<MarketplaceProduct>;
  
  // Tool Submissions
  getToolSubmissions(): Promise<ToolSubmission[]>;
  getToolSubmissionById(id: string): Promise<ToolSubmission | undefined>;
  createToolSubmission(submission: InsertToolSubmission): Promise<ToolSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private aiTools: Map<string, AiTool>;
  private courses: Map<string, Course>;
  private newsArticles: Map<string, NewsArticle>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;
  private marketplaceProducts: Map<string, MarketplaceProduct>;
  private toolSubmissions: Map<string, ToolSubmission>;

  constructor() {
    this.users = new Map();
    this.aiTools = new Map();
    this.courses = new Map();
    this.newsArticles = new Map();
    this.newsletterSubscriptions = new Map();
    this.marketplaceProducts = new Map();
    this.toolSubmissions = new Map();
    
    this.seedData();
  }

  private seedData() {
    // Seed AI Tools
    const toolsData: InsertAiTool[] = [
  { name: "Whispr FlowAI", description: "Tool for automating workflows — converts voice/text inputs into tasks, summaries, and action items for teams.", category: "automation", useCase: "Workflow Automation", pricing: "TBD", creatorName: "Whispr", verified: true },
  { name: "Gemini", description: "Google’s AI for content creation, coding help, image generation, chat, and research.", category: "multi", useCase: "Content, Coding, Image Generation, Research", pricing: "TBD", creatorName: "Google", verified: true },
  { name: "EmilyAI", description: "Assistant focused on email drafting, inbox management, scheduling, and communication automation.", category: "productivity", useCase: "Email Management, Scheduling", pricing: "TBD", creatorName: "EmilyAI", verified: true },
  { name: "FirefliesAI", description: "Meeting assistant — records, transcribes, summarizes, and analyzes meetings automatically.", category: "productivity", useCase: "Meeting Transcription, Analysis", pricing: "TBD", creatorName: "Fireflies", verified: true },
  { name: "ChatGPT", description: "General-purpose AI for chat, coding, research, content, automation, data analysis, etc.", category: "text", useCase: "Conversation, Coding, Research, Content, Automation", pricing: "TBD", creatorName: "OpenAI", verified: true },
  { name: "Claude", description: "Anthropic’s AI known for long-context tasks, analysis, writing, and safe enterprise workflows.", category: "text", useCase: "Analysis, Writing, Enterprise Workflows", pricing: "TBD", creatorName: "Anthropic", verified: true },
  { name: "Phot AI", description: "AI design tool for photo editing, background removal, retouching, and AI-generated images.", category: "image", useCase: "Photo Editing, Image Generation", pricing: "TBD", creatorName: "Phot AI", verified: true },
  { name: "SupergrowAI", description: "Tool for creating social media content, captions, and growth-focused marketing posts.", category: "marketing", useCase: "Social Media Content, Marketing", pricing: "TBD", creatorName: "Supergrow", verified: true },
  { name: "Numerous AI", description: "Spreadsheet AI — automates Excel/Sheets tasks, formulas, cleaning, insights, and AI functions.", category: "productivity", useCase: "Spreadsheet Automation, Data Analysis", pricing: "TBD", creatorName: "Numerous", verified: true },
  { name: "SunoAI", description: "Music generator — creates songs, vocals, background tracks instantly from text prompts.", category: "audio", useCase: "Music Generation", pricing: "TBD", creatorName: "Suno", verified: true },
  { name: "Notebook LM", description: "Google AI for research and study, summarizes documents, PDFs, notes, and creates study guides.", category: "education", useCase: "Document Summarization, Study Guides", pricing: "TBD", creatorName: "Google", verified: true },
  { name: "Social SonicAI", description: "AI for social media automation, scheduling, content creation, and engagement optimization.", category: "marketing", useCase: "Social Media Automation, Content Creation", pricing: "TBD", creatorName: "Social Sonic", verified: true },
  { name: "BoltAI", description: "Website builder — creates full websites, HTML/CSS/JS code from simple prompts.", category: "web", useCase: "Website Generation, Code Generation", pricing: "TBD", creatorName: "Bolt", verified: true },
  { name: "VapiAI", description: "Voice agent platform for creating AI calling bots, customer support, and sales automation with voice.", category: "voice", useCase: "AI Calling Bots, Customer Support", pricing: "TBD", creatorName: "Vapi", verified: true },
  { name: "ChronicleAI", description: "Storytelling and documentation tool — helps create timelines, narratives, and structured stories.", category: "productivity", useCase: "Storytelling, Documentation", pricing: "TBD", creatorName: "Chronicle", verified: true },
  { name: "Humanic AI", description: "HR automation tool using AI for candidate screening, onboarding flows, and employee insights.", category: "hr", useCase: "HR Automation, Employee Insights", pricing: "TBD", creatorName: "Humanic", verified: true },
  { name: "HappenstanceAI", description: "For career discovery — analyzes personality, skills, and recommends career paths.", category: "career", useCase: "Career Guidance, Skill Analysis", pricing: "TBD", creatorName: "Happenstance", verified: true },
  { name: "Perplexity Comet", description: "AI designed for deep research — provides verified answers with citations and advanced retrieval.", category: "research", useCase: "Research, Verification, Retrieval", pricing: "TBD", creatorName: "Perplexity", verified: true },
];

    
    toolsData.forEach(tool => {
      const id = randomUUID();
      this.aiTools.set(id, { ...tool, id, verified: tool.verified ?? false, imageUrl: tool.imageUrl ?? null, websiteUrl: tool.websiteUrl ?? null });
    });
    
    // Seed Courses
    const coursesData: InsertCourse[] = [
      { title: "AI Fundamentals", description: "Start your AI journey with core concepts and terminology.", level: "Beginner", category: "fundamentals", duration: "4 weeks", lessons: 24 },
      { title: "Machine Learning Mastery", description: "Deep dive into ML algorithms and practical applications.", level: "Intermediate", category: "machine-learning", duration: "8 weeks", lessons: 48 },
      { title: "Large Language Models", description: "Understand and work with LLMs like GPT, Claude, and more.", level: "Intermediate", category: "llm", duration: "6 weeks", lessons: 36 },
      { title: "AI Agents & Automation", description: "Build intelligent agents that can reason and take actions.", level: "Advanced", category: "agents", duration: "8 weeks", lessons: 42 },
      { title: "AI Application Development", description: "Create production-ready AI applications from scratch.", level: "Advanced", category: "development", duration: "10 weeks", lessons: 56 },
      { title: "AI Business & Monetization", description: "Turn your AI skills into a profitable business.", level: "All Levels", category: "business", duration: "4 weeks", lessons: 20 },
    ];
    
    coursesData.forEach(course => {
      const id = randomUUID();
      this.courses.set(id, { ...course, id, imageUrl: course.imageUrl ?? null });
    });
    
    // Seed News Articles
    const newsData: InsertNewsArticle[] = [
      { title: "GPT-5 Rumors: What We Know About OpenAI's Next Frontier Model", excerpt: "Industry insiders are buzzing with speculation about OpenAI's next-generation model.", content: "Full article content here...", category: "Industry", author: "Sarah Chen", publishedAt: "December 15, 2024" },
      { title: "Google Gemini 2.0: A Deep Dive Into Multimodal Reasoning", excerpt: "Google's latest AI model brings unprecedented multimodal capabilities.", content: "Full article content here...", category: "Research", author: "Mike Johnson", publishedAt: "December 14, 2024" },
      { title: "10 AI Startups That Raised $100M+ in 2024", excerpt: "From AI agents to enterprise automation, these startups are reshaping the landscape.", content: "Full article content here...", category: "Startups", author: "Emily Davis", publishedAt: "December 13, 2024" },
      { title: "Anthropic Releases Claude 3.5: Faster, Smarter, Safer", excerpt: "Claude's latest update brings significant improvements in speed and reasoning.", content: "Full article content here...", category: "Tool Launches", author: "James Wilson", publishedAt: "December 12, 2024" },
      { title: "How to Build a RAG System from Scratch", excerpt: "A comprehensive guide to building Retrieval-Augmented Generation systems.", content: "Full article content here...", category: "Tutorials", author: "Alex Kumar", publishedAt: "December 11, 2024" },
      { title: "The Rise of AI Agents: Why 2025 Will Be the Year of Autonomous AI", excerpt: "Industry experts predict a major shift towards AI agents.", content: "Full article content here...", category: "Industry", author: "Sarah Chen", publishedAt: "December 10, 2024" },
    ];
    
    newsData.forEach(article => {
      const id = randomUUID();
      this.newsArticles.set(id, { ...article, id, imageUrl: article.imageUrl ?? null });
    });
    
    // Seed Marketplace Products
    const productsData: InsertMarketplaceProduct[] = [
      { name: "Ultimate ChatGPT Prompt Pack", description: "500+ expertly crafted prompts for productivity, writing, coding, and more.", price: 29, category: "prompts", creatorName: "Sarah Chen", rating: 49, reviewCount: 245 },
      { name: "AI Content Writer Pro", description: "A powerful content generation tool with SEO optimization built-in.", price: 49, category: "tools", creatorName: "Mike Johnson", rating: 48, reviewCount: 189 },
      { name: "Customer Support Agent", description: "Autonomous AI agent that handles customer inquiries 24/7.", price: 99, category: "agents", creatorName: "Emily Davis", rating: 47, reviewCount: 156 },
      { name: "Midjourney Prompt Templates", description: "100+ tested prompts for stunning AI art generation.", price: 19, category: "prompts", creatorName: "Alex Kumar", rating: 49, reviewCount: 312 },
      { name: "AI Landing Page Builder", description: "Generate beautiful landing pages with AI in minutes.", price: 79, category: "tools", creatorName: "James Wilson", rating: 46, reviewCount: 98 },
      { name: "Research Assistant Agent", description: "AI agent that searches, summarizes, and synthesizes research.", price: 59, category: "agents", creatorName: "Lisa Park", rating: 48, reviewCount: 178 },
      { name: "SaaS Dashboard Template", description: "Complete React dashboard template with AI features built-in.", price: 149, category: "templates", creatorName: "David Brown", rating: 47, reviewCount: 67 },
      { name: "OpenAI API Wrapper", description: "Production-ready API wrapper with rate limiting and caching.", price: 39, category: "code", creatorName: "Chris Lee", rating: 49, reviewCount: 134 },
    ];
    
    productsData.forEach(product => {
      const id = randomUUID();
      this.marketplaceProducts.set(id, { ...product, id, rating: product.rating ?? 0, reviewCount: product.reviewCount ?? 0, imageUrl: product.imageUrl ?? null });
    });
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // AI Tools
  async getAiTools(): Promise<AiTool[]> {
    return Array.from(this.aiTools.values());
  }

  async getAiToolById(id: string): Promise<AiTool | undefined> {
    return this.aiTools.get(id);
  }

  async getAiToolsByCategory(category: string): Promise<AiTool[]> {
    return Array.from(this.aiTools.values()).filter(
      (tool) => tool.category === category
    );
  }

  async createAiTool(insertTool: InsertAiTool): Promise<AiTool> {
    const id = randomUUID();
    const tool: AiTool = { 
      ...insertTool, 
      id, 
      verified: insertTool.verified ?? false,
      imageUrl: insertTool.imageUrl ?? null,
      websiteUrl: insertTool.websiteUrl ?? null
    };
    this.aiTools.set(id, tool);
    return tool;
  }

  // Courses
  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourseById(id: string): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async getCoursesByLevel(level: string): Promise<Course[]> {
    return Array.from(this.courses.values()).filter(
      (course) => course.level === level
    );
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = randomUUID();
    const course: Course = { 
      ...insertCourse, 
      id,
      imageUrl: insertCourse.imageUrl ?? null
    };
    this.courses.set(id, course);
    return course;
  }

  // News Articles
  async getNewsArticles(): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values());
  }

  async getNewsArticleById(id: string): Promise<NewsArticle | undefined> {
    return this.newsArticles.get(id);
  }

  async getNewsArticlesByCategory(category: string): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values()).filter(
      (article) => article.category === category
    );
  }

  async createNewsArticle(insertArticle: InsertNewsArticle): Promise<NewsArticle> {
    const id = randomUUID();
    const article: NewsArticle = { 
      ...insertArticle, 
      id,
      imageUrl: insertArticle.imageUrl ?? null
    };
    this.newsArticles.set(id, article);
    return article;
  }

  // Newsletter Subscriptions
  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }

  async getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined> {
    return Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === email
    );
  }

  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = randomUUID();
    const subscription: NewsletterSubscription = { 
      ...insertSubscription, 
      id,
      subscribedAt: new Date().toISOString()
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  // Marketplace Products
  async getMarketplaceProducts(): Promise<MarketplaceProduct[]> {
    return Array.from(this.marketplaceProducts.values());
  }

  async getMarketplaceProductById(id: string): Promise<MarketplaceProduct | undefined> {
    return this.marketplaceProducts.get(id);
  }

  async getMarketplaceProductsByCategory(category: string): Promise<MarketplaceProduct[]> {
    return Array.from(this.marketplaceProducts.values()).filter(
      (product) => product.category === category
    );
  }

  async createMarketplaceProduct(insertProduct: InsertMarketplaceProduct): Promise<MarketplaceProduct> {
    const id = randomUUID();
    const product: MarketplaceProduct = { 
      ...insertProduct, 
      id,
      rating: insertProduct.rating ?? 0,
      reviewCount: insertProduct.reviewCount ?? 0,
      imageUrl: insertProduct.imageUrl ?? null
    };
    this.marketplaceProducts.set(id, product);
    return product;
  }

  // Tool Submissions
  async getToolSubmissions(): Promise<ToolSubmission[]> {
    return Array.from(this.toolSubmissions.values());
  }

  async getToolSubmissionById(id: string): Promise<ToolSubmission | undefined> {
    return this.toolSubmissions.get(id);
  }

  async createToolSubmission(insertSubmission: InsertToolSubmission): Promise<ToolSubmission> {
    const id = randomUUID();
    const submission: ToolSubmission = { 
      ...insertSubmission, 
      id,
      status: "pending",
      submittedAt: new Date().toISOString()
    };
    this.toolSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();

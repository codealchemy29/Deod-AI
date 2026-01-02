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
} from "../shared/schema.js";
import crypto from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAiTools(): Promise<AiTool[]>;
  getAiToolById(id: string): Promise<AiTool | undefined>;
  getAiToolsByCategory(category: string): Promise<AiTool[]>;
  createAiTool(tool: InsertAiTool): Promise<AiTool>;
  getCourses(): Promise<Course[]>;
  getCourseById(id: string): Promise<Course | undefined>;
  getCoursesByLevel(level: string): Promise<Course[]>;
  createCourse(course: InsertCourse): Promise<Course>;
  getNewsArticles(): Promise<NewsArticle[]>;
  getNewsArticleById(id: string): Promise<NewsArticle | undefined>;
  getNewsArticlesByCategory(category: string): Promise<NewsArticle[]>;
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined>;
  getMarketplaceProducts(): Promise<MarketplaceProduct[]>;
  getMarketplaceProductById(id: string): Promise<MarketplaceProduct | undefined>;
  getMarketplaceProductsByCategory(category: string): Promise<MarketplaceProduct[]>;
  createMarketplaceProduct(product: InsertMarketplaceProduct): Promise<MarketplaceProduct>;
  getToolSubmissions(): Promise<ToolSubmission[]>;
  getToolSubmissionById(id: string): Promise<ToolSubmission | undefined>;
  createToolSubmission(submission: InsertToolSubmission): Promise<ToolSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private aiTools: Map<string, AiTool> = new Map();
  private courses: Map<string, Course> = new Map();
  private newsArticles: Map<string, NewsArticle> = new Map();
  private newsletterSubscriptions: Map<string, NewsletterSubscription> = new Map();
  private marketplaceProducts: Map<string, MarketplaceProduct> = new Map();
  private toolSubmissions: Map<string, ToolSubmission> = new Map();

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Basic seed for AI Tools to ensure the app isn't empty
    const toolsData: InsertAiTool[] = [
      { name: "ChatGPT", description: "General AI", category: "text", useCase: "Chat", pricing: "Freemium", creatorName: "OpenAI", verified: true },
    ];
    toolsData.forEach(t => this.createAiTool(t));
  }

  // Users
  async getUser(id: string) { return this.users.get(id); }
  async getUserByUsername(username: string) { 
    return Array.from(this.users.values()).find(u => u.username === username); 
  }
  async createUser(user: InsertUser) {
    const id = crypto.randomUUID();
    const newUser = { ...user, id };
    this.users.set(id, newUser);
    return newUser;
  }

  // AI Tools
  async getAiTools() { return Array.from(this.aiTools.values()); }
  async getAiToolById(id: string) { return this.aiTools.get(id); }
  async getAiToolsByCategory(cat: string) { 
    return Array.from(this.aiTools.values()).filter(t => t.category === cat); 
  }
  async createAiTool(tool: InsertAiTool) {
    const id = crypto.randomUUID();
    const newTool = { ...tool, id, verified: tool.verified ?? false, imageUrl: tool.imageUrl ?? null, websiteUrl: tool.websiteUrl ?? null };
    this.aiTools.set(id, newTool);
    return newTool;
  }

  // Courses
  async getCourses() { return Array.from(this.courses.values()); }
  async getCourseById(id: string) { return this.courses.get(id); }
  async getCoursesByLevel(lvl: string) { 
    return Array.from(this.courses.values()).filter(c => c.level === lvl); 
  }
  async createCourse(course: InsertCourse) {
    const id = crypto.randomUUID();
    const newCourse = { ...course, id, imageUrl: course.imageUrl ?? null };
    this.courses.set(id, newCourse);
    return newCourse;
  }

  // News
  async getNewsArticles() { return Array.from(this.newsArticles.values()); }
  async getNewsArticleById(id: string) { return this.newsArticles.get(id); }
  async getNewsArticlesByCategory(cat: string) { 
    return Array.from(this.newsArticles.values()).filter(a => a.category === cat); 
  }
  async createNewsArticle(art: InsertNewsArticle) {
    const id = crypto.randomUUID();
    const newArt = { ...art, id, imageUrl: art.imageUrl ?? null };
    this.newsArticles.set(id, newArt);
    return newArt;
  }

  // Newsletter
  async getNewsletterSubscriptions() { return Array.from(this.newsletterSubscriptions.values()); }
  async getNewsletterSubscriptionByEmail(email: string) { 
    return Array.from(this.newsletterSubscriptions.values()).find(s => s.email === email); 
  }
  async createNewsletterSubscription(sub: InsertNewsletterSubscription) {
    const id = crypto.randomUUID();
    const newSub = { ...sub, id, subscribedAt: new Date().toISOString() };
    this.newsletterSubscriptions.set(id, newSub);
    return newSub;
  }

  // Marketplace
  async getMarketplaceProducts() { return Array.from(this.marketplaceProducts.values()); }
  async getMarketplaceProductById(id: string) { return this.marketplaceProducts.get(id); }
  async getMarketplaceProductsByCategory(cat: string) { 
    return Array.from(this.marketplaceProducts.values()).filter(p => p.category === cat); 
  }
  async createMarketplaceProduct(prod: InsertMarketplaceProduct) {
    const id = crypto.randomUUID();
    const newProd = { ...prod, id, rating: prod.rating ?? 0, reviewCount: prod.reviewCount ?? 0, imageUrl: prod.imageUrl ?? null };
    this.marketplaceProducts.set(id, newProd);
    return newProd;
  }

  // Submissions
  async getToolSubmissions() { return Array.from(this.toolSubmissions.values()); }
  async getToolSubmissionById(id: string) { return this.toolSubmissions.get(id); }
  async createToolSubmission(sub: InsertToolSubmission) {
    const id = crypto.randomUUID();
    const newSub = { ...sub, id, status: "pending", submittedAt: new Date().toISOString() };
    this.toolSubmissions.set(id, newSub);
    return newSub;
  }
}

export const storage = new MemStorage();
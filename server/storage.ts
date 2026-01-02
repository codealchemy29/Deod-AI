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
} from "@shared/schema.js"; // Note: Added .js for Vercel compatibility
import crypto from "crypto";

export interface IStorage {
  // ... (Your interface definitions remain the same)
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
      { name: "Whispr FlowAI", description: "Tool for automating workflows...", category: "automation", useCase: "Workflow Automation", pricing: "TBD", creatorName: "Whispr", verified: true },
      // ... rest of your seed data
    ];

    toolsData.forEach(tool => {
      const id = crypto.randomUUID(); // Correct usage inside function
      this.aiTools.set(id, { ...tool, id, verified: tool.verified ?? false, imageUrl: tool.imageUrl ?? null, websiteUrl: tool.websiteUrl ?? null });
    });
    
    // Seed Courses, News, etc. using crypto.randomUUID() inside the forEach
  }

  // Example of corrected method
  async createUser(insertUser: InsertUser): Promise<User> {
    const id = crypto.randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // ... (Repeat the crypto.randomUUID() fix for all create methods)
}

export const storage = new MemStorage();
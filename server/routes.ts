import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import { insertAiToolSchema, insertToolSubmissionSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // AI Tools endpoints
  app.get("/api/tools", async (req, res) => {
    try {
      const { category } = req.query;
      let tools;
      if (category && typeof category === "string") {
        tools = await storage.getAiToolsByCategory(category);
      } else {
        tools = await storage.getAiTools();
      }
      res.json(tools);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch tools" });
    }
  });

  app.get("/api/tools/:id", async (req, res) => {
    try {
      const tool = await storage.getAiToolById(req.params.id);
      if (!tool) {
        return res.status(404).json({ error: "Tool not found" });
      }
      res.json(tool);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch tool" });
    }
  });

  app.post("/api/tools", async (req, res) => {
    try {
      const validatedData = insertAiToolSchema.parse(req.body);
      const tool = await storage.createAiTool(validatedData);
      res.status(201).json(tool);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create tool" });
    }
  });

  // Courses endpoints
  app.get("/api/courses", async (req, res) => {
    try {
      const { level } = req.query;
      let courses;
      if (level && typeof level === "string") {
        courses = await storage.getCoursesByLevel(level);
      } else {
        courses = await storage.getCourses();
      }
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    try {
      const course = await storage.getCourseById(req.params.id);
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch course" });
    }
  });

  // News Articles endpoints
  app.get("/api/news", async (req, res) => {
    try {
      const { category } = req.query;
      let articles;
      if (category && typeof category === "string") {
        articles = await storage.getNewsArticlesByCategory(category);
      } else {
        articles = await storage.getNewsArticles();
      }
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch news articles" });
    }
  });

  app.get("/api/news/:id", async (req, res) => {
    try {
      const article = await storage.getNewsArticleById(req.params.id);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch article" });
    }
  });

  // Newsletter Subscription endpoints
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      if (existing) {
        return res.status(400).json({ error: "Email already subscribed" });
      }
      
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.status(201).json(subscription);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid email", details: error.errors });
      }
      res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  // Marketplace Products endpoints
  app.get("/api/marketplace", async (req, res) => {
    try {
      const { category } = req.query;
      let products;
      if (category && typeof category === "string") {
        products = await storage.getMarketplaceProductsByCategory(category);
      } else {
        products = await storage.getMarketplaceProducts();
      }
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/marketplace/:id", async (req, res) => {
    try {
      const product = await storage.getMarketplaceProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  // Tool Submissions endpoints
  app.get("/api/submissions", async (req, res) => {
    try {
      const submissions = await storage.getToolSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  app.post("/api/submissions", async (req, res) => {
    try {
      const validatedData = insertToolSubmissionSchema.parse(req.body);
      const submission = await storage.createToolSubmission(validatedData);
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create submission" });
    }
  });

  return httpServer;
}

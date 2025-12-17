import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// AI Tools
export const aiTools = pgTable("ai_tools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  useCase: text("use_case").notNull(),
  pricing: text("pricing").notNull(),
  creatorName: text("creator_name").notNull(),
  verified: boolean("verified").default(false),
  imageUrl: text("image_url"),
  websiteUrl: text("website_url"),
});

export const insertAiToolSchema = createInsertSchema(aiTools).omit({ id: true });
export type InsertAiTool = z.infer<typeof insertAiToolSchema>;
export type AiTool = typeof aiTools.$inferSelect;

// Courses
export const courses = pgTable("courses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  level: text("level").notNull(),
  category: text("category").notNull(),
  duration: text("duration").notNull(),
  lessons: integer("lessons").notNull(),
  imageUrl: text("image_url"),
});

export const insertCourseSchema = createInsertSchema(courses).omit({ id: true });
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Course = typeof courses.$inferSelect;

// News Articles
export const newsArticles = pgTable("news_articles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  author: text("author").notNull(),
  publishedAt: text("published_at").notNull(),
  imageUrl: text("image_url"),
});

export const insertNewsArticleSchema = createInsertSchema(newsArticles).omit({ id: true });
export type InsertNewsArticle = z.infer<typeof insertNewsArticleSchema>;
export type NewsArticle = typeof newsArticles.$inferSelect;

// Newsletter Subscriptions
export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  subscribedAt: text("subscribed_at").notNull(),
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).omit({ id: true, subscribedAt: true });
export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;

// Marketplace Products
export const marketplaceProducts = pgTable("marketplace_products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  category: text("category").notNull(),
  creatorName: text("creator_name").notNull(),
  rating: integer("rating").default(0),
  reviewCount: integer("review_count").default(0),
  imageUrl: text("image_url"),
});

export const insertMarketplaceProductSchema = createInsertSchema(marketplaceProducts).omit({ id: true });
export type InsertMarketplaceProduct = z.infer<typeof insertMarketplaceProductSchema>;
export type MarketplaceProduct = typeof marketplaceProducts.$inferSelect;

// Tool Submissions
export const toolSubmissions = pgTable("tool_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  toolName: text("tool_name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  websiteUrl: text("website_url").notNull(),
  creatorEmail: text("creator_email").notNull(),
  status: text("status").default("pending"),
  submittedAt: text("submitted_at").notNull(),
});

export const insertToolSubmissionSchema = createInsertSchema(toolSubmissions).omit({ id: true, status: true, submittedAt: true });
export type InsertToolSubmission = z.infer<typeof insertToolSubmissionSchema>;
export type ToolSubmission = typeof toolSubmissions.$inferSelect;

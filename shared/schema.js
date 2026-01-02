var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
// Users table
export var users = pgTable("users", {
    id: varchar("id").primaryKey().default(sql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["gen_random_uuid()"], ["gen_random_uuid()"])))),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
});
export var insertUserSchema = createInsertSchema(users).pick({
    username: true,
    password: true,
});
// AI Tools
export var aiTools = pgTable("ai_tools", {
    id: varchar("id").primaryKey().default(sql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["gen_random_uuid()"], ["gen_random_uuid()"])))),
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
export var insertAiToolSchema = createInsertSchema(aiTools).omit({ id: true });
// Courses
export var courses = pgTable("courses", {
    id: varchar("id").primaryKey().default(sql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["gen_random_uuid()"], ["gen_random_uuid()"])))),
    title: text("title").notNull(),
    description: text("description").notNull(),
    level: text("level").notNull(),
    category: text("category").notNull(),
    duration: text("duration").notNull(),
    lessons: integer("lessons").notNull(),
    imageUrl: text("image_url"),
});
export var insertCourseSchema = createInsertSchema(courses).omit({ id: true });
// News Articles
export var newsArticles = pgTable("news_articles", {
    id: varchar("id").primaryKey().default(sql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["gen_random_uuid()"], ["gen_random_uuid()"])))),
    title: text("title").notNull(),
    excerpt: text("excerpt").notNull(),
    content: text("content").notNull(),
    category: text("category").notNull(),
    author: text("author").notNull(),
    publishedAt: text("published_at").notNull(),
    imageUrl: text("image_url"),
});
export var insertNewsArticleSchema = createInsertSchema(newsArticles).omit({ id: true });
// Newsletter Subscriptions
export var newsletterSubscriptions = pgTable("newsletter_subscriptions", {
    id: varchar("id").primaryKey().default(sql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["gen_random_uuid()"], ["gen_random_uuid()"])))),
    email: text("email").notNull().unique(),
    subscribedAt: text("subscribed_at").notNull(),
});
export var insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).omit({ id: true, subscribedAt: true });
// Marketplace Products
export var marketplaceProducts = pgTable("marketplace_products", {
    id: varchar("id").primaryKey().default(sql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["gen_random_uuid()"], ["gen_random_uuid()"])))),
    name: text("name").notNull(),
    description: text("description").notNull(),
    price: integer("price").notNull(),
    category: text("category").notNull(),
    creatorName: text("creator_name").notNull(),
    rating: integer("rating").default(0),
    reviewCount: integer("review_count").default(0),
    imageUrl: text("image_url"),
});
export var insertMarketplaceProductSchema = createInsertSchema(marketplaceProducts).omit({ id: true });
// Tool Submissions
export var toolSubmissions = pgTable("tool_submissions", {
    id: varchar("id").primaryKey().default(sql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["gen_random_uuid()"], ["gen_random_uuid()"])))),
    toolName: text("tool_name").notNull(),
    description: text("description").notNull(),
    category: text("category").notNull(),
    websiteUrl: text("website_url").notNull(),
    creatorEmail: text("creator_email").notNull(),
    status: text("status").default("pending"),
    submittedAt: text("submitted_at").notNull(),
});
export var insertToolSubmissionSchema = createInsertSchema(toolSubmissions).omit({ id: true, status: true, submittedAt: true });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

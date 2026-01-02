var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { storage } from "./storage";
import { insertAiToolSchema, insertToolSubmissionSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { z } from "zod";
export function registerRoutes(httpServer, app) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            // AI Tools endpoints
            app.get("/api/tools", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var category, tools, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            category = req.query.category;
                            tools = void 0;
                            if (!(category && typeof category === "string")) return [3 /*break*/, 2];
                            return [4 /*yield*/, storage.getAiToolsByCategory(category)];
                        case 1:
                            tools = _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, storage.getAiTools()];
                        case 3:
                            tools = _a.sent();
                            _a.label = 4;
                        case 4:
                            res.json(tools);
                            return [3 /*break*/, 6];
                        case 5:
                            error_1 = _a.sent();
                            res.status(500).json({ error: "Failed to fetch tools" });
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); });
            app.get("/api/tools/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var tool, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, storage.getAiToolById(req.params.id)];
                        case 1:
                            tool = _a.sent();
                            if (!tool) {
                                return [2 /*return*/, res.status(404).json({ error: "Tool not found" })];
                            }
                            res.json(tool);
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            res.status(500).json({ error: "Failed to fetch tool" });
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            app.post("/api/tools", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var validatedData, tool, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            validatedData = insertAiToolSchema.parse(req.body);
                            return [4 /*yield*/, storage.createAiTool(validatedData)];
                        case 1:
                            tool = _a.sent();
                            res.status(201).json(tool);
                            return [3 /*break*/, 3];
                        case 2:
                            error_3 = _a.sent();
                            if (error_3 instanceof z.ZodError) {
                                return [2 /*return*/, res.status(400).json({ error: "Invalid data", details: error_3.errors })];
                            }
                            res.status(500).json({ error: "Failed to create tool" });
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            // Courses endpoints
            app.get("/api/courses", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var level, courses, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            level = req.query.level;
                            courses = void 0;
                            if (!(level && typeof level === "string")) return [3 /*break*/, 2];
                            return [4 /*yield*/, storage.getCoursesByLevel(level)];
                        case 1:
                            courses = _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, storage.getCourses()];
                        case 3:
                            courses = _a.sent();
                            _a.label = 4;
                        case 4:
                            res.json(courses);
                            return [3 /*break*/, 6];
                        case 5:
                            error_4 = _a.sent();
                            res.status(500).json({ error: "Failed to fetch courses" });
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); });
            app.get("/api/courses/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var course, error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, storage.getCourseById(req.params.id)];
                        case 1:
                            course = _a.sent();
                            if (!course) {
                                return [2 /*return*/, res.status(404).json({ error: "Course not found" })];
                            }
                            res.json(course);
                            return [3 /*break*/, 3];
                        case 2:
                            error_5 = _a.sent();
                            res.status(500).json({ error: "Failed to fetch course" });
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            // News Articles endpoints
            app.get("/api/news", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var category, articles, error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            category = req.query.category;
                            articles = void 0;
                            if (!(category && typeof category === "string")) return [3 /*break*/, 2];
                            return [4 /*yield*/, storage.getNewsArticlesByCategory(category)];
                        case 1:
                            articles = _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, storage.getNewsArticles()];
                        case 3:
                            articles = _a.sent();
                            _a.label = 4;
                        case 4:
                            res.json(articles);
                            return [3 /*break*/, 6];
                        case 5:
                            error_6 = _a.sent();
                            res.status(500).json({ error: "Failed to fetch news articles" });
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); });
            app.get("/api/news/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var article, error_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, storage.getNewsArticleById(req.params.id)];
                        case 1:
                            article = _a.sent();
                            if (!article) {
                                return [2 /*return*/, res.status(404).json({ error: "Article not found" })];
                            }
                            res.json(article);
                            return [3 /*break*/, 3];
                        case 2:
                            error_7 = _a.sent();
                            res.status(500).json({ error: "Failed to fetch article" });
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            // Newsletter Subscription endpoints
            app.post("/api/newsletter/subscribe", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var validatedData, existing, subscription, error_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
                            return [4 /*yield*/, storage.getNewsletterSubscriptionByEmail(validatedData.email)];
                        case 1:
                            existing = _a.sent();
                            if (existing) {
                                return [2 /*return*/, res.status(400).json({ error: "Email already subscribed" })];
                            }
                            return [4 /*yield*/, storage.createNewsletterSubscription(validatedData)];
                        case 2:
                            subscription = _a.sent();
                            res.status(201).json(subscription);
                            return [3 /*break*/, 4];
                        case 3:
                            error_8 = _a.sent();
                            if (error_8 instanceof z.ZodError) {
                                return [2 /*return*/, res.status(400).json({ error: "Invalid email", details: error_8.errors })];
                            }
                            res.status(500).json({ error: "Failed to subscribe" });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            // Marketplace Products endpoints
            app.get("/api/marketplace", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var category, products, error_9;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            category = req.query.category;
                            products = void 0;
                            if (!(category && typeof category === "string")) return [3 /*break*/, 2];
                            return [4 /*yield*/, storage.getMarketplaceProductsByCategory(category)];
                        case 1:
                            products = _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, storage.getMarketplaceProducts()];
                        case 3:
                            products = _a.sent();
                            _a.label = 4;
                        case 4:
                            res.json(products);
                            return [3 /*break*/, 6];
                        case 5:
                            error_9 = _a.sent();
                            res.status(500).json({ error: "Failed to fetch products" });
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); });
            app.get("/api/marketplace/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var product, error_10;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, storage.getMarketplaceProductById(req.params.id)];
                        case 1:
                            product = _a.sent();
                            if (!product) {
                                return [2 /*return*/, res.status(404).json({ error: "Product not found" })];
                            }
                            res.json(product);
                            return [3 /*break*/, 3];
                        case 2:
                            error_10 = _a.sent();
                            res.status(500).json({ error: "Failed to fetch product" });
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            // Tool Submissions endpoints
            app.get("/api/submissions", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var submissions, error_11;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, storage.getToolSubmissions()];
                        case 1:
                            submissions = _a.sent();
                            res.json(submissions);
                            return [3 /*break*/, 3];
                        case 2:
                            error_11 = _a.sent();
                            res.status(500).json({ error: "Failed to fetch submissions" });
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            app.post("/api/submissions", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var validatedData, submission, error_12;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            validatedData = insertToolSubmissionSchema.parse(req.body);
                            return [4 /*yield*/, storage.createToolSubmission(validatedData)];
                        case 1:
                            submission = _a.sent();
                            res.status(201).json(submission);
                            return [3 /*break*/, 3];
                        case 2:
                            error_12 = _a.sent();
                            if (error_12 instanceof z.ZodError) {
                                return [2 /*return*/, res.status(400).json({ error: "Invalid data", details: error_12.errors })];
                            }
                            res.status(500).json({ error: "Failed to create submission" });
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/, httpServer];
        });
    });
}

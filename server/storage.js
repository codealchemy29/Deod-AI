var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import crypto from "crypto";
var MemStorage = /** @class */ (function () {
    function MemStorage() {
        this.users = new Map();
        this.aiTools = new Map();
        this.courses = new Map();
        this.newsArticles = new Map();
        this.newsletterSubscriptions = new Map();
        this.marketplaceProducts = new Map();
        this.toolSubmissions = new Map();
        this.seedData();
    }
    MemStorage.prototype.seedData = function () {
        var _this = this;
        // Basic seed for AI Tools to ensure the app isn't empty
        var toolsData = [
            { name: "ChatGPT", description: "General AI", category: "text", useCase: "Chat", pricing: "Freemium", creatorName: "OpenAI", verified: true },
        ];
        toolsData.forEach(function (t) { return _this.createAiTool(t); });
    };
    // Users
    MemStorage.prototype.getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.users.get(id)];
        }); });
    };
    MemStorage.prototype.getUserByUsername = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Array.from(this.users.values()).find(function (u) { return u.username === username; })];
            });
        });
    };
    MemStorage.prototype.createUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var id, newUser;
            return __generator(this, function (_a) {
                id = crypto.randomUUID();
                newUser = __assign(__assign({}, user), { id: id });
                this.users.set(id, newUser);
                return [2 /*return*/, newUser];
            });
        });
    };
    // AI Tools
    MemStorage.prototype.getAiTools = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, Array.from(this.aiTools.values())];
        }); });
    };
    MemStorage.prototype.getAiToolById = function (id) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.aiTools.get(id)];
        }); });
    };
    MemStorage.prototype.getAiToolsByCategory = function (cat) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Array.from(this.aiTools.values()).filter(function (t) { return t.category === cat; })];
            });
        });
    };
    MemStorage.prototype.createAiTool = function (tool) {
        return __awaiter(this, void 0, void 0, function () {
            var id, newTool;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                id = crypto.randomUUID();
                newTool = __assign(__assign({}, tool), { id: id, verified: (_a = tool.verified) !== null && _a !== void 0 ? _a : false, imageUrl: (_b = tool.imageUrl) !== null && _b !== void 0 ? _b : null, websiteUrl: (_c = tool.websiteUrl) !== null && _c !== void 0 ? _c : null });
                this.aiTools.set(id, newTool);
                return [2 /*return*/, newTool];
            });
        });
    };
    // Courses
    MemStorage.prototype.getCourses = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, Array.from(this.courses.values())];
        }); });
    };
    MemStorage.prototype.getCourseById = function (id) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.courses.get(id)];
        }); });
    };
    MemStorage.prototype.getCoursesByLevel = function (lvl) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Array.from(this.courses.values()).filter(function (c) { return c.level === lvl; })];
            });
        });
    };
    MemStorage.prototype.createCourse = function (course) {
        return __awaiter(this, void 0, void 0, function () {
            var id, newCourse;
            var _a;
            return __generator(this, function (_b) {
                id = crypto.randomUUID();
                newCourse = __assign(__assign({}, course), { id: id, imageUrl: (_a = course.imageUrl) !== null && _a !== void 0 ? _a : null });
                this.courses.set(id, newCourse);
                return [2 /*return*/, newCourse];
            });
        });
    };
    // News
    MemStorage.prototype.getNewsArticles = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, Array.from(this.newsArticles.values())];
        }); });
    };
    MemStorage.prototype.getNewsArticleById = function (id) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.newsArticles.get(id)];
        }); });
    };
    MemStorage.prototype.getNewsArticlesByCategory = function (cat) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Array.from(this.newsArticles.values()).filter(function (a) { return a.category === cat; })];
            });
        });
    };
    MemStorage.prototype.createNewsArticle = function (art) {
        return __awaiter(this, void 0, void 0, function () {
            var id, newArt;
            var _a;
            return __generator(this, function (_b) {
                id = crypto.randomUUID();
                newArt = __assign(__assign({}, art), { id: id, imageUrl: (_a = art.imageUrl) !== null && _a !== void 0 ? _a : null });
                this.newsArticles.set(id, newArt);
                return [2 /*return*/, newArt];
            });
        });
    };
    // Newsletter
    MemStorage.prototype.getNewsletterSubscriptions = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, Array.from(this.newsletterSubscriptions.values())];
        }); });
    };
    MemStorage.prototype.getNewsletterSubscriptionByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Array.from(this.newsletterSubscriptions.values()).find(function (s) { return s.email === email; })];
            });
        });
    };
    MemStorage.prototype.createNewsletterSubscription = function (sub) {
        return __awaiter(this, void 0, void 0, function () {
            var id, newSub;
            return __generator(this, function (_a) {
                id = crypto.randomUUID();
                newSub = __assign(__assign({}, sub), { id: id, subscribedAt: new Date().toISOString() });
                this.newsletterSubscriptions.set(id, newSub);
                return [2 /*return*/, newSub];
            });
        });
    };
    // Marketplace
    MemStorage.prototype.getMarketplaceProducts = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, Array.from(this.marketplaceProducts.values())];
        }); });
    };
    MemStorage.prototype.getMarketplaceProductById = function (id) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.marketplaceProducts.get(id)];
        }); });
    };
    MemStorage.prototype.getMarketplaceProductsByCategory = function (cat) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Array.from(this.marketplaceProducts.values()).filter(function (p) { return p.category === cat; })];
            });
        });
    };
    MemStorage.prototype.createMarketplaceProduct = function (prod) {
        return __awaiter(this, void 0, void 0, function () {
            var id, newProd;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                id = crypto.randomUUID();
                newProd = __assign(__assign({}, prod), { id: id, rating: (_a = prod.rating) !== null && _a !== void 0 ? _a : 0, reviewCount: (_b = prod.reviewCount) !== null && _b !== void 0 ? _b : 0, imageUrl: (_c = prod.imageUrl) !== null && _c !== void 0 ? _c : null });
                this.marketplaceProducts.set(id, newProd);
                return [2 /*return*/, newProd];
            });
        });
    };
    // Submissions
    MemStorage.prototype.getToolSubmissions = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, Array.from(this.toolSubmissions.values())];
        }); });
    };
    MemStorage.prototype.getToolSubmissionById = function (id) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.toolSubmissions.get(id)];
        }); });
    };
    MemStorage.prototype.createToolSubmission = function (sub) {
        return __awaiter(this, void 0, void 0, function () {
            var id, newSub;
            return __generator(this, function (_a) {
                id = crypto.randomUUID();
                newSub = __assign(__assign({}, sub), { id: id, status: "pending", submittedAt: new Date().toISOString() });
                this.toolSubmissions.set(id, newSub);
                return [2 /*return*/, newSub];
            });
        });
    };
    return MemStorage;
}());
export { MemStorage };
export var storage = new MemStorage();

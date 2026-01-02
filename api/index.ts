import { app } from "../server/index.js";
import { registerRoutes } from "../server/routes.js";
import { createServer } from "http";

const httpServer = createServer(app);

// Keep the registration promise globally to avoid multiple setups
let registrationPromise: Promise<any> | null = null;

export default async function handler(req: any, res: any) {
  try {
    if (!registrationPromise) {
      registrationPromise = registerRoutes(httpServer, app);
    }
    
    await registrationPromise;
    return app(req, res);
  } catch (err: any) {
    // This turns the "500" into a readable message on your screen
    console.error("Vercel Backend Crash:", err);
    res.status(500).json({ 
      error: "Backend Setup Failed",
      message: err.message,
      stack: err.stack 
    });
  }
}
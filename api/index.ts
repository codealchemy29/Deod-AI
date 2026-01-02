import { app } from "../server/index.ts";
import { registerRoutes } from "../server/routes.ts";
import { createServer } from "http";

const httpServer = createServer(app);

// Keep the promise outside the handler to "memoize" it
// This ensures routes are only registered ONCE per serverless wake-up
let registrationPromise: Promise<any> | null = null;

export default async (req: any, res: any) => {
  try {
    if (!registrationPromise) {
      registrationPromise = registerRoutes(httpServer, app);
    }
    
    // Wait for routes to be ready
    await registrationPromise;

    // Handle the request
    return app(req, res);
  } catch (err) {
    // This will now show up in your Vercel Logs
    console.error("Vercel Runtime Error:", err);
    res.status(500).json({ 
      error: "Internal Server Error", 
      details: err instanceof Error ? err.message : String(err) 
    });
  }
};
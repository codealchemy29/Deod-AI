import { app } from "../server/index";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

// We create the server instance
const httpServer = createServer(app);

// This "prepares" the app by making sure routes are attached
// before Vercel handles the incoming request.
let isResolved = false;
const prepare = async () => {
  if (!isResolved) {
    await registerRoutes(httpServer, app);
    isResolved = true;
  }
  return app;
};

export default async function handler(req: any, res: any) {
  const readyApp = await prepare();
  return readyApp(req, res);
}
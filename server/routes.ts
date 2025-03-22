import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.json(contact);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact form data" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletter(data);
      res.json(newsletter);
    } catch (error) {
      res.status(400).json({ error: "Invalid newsletter subscription data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

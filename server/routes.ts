import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = contactSchema.parse(req.body);
      
      // Log the contact form submission
      console.log("Contact form submission:", {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });
      
      // In a real application, you would:
      // 1. Send an email using a service like Nodemailer
      // 2. Store the message in a database
      // 3. Send a notification to the site owner
      
      res.json({
        success: true,
        message: "Thank you for your message! I will get back to you soon.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

const projectInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Project type is required"),
  budget: z.string().min(1, "Budget range is required"),
  timeline: z.string().min(1, "Timeline is required"),
  description: z.string().min(1, "Project description is required"),
  features: z.array(z.string()),
  inspiration: z.string().optional(),
  additionalInfo: z.string().optional(),
});

// Create email transporter
let transporter: nodemailer.Transporter | null = null;

console.log('Email config check:', {
  host: !!process.env.EMAIL_HOST,
  user: !!process.env.EMAIL_USER,
  pass: !!process.env.EMAIL_PASS,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE
});

if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  // Try different configurations based on the email provider
  let config;
  
  if (process.env.EMAIL_HOST.includes('outlook') || process.env.EMAIL_HOST.includes('hotmail')) {
    // Outlook/Hotmail configuration
    config = {
      service: 'hotmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    };
  } else if (process.env.EMAIL_HOST.includes('gmail')) {
    // Gmail configuration
    config = {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    };
  } else {
    // Generic SMTP configuration
    config = {
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    };
  }
  
  transporter = nodemailer.createTransport(config);
  
  // Test the connection
  transporter.verify((error, success) => {
    if (error) {
      console.log('Email configuration error:', error.message);
    } else {
      console.log('Email server ready to send messages');
    }
  });
} else {
  console.log('Email not configured - missing required environment variables');
}

async function sendEmail(to: string, subject: string, html: string, text: string) {
  if (!transporter) {
    console.log("Email not configured, email would contain:", { to, subject, text });
    return false;
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to,
      subject,
      html,
      text
    });
    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
}

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
      
      // Send email notification
      const emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `;
      
      const emailText = `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Submitted: ${new Date().toLocaleString()}
      `;

      const emailSent = await sendEmail(
        "hamza.chouaibi9@hotmail.com",
        `New Contact Form Submission from ${name}`,
        emailHtml,
        emailText
      );

      if (emailSent) {
        console.log("Contact form email sent successfully");
      } else {
        console.warn("Failed to send contact form email, but submission logged");
      }
      
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

  // Project inquiry endpoint
  app.post("/api/project-inquiry", async (req, res) => {
    try {
      const projectData = projectInquirySchema.parse(req.body);
      
      // Log the project inquiry submission
      console.log("Project inquiry submission:", {
        ...projectData,
        timestamp: new Date().toISOString(),
      });
      
      // Send detailed project inquiry email
      const projectEmailHtml = `
        <h2>🚀 New Project Inquiry</h2>
        
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${projectData.name}</p>
        <p><strong>Email:</strong> ${projectData.email}</p>
        ${projectData.phone ? `<p><strong>Phone:</strong> ${projectData.phone}</p>` : ''}
        ${projectData.company ? `<p><strong>Company:</strong> ${projectData.company}</p>` : ''}
        
        <h3>Project Details</h3>
        <p><strong>Project Type:</strong> ${projectData.projectType}</p>
        <p><strong>Budget Range:</strong> ${projectData.budget}</p>
        <p><strong>Timeline:</strong> ${projectData.timeline}</p>
        
        <h3>Description</h3>
        <p>${projectData.description.replace(/\n/g, '<br>')}</p>
        
        ${projectData.features?.length ? `
        <h3>Required Features</h3>
        <ul>
          ${projectData.features.map((feature: string) => `<li>${feature}</li>`).join('')}
        </ul>
        ` : ''}
        
        ${projectData.inspiration ? `
        <h3>Inspiration</h3>
        <p><a href="${projectData.inspiration}" target="_blank">${projectData.inspiration}</a></p>
        ` : ''}
        
        ${projectData.additionalInfo ? `
        <h3>Additional Information</h3>
        <p>${projectData.additionalInfo.replace(/\n/g, '<br>')}</p>
        ` : ''}
        
        <hr>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        <p><em>Reply directly to this email to respond to the client.</em></p>
      `;
      
      const projectEmailText = `
        NEW PROJECT INQUIRY
        
        Contact Information:
        Name: ${projectData.name}
        Email: ${projectData.email}
        ${projectData.phone ? `Phone: ${projectData.phone}` : ''}
        ${projectData.company ? `Company: ${projectData.company}` : ''}
        
        Project Details:
        Type: ${projectData.projectType}
        Budget: ${projectData.budget}
        Timeline: ${projectData.timeline}
        
        Description:
        ${projectData.description}
        
        ${projectData.features?.length ? `
        Features:
        ${projectData.features.map((feature: string) => `- ${feature}`).join('\n')}
        ` : ''}
        
        ${projectData.inspiration ? `Inspiration: ${projectData.inspiration}` : ''}
        ${projectData.additionalInfo ? `Additional Info: ${projectData.additionalInfo}` : ''}
        
        Submitted: ${new Date().toLocaleString()}
      `;

      const emailSent = await sendEmail(
        "hamza.chouaibi9@hotmail.com",
        `💼 New Project Inquiry: ${projectData.projectType} (${projectData.budget})`,
        projectEmailHtml,
        projectEmailText
      );

      if (emailSent) {
        console.log("Project inquiry email sent successfully");
      } else {
        console.warn("Failed to send project inquiry email, but submission logged");
      }
      
      res.json({
        success: true,
        message: "Thank you for your detailed project information! I will review it and get back to you within 24 hours.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        console.error("Project inquiry error:", error);
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

import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { Resend } from "resend";

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

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

if (resend) {
  console.log('Resend email service initialized');
} else {
  console.log('Resend API key not found');
}

async function sendEmail(to: string, subject: string, html: string, text: string) {
  if (!resend) {
    console.log('\n=== EMAIL WOULD BE SENT ===');
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Content: ${text}`);
    console.log('=== Resend not configured ===\n');
    return false;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@resend.dev',
      to: [to],
      subject,
      html,
      text
    });

    if (error) {
      console.error('Resend email error:', error);
      return false;
    }

    console.log(`Email sent successfully to ${to}`, data);
    return true;
  } catch (error) {
    console.error('Resend email error:', error);
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

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Linkedin,
  Github,
  Twitter
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [ref, isIntersecting] = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-xl font-medium">
            Let's discuss your next project
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="text-primary text-xl mr-4" />
                <span className="text-muted-foreground">hamza.chouaibi@email.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary text-xl mr-4" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary text-xl mr-4" />
                <span className="text-muted-foreground">Tunisia</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
            
            <Button className="floating-button bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-500 rounded-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your Name"
                      className="mt-2 input-focus bg-input border-primary/30 text-foreground placeholder:text-muted-foreground rounded-lg transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="mt-2 input-focus bg-input border-primary/30 text-foreground placeholder:text-muted-foreground rounded-lg transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your project..."
                      className="mt-2 input-focus bg-input border-primary/30 text-foreground placeholder:text-muted-foreground rounded-lg resize-none transition-all duration-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full floating-button bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-black via-background to-muted relative overflow-hidden" ref={ref}>
      {/* Background Elements - Same as Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-background to-muted">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_var(--secondary)_0%,_transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_var(--accent)_0%,_transparent_50%)] opacity-20"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000) 
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            transition={{
              duration: Math.random() * 35 + 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 md:mb-6">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              {[
                { icon: Mail, label: "Email", value: "hamza.chouaibi@email.com", color: "text-primary" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "text-secondary" },
                { icon: MapPin, label: "Location", value: "Tunisia", color: "text-accent" }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="group flex items-center p-3 md:p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
                  >
                    <Icon className={`${contact.color} text-lg md:text-xl mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300`} />
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground/60 font-medium">{contact.label}</p>
                      <span className="text-muted-foreground text-sm md:text-base">{contact.value}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-6 md:mb-8"
            >
              <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4 md:mb-6">
                Follow Me
              </h4>
              <div className="flex gap-3 md:gap-4">
                {[
                  { icon: Linkedin, href: "#", color: "hover:text-primary" },
                  { icon: Github, href: "#", color: "hover:text-secondary" },
                  { icon: Twitter, href: "#", color: "hover:text-accent" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/20 text-muted-foreground ${social.color} hover:bg-primary/10 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg`}
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <Icon className="h-5 w-5 md:h-6 md:w-6" />
                        </a>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <Button className="floating-button bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-500 rounded-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <Label htmlFor="name" className="text-foreground text-sm md:text-base font-medium">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your Name"
                      className="mt-2 input-focus bg-input border-primary/30 text-foreground placeholder:text-muted-foreground rounded-xl h-12 md:h-14 text-sm md:text-base transition-all duration-300 hover:border-primary/50"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Label htmlFor="email" className="text-foreground text-sm md:text-base font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="mt-2 input-focus bg-input border-primary/30 text-foreground placeholder:text-muted-foreground rounded-xl h-12 md:h-14 text-sm md:text-base transition-all duration-300 hover:border-primary/50"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <Label htmlFor="message" className="text-foreground text-sm md:text-base font-medium">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your project..."
                      className="mt-2 input-focus bg-input border-primary/30 text-foreground placeholder:text-muted-foreground rounded-xl resize-none text-sm md:text-base transition-all duration-300 hover:border-primary/50"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <Button
                      type="submit"
                      className="w-full floating-button bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold py-3 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-70"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Application"
  },
  {
    title: "Task Management App",
    description: "A React Native mobile application for task management with offline support, push notifications, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["React Native", "TypeScript", "Redux", "Firebase"],
    category: "Mobile App"
  },
  {
    title: "Analytics Dashboard",
    description: "A real-time analytics dashboard built with React and D3.js, featuring interactive charts, data visualization, and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["React", "D3.js", "WebSocket", "MongoDB"],
    category: "Dashboard"
  },
  {
    title: "AI-Powered SaaS Platform",
    description: "Modern SaaS platform with AI integration, real-time collaboration, and advanced analytics. Built with Next.js and deployed on AWS.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["Next.js", "OpenAI", "AWS", "Prisma"],
    category: "SaaS"
  },
  {
    title: "Fintech Mobile App",
    description: "Secure fintech application with biometric authentication, real-time transactions, and comprehensive financial tracking.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["React Native", "Expo", "Plaid", "Security"],
    category: "Fintech"
  },
  {
    title: "Healthcare Platform",
    description: "Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["React", "Node.js", "HIPAA", "WebRTC"],
    category: "Healthcare"
  }
];

export default function ProjectsSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-background to-muted relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/3 left-5 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-5 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            A showcase of my latest work and innovative solutions
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={isIntersecting ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="project-card-glow group"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden shadow-2xl hover:border-primary/40 transition-all duration-500 rounded-2xl h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-4 md:p-6">
                  {/* Project Title */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.15 + tagIndex * 0.1 + 0.5 }}
                        className="px-2 md:px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg text-xs md:text-sm font-medium text-primary"
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 md:px-3 py-1 bg-muted/50 rounded-lg text-xs md:text-sm font-medium text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 floating-button text-primary border-primary/50 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transition-all duration-300 text-xs md:text-sm"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 floating-button text-secondary border-secondary/50 hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:text-white hover:border-transparent transition-all duration-300 text-xs md:text-sm"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 md:mt-16"
        >
          <Button
            size="lg"
            className="floating-button bg-gradient-to-r from-primary via-secondary to-accent hover:from-accent hover:via-primary hover:to-secondary text-white font-semibold px-8 md:px-12 py-3 md:py-4 text-base md:text-lg rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-500"
          >
            View All Projects
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

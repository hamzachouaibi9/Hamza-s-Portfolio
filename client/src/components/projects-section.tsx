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
  },
  {
    title: "Task Management App",
    description: "A React Native mobile application for task management with offline support, push notifications, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "A real-time analytics dashboard built with React and D3.js, featuring interactive charts, data visualization, and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">My Projects</h2>
          <p className="text-muted-foreground text-xl font-medium">
            A showcase of my recent work
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={isIntersecting ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="project-card-glow"
            >
              <Card className="bg-card border-primary/20 overflow-hidden shadow-2xl hover:border-primary/40 transition-all duration-500 rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="floating-button text-primary border-primary/50 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transition-all duration-300"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="floating-button text-secondary border-secondary/50 hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:text-white hover:border-transparent transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

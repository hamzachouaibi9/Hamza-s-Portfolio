import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Clock, Users, TrendingUp } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState } from "react";

const projects = [
  {
    title: "CryptoTracker Pro",
    description: "Real-time cryptocurrency portfolio tracker with advanced analytics, price alerts, and trading insights. Built with cutting-edge Web3 integration.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["React", "Web3", "Chart.js", "Redux"],
    category: "Blockchain",
    status: "Live",
    timeline: "3 months",
    impact: "10k+ users"
  },
  {
    title: "StreamFlow Studio",
    description: "Revolutionary video streaming platform with AI-powered content recommendations, live streaming capabilities, and creator monetization tools.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["Next.js", "WebRTC", "AI/ML", "Stripe"],
    category: "Media",
    status: "Live",
    timeline: "6 months",
    impact: "50k+ streams"
  },
  {
    title: "EcoMarket Hub",
    description: "Sustainable marketplace connecting eco-conscious consumers with green businesses. Features carbon footprint tracking and sustainability scoring.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["Vue.js", "Node.js", "GraphQL", "AWS"],
    category: "E-Commerce",
    status: "Beta",
    timeline: "4 months",
    impact: "Carbon neutral"
  },
  {
    title: "MindSpace VR",
    description: "Immersive virtual reality meditation and wellness platform with biometric feedback integration and personalized mindfulness journeys.",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["Unity", "VR", "AI", "Biometrics"],
    category: "VR/AR",
    status: "Development",
    timeline: "8 months",
    impact: "Wellness focus"
  },
  {
    title: "CodeCollab IDE",
    description: "Next-generation collaborative code editor with real-time pair programming, AI code suggestions, and integrated project management.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["TypeScript", "WebSocket", "OpenAI", "Docker"],
    category: "Developer Tools",
    status: "Live",
    timeline: "5 months",
    impact: "5k+ developers"
  },
  {
    title: "QuantumDB Pro",
    description: "High-performance database management system with quantum-inspired algorithms for ultra-fast query processing and data analytics.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    demoUrl: "#",
    githubUrl: "#",
    tags: ["Rust", "PostgreSQL", "ML", "Cloud"],
    category: "Database",
    status: "Research",
    timeline: "12 months",
    impact: "10x faster queries"
  }
];

export default function ProjectsSection() {
  const [ref, isIntersecting] = useIntersectionObserver();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Blockchain", "Media", "E-Commerce", "VR/AR", "Developer Tools", "Database"];
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500";
      case "Beta": return "bg-yellow-500";
      case "Development": return "bg-blue-500";
      case "Research": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-black via-background to-muted relative overflow-hidden" ref={ref}>
      {/* Background Elements - Same as Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-background to-muted">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_var(--secondary)_0%,_transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_var(--accent)_0%,_transparent_50%)] opacity-20"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000) 
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            transition={{
              duration: Math.random() * 20 + 40,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 glow-text">
            Innovation Portfolio
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Cutting-edge projects pushing the boundaries of technology
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                  : "bg-background/50 backdrop-blur-sm border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={isIntersecting ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="project-card-glow group"
            >
              <Card className="bg-card/30 backdrop-blur-sm border-primary/20 overflow-hidden shadow-2xl hover:border-primary/40 transition-all duration-500 rounded-2xl h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden h-64 md:h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                      <span className="text-white text-xs font-medium">{project.status}</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 text-white/80 text-xs">
                      <div className="flex items-center gap-1 bg-background/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <Clock className="w-3 h-3" />
                        {project.timeline}
                      </div>
                      <div className="flex items-center gap-1 bg-background/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <TrendingUp className="w-3 h-3" />
                        {project.impact}
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 md:p-8">
                  {/* Project Title */}
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3 md:mb-4 group-hover:from-secondary group-hover:to-accent transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.15 + tagIndex * 0.1 + 0.5 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-lg text-xs md:text-sm font-medium text-primary hover:from-primary/30 hover:to-secondary/30 transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 floating-button bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/50 text-primary hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transition-all duration-300"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 floating-button bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/50 text-secondary hover:from-secondary hover:to-accent hover:text-white hover:border-transparent transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
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

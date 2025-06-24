import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { ChevronDown, Sparkles, Code, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { displayText, isTyping } = useTypingAnimation("Hi, I'm Hamza Chouaibi");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-background to-muted">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_var(--secondary)_0%,_transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_var(--accent)_0%,_transparent_50%)] opacity-20"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Interactive Mouse Glow */}
      <motion.div
        className="absolute pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <div className="w-48 h-48 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Icons */}
        <motion.div
          className="absolute -top-20 -left-20 text-primary/30"
          animate={{ rotate: 360, y: [-10, 10, -10] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity } }}
        >
          <Code size={40} />
        </motion.div>
        <motion.div
          className="absolute -top-16 -right-16 text-secondary/30"
          animate={{ rotate: -360, y: [10, -10, 10] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity } }}
        >
          <Rocket size={35} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 -left-32 text-accent/30"
          animate={{ rotate: 360, x: [-5, 5, -5] }}
          transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, x: { duration: 3, repeat: Infinity } }}
        >
          <Sparkles size={30} />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent glow-text">
              {displayText}
            </span>
            {isTyping && <span className="typing-cursor ml-2 bg-gradient-to-r from-primary to-secondary"></span>}
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4">
              Crafting Digital Excellence
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into extraordinary digital experiences through innovative web and mobile development
            </p>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-accent hover:from-accent hover:via-primary hover:to-secondary text-white font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-500 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              <Rocket className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Explore My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="group border-2 border-primary/50 hover:border-primary bg-background/10 backdrop-blur-sm text-primary hover:bg-primary hover:text-white font-semibold px-12 py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            <span className="flex items-center">
              <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
              Get In Touch
            </span>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground/60 cursor-pointer hover:text-primary transition-colors"
            onClick={scrollToProjects}
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}

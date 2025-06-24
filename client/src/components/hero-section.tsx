import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/use-typing-animation";

export default function HeroSection() {
  const { displayText, isTyping } = useTypingAnimation("Hi, my name is Hamza Chouaibi");

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
    <section id="hero" className="min-h-screen flex items-center justify-center hero-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span>{displayText}</span>
            {isTyping && <span className="typing-cursor ml-1"></span>}
          </h1>
          
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
          >
            Web & Mobile App Developer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3 }}
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

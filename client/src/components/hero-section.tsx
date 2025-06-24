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
            className="text-xl sm:text-2xl text-secondary mb-8 font-medium"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
          >
            Web & Mobile App Developer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 3, ease: "easeOut" }}
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="floating-button bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl"
            >
              View My Work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

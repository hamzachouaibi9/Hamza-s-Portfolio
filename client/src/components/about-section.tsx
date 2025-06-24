import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-muted relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">About Me</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={isIntersecting ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional developer portrait"
              className="relative rounded-xl shadow-2xl w-full h-auto border-2 border-primary/30 hover:border-primary/60 transition-all duration-300"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50, y: 30 }}
            animate={isIntersecting ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              I'm a dedicated web and mobile application developer with a passion for creating innovative solutions that bridge the gap between design and functionality. With expertise in modern frameworks and technologies, I transform ideas into engaging digital experiences.
            </p>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              My journey in development began with a curiosity for how things work, which evolved into a deep appreciation for clean code, user experience, and the endless possibilities technology offers. I specialize in React, TypeScript, and mobile development, always staying current with industry trends.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and the power of collaboration to create exceptional digital products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

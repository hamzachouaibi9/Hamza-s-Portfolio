import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary">About Me</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional developer portrait"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
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

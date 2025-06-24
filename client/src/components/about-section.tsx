import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Award, Target, Users, Zap } from "lucide-react";

export default function AboutSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  const achievements = [
    { icon: Award, number: "50+", label: "Projects Completed", color: "text-primary" },
    { icon: Users, number: "30+", label: "Happy Clients", color: "text-secondary" },
    { icon: Target, number: "5+", label: "Years Experience", color: "text-accent" },
    { icon: Zap, number: "100%", label: "Client Satisfaction", color: "text-primary" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Crafting digital experiences that make a difference
          </p>
        </motion.div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={isIntersecting ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl transform rotate-3"></div>
            <div className="relative bg-gradient-to-br from-background/50 to-card/50 backdrop-blur-sm rounded-2xl p-2 border border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional developer portrait"
                className="w-full h-auto rounded-xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:scale-[1.02]"
              />
            </div>
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 30 }}
            animate={isIntersecting ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight">
              Passionate Developer & Problem Solver
            </h3>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                I'm a dedicated web and mobile application developer with a passion for creating innovative solutions that bridge the gap between design and functionality. With expertise in modern frameworks and technologies, I transform ideas into engaging digital experiences.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                My journey in development began with a curiosity for how things work, which evolved into a deep appreciation for clean code, user experience, and the endless possibilities technology offers.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {["React", "TypeScript", "Node.js", "Mobile Dev", "UI/UX"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm md:text-base font-medium text-primary hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="group text-center p-4 md:p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                <Icon className={`w-8 h-8 md:w-12 md:h-12 ${achievement.color} mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 md:mb-2">
                  {achievement.number}
                </h4>
                <p className="text-muted-foreground text-xs md:text-sm font-medium">
                  {achievement.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

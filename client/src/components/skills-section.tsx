import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaAws, 
  FaFigma,
  FaPython,
  FaDocker
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiGraphql } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 95, icon: FaReact, color: "text-primary" },
      { name: "TypeScript", level: 92, icon: FaJs, color: "text-secondary" },
      { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "text-accent" },
      { name: "UI/UX Design", level: 85, icon: FaFigma, color: "text-primary" },
    ]
  },
  {
    title: "Backend Development", 
    skills: [
      { name: "Node.js/Express", level: 88, icon: FaNodeJs, color: "text-secondary" },
      { name: "Python/Django", level: 82, icon: FaPython, color: "text-accent" },
      { name: "GraphQL", level: 78, icon: SiGraphql, color: "text-primary" },
      { name: "Database Design", level: 85, icon: FaDatabase, color: "text-secondary" },
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS/Cloud", level: 80, icon: FaAws, color: "text-accent" },
      { name: "Docker", level: 75, icon: FaDocker, color: "text-primary" },
      { name: "MongoDB", level: 83, icon: SiMongodb, color: "text-secondary" },
      { name: "Next.js", level: 90, icon: SiNextdotjs, color: "text-accent" },
    ]
  }
];

export default function SkillsSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="skills" className="py-16 md:py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional digital experiences
          </p>
        </motion.div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="group"
            >
              {/* Category Card */}
              <div className="h-full bg-gradient-to-br from-card/50 to-background/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
                {/* Category Header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isIntersecting ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                  className="mb-6 md:mb-8"
                >
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {category.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </motion.div>

                {/* Skills List */}
                <div className="space-y-4 md:space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 
                        }}
                        className="group/skill"
                      >
                        {/* Skill Header */}
                        <div className="flex justify-between items-center mb-2 md:mb-3">
                          <div className="flex items-center space-x-3">
                            <Icon className={`${skill.color} text-lg md:text-xl skill-icon-pulse transition-all duration-300 group-hover/skill:scale-110`} />
                            <span className="text-foreground font-medium text-sm md:text-base">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-primary font-bold text-sm md:text-base">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative">
                          <Progress
                            value={isIntersecting ? skill.level : 0}
                            className="h-2 md:h-3 bg-muted/50"
                          />
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isIntersecting ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.7,
                              ease: "easeOut"
                            }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-lg"
                            style={{ width: 0 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12 md:mt-20"
        >
          <p className="text-muted-foreground text-base md:text-lg mb-6">
            Always learning and adapting to new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {["Learning", "Adapting", "Growing", "Innovating"].map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm md:text-base font-medium text-primary"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

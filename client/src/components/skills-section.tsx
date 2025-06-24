import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaAws, 
  FaFigma 
} from "react-icons/fa";

const skills = [
  { name: "JavaScript/TypeScript", level: 95, icon: FaJs, color: "text-primary" },
  { name: "React/React Native", level: 90, icon: FaReact, color: "text-secondary" },
  { name: "Node.js/Express", level: 85, icon: FaNodeJs, color: "text-accent" },
  { name: "Database Design", level: 80, icon: FaDatabase, color: "text-primary" },
  { name: "Cloud Services", level: 75, icon: FaAws, color: "text-secondary" },
  { name: "UI/UX Design", level: 70, icon: FaFigma, color: "text-accent" },
];

export default function SkillsSection() {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">Skills</h2>
          <p className="text-muted-foreground text-xl font-medium">
            Technologies and tools I work with
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="space-y-3"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium flex items-center">
                    <Icon className={`${skill.color} text-2xl mr-3 skill-icon-pulse transition-all duration-300`} />
                    {skill.name}
                  </span>
                  <span className="text-primary font-bold text-lg">{skill.level}%</span>
                </div>
                <Progress
                  value={isIntersecting ? skill.level : 0}
                  className="h-3"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  Award,
  ChevronDown,
  Star,
  Play,
  Download,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { useState, useEffect } from "react";

export default function PremiumHome() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const cursorTrail = document.getElementById('cursor-trail');
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
      }
      if (cursorTrail) {
        cursorTrail.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(index);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Ultra-Fast Interactive Cursor */}
      <div
        id="custom-cursor"
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: 'white',
          opacity: '0.9',
          boxShadow: '0 0 10px rgba(255,255,255,0.5)',
          transition: 'transform 0.05s ease-out',
          willChange: 'transform'
        }}
      />

      {/* Smooth Cursor Trail */}
      <div
        id="cursor-trail"
        className="fixed pointer-events-none z-40 mix-blend-screen"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3))',
          filter: 'blur(4px)',
          transition: 'transform 0.15s ease-out',
          willChange: 'transform'
        }}
      />

      {/* Ultra-Premium Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.2
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/98 via-black/95 to-black/90 backdrop-blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center h-28">
            {/* Premium Brand Identity */}
            <motion.div
              className="flex items-center space-x-5"
              whileHover={{ scale: 1.01 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
            >
              <div className="relative w-14 h-14 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-white/5 backdrop-blur-xl border border-white/30 rounded-[2px]" />
                <div className="absolute inset-[1px] bg-gradient-to-br from-white/5 to-transparent rounded-[1px]" />
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0">
                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full"
                      initial={{ 
                        x: Math.random() * 56, 
                        y: Math.random() * 56,
                        opacity: 0
                      }}
                      animate={{
                        x: [
                          Math.random() * 56, 
                          Math.random() * 56, 
                          Math.random() * 56
                        ],
                        y: [
                          Math.random() * 56, 
                          Math.random() * 56, 
                          Math.random() * 56
                        ],
                        opacity: [0, 0.6, 0]
                      }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                      }}
                    />
                  ))}
                  
                  {/* Geometric Lines */}
                  <motion.div
                    className="absolute inset-2"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="w-full h-full border border-white/10 rounded-[1px]" />
                  </motion.div>
                  
                  {/* Central Glow */}
                  <motion.div
                    className="absolute inset-4 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                
                <div className="relative w-full h-full z-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-extralight text-xl leading-none" style={{ transform: 'translateX(-1px)' }}>HC</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-2xl font-extralight tracking-[0.15em] text-white">
                  Hamza Chouaibi
                </span>
                <span className="text-[10px] text-white/50 tracking-[0.3em] uppercase font-light">
                  Full-Stack Developer
                </span>
              </div>
            </motion.div>
            
            {/* Luxury Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { label: 'Home', section: 0 },
                { label: 'About', section: 1 },
                { label: 'Expertise', section: 2 },
                { label: 'Portfolio', section: 3 },
                { label: 'Contact', section: 4 }
              ].map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.section)}
                  className={`relative group px-4 py-3 font-light text-[13px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                    activeSection === item.section 
                      ? 'text-white' 
                      : 'text-white/50 hover:text-white/80'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active state indicator */}
                  {activeSection === item.section && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full"
                      style={{ x: '-50%' }}
                      layoutId="luxuryActiveIndicator"
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30,
                        duration: 0.6
                      }}
                    />
                  )}
                  
                  {/* Hover glow effect - expanded area */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Premium CTA */}
            <motion.button 
              onClick={() => scrollToSection(4)}
              className="relative px-8 py-4 bg-gradient-to-r from-white/8 via-white/5 to-white/8 backdrop-blur-xl border border-white/20 text-white font-light text-[11px] tracking-[0.25em] uppercase overflow-hidden"
              style={{ borderRadius: "1px" }}
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(255,255,255,0.4)",
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Work With Me</span>
              
              {/* Hover background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 1,
                  transition: { duration: 0.3 }
                }}
              />
              
              {/* Subtle glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="section-0" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
        {/* Deep Space Background */}
        <div className="absolute inset-0 bg-black">
          {/* Stars */}
          {[...Array(150)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full blur-sm"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: `blur(${Math.random() * 2 + 0.5}px)`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Deeper Nebula Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-gray-900/40 via-black to-black" />
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-radial from-purple-900/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-blue-900/10 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Floating Tech Elements Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { label: 'React', x: '25%', y: '30%' },
            { label: 'Node.js', x: '75%', y: '25%' },
            { label: 'TypeScript', x: '30%', y: '70%' },
            { label: 'Python', x: '70%', y: '65%' },
            { label: 'PostgreSQL', x: '20%', y: '50%' },
            { label: 'AWS', x: '65%', y: '80%' },
            { label: 'Docker', x: '35%', y: '15%' },
            { label: 'GraphQL', x: '80%', y: '45%' },
            { label: 'Next.js', x: '40%', y: '35%' },
            { label: 'MongoDB', x: '60%', y: '55%' },
            { label: 'Redis', x: '45%', y: '20%' },
            { label: 'Kubernetes', x: '55%', y: '75%' },
          ].map((tech, index) => (
            <motion.div
              key={tech.label}
              className="absolute"
              style={{
                left: tech.x,
                top: tech.y,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ 
                opacity: 0, 
                scale: 0.3,
                rotate: Math.random() * 360
              }}
              animate={{ 
                opacity: [0.2, 0.5, 0.2], 
                scale: [0.8, 1.1, 0.8],
                y: [0, -25, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                opacity: { duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 8 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 25 + index * 3, repeat: Infinity, ease: "linear" },
              }}
            >
              <div 
                className="px-3 py-1.5 rounded-lg text-white/40 text-xs font-light shadow-2xl border border-white/10"
                style={{
                  background: `rgba(255,255,255,0.05)`,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.08)',
                }}
              >
                {tech.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >

              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="text-white/90 block mb-2">Building</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-light">
                  Digital Excellence
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Full-Stack Developer with 5+ years crafting scalable web applications, 
                mobile solutions, and digital experiences that drive business growth.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-base font-medium rounded-sm border-0 shadow-2xl shadow-blue-500/25"
                  onClick={() => scrollToSection(4)}
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-base font-medium rounded-sm"
                  onClick={() => scrollToSection(3)}
                >
                  View Portfolio
                </Button>
              </motion.div>
              
              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-light text-white mb-2">50+</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-light text-white mb-2">5+</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">Years</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-light text-white mb-2">100%</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">Satisfaction</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative lg:ml-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative w-full h-96"></div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection(1)}
          className="cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-white/50 hover:text-white/80 transition-colors" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="section-1" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Passionate developer with expertise in modern technologies and premium user experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "React & TypeScript", desc: "Modern frontend development with type safety", color: "from-blue-400 to-cyan-500" },
              { icon: Globe, title: "Full-Stack Expertise", desc: "End-to-end application development", color: "from-green-400 to-emerald-500" },
              { icon: Shield, title: "Security First", desc: "Secure coding practices and best standards", color: "from-red-400 to-rose-500" },
              { icon: Users, title: "Team Leadership", desc: "Agile development and team collaboration", color: "from-purple-400 to-pink-500" },
              { icon: Award, title: "Quality Focus", desc: "Clean code and exceptional user experiences", color: "from-yellow-400 to-orange-500" },
              { icon: Sparkles, title: "Innovation", desc: "Cutting-edge technologies and solutions", color: "from-indigo-400 to-purple-500" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl h-full hover:bg-white/10 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-white/70 text-lg">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="section-2" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Mastery of modern technologies and development frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "React", level: 95, color: "from-blue-400 to-cyan-500" },
              { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
              { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
              { name: "Python", level: 85, color: "from-yellow-400 to-yellow-600" },
              { name: "Next.js", level: 92, color: "from-gray-400 to-gray-600" },
              { name: "PostgreSQL", level: 87, color: "from-indigo-400 to-indigo-600" },
              { name: "AWS", level: 83, color: "from-orange-400 to-orange-600" },
              { name: "Docker", level: 80, color: "from-blue-500 to-cyan-600" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="url(#gradient-${index})"
                      strokeWidth="2"
                      strokeDasharray={`${skill.level}, 100`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={skill.color.split(' ')[1]} />
                        <stop offset="100%" stopColor={skill.color.split(' ')[3]} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">{skill.level}%</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="section-3" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Showcasing innovative solutions and cutting-edge development work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "E-Commerce Platform", 
                desc: "Full-stack Next.js application with Stripe integration",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              },
              { 
                title: "Real-Time Chat App", 
                desc: "WebSocket-based messaging with React and Node.js",
                tech: ["React", "Socket.io", "Node.js", "MongoDB"],
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              },
              { 
                title: "AI Dashboard", 
                desc: "Analytics platform with machine learning insights",
                tech: ["Python", "React", "TensorFlow", "AWS"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-sm text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="section-4" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ready to bring your digital vision to life? Let's connect and create something amazing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { icon: Mail, title: "Email Me", info: "hamza.chouaibi@example.com", color: "from-blue-400 to-cyan-500" },
              { icon: Phone, title: "Call Me", info: "+1 (555) 123-4567", color: "from-purple-400 to-pink-500" },
              { icon: MapPin, title: "Location", info: "Available Worldwide", color: "from-green-400 to-emerald-500" },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl h-full hover:bg-white/10 transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center mx-auto mb-6`}>
                      <contact.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{contact.title}</h3>
                    <p className="text-white/70 text-lg">{contact.info}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 px-16 py-6 text-xl font-semibold rounded-full border-0 shadow-2xl shadow-purple-500/25"
              onClick={() => window.open('mailto:hamza.chouaibi@example.com', '_blank')}
            >
              <Mail className="w-6 h-6 mr-3" />
              Start a Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/50 text-lg">
            © 2024 Hamza Chouaibi. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
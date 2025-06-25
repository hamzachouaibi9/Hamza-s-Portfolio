import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@assets/image_1750813172668.jpg";
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
  MapPin,
  Code,
  X,
  ExternalLink,
  Github,
  Menu
} from "lucide-react";
import { useState, useEffect } from "react";

export default function PremiumHome() {
  const [activeSection, setActiveSection] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className="fixed pointer-events-none mix-blend-difference"
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: 'white',
          opacity: '0.9',
          boxShadow: '0 0 10px rgba(255,255,255,0.5)',
          transition: 'transform 0.05s ease-out',
          willChange: 'transform',
          zIndex: 99999
        }}
      />

      {/* Smooth Cursor Trail */}
      <div
        id="cursor-trail"
        className="fixed pointer-events-none mix-blend-screen"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3))',
          filter: 'blur(4px)',
          transition: 'transform 0.15s ease-out',
          willChange: 'transform',
          zIndex: 99998
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
          {[...Array(200)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
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
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.button 
                  onClick={() => scrollToSection(4)}
                  className="relative px-8 py-4 bg-white text-black font-medium text-base tracking-wide uppercase overflow-hidden group"
                  style={{ borderRadius: '2px' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Start a Project
                    <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gray-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.2 }
                    }}
                  />
                </motion.button>
                
                <motion.button 
                  onClick={() => scrollToSection(3)}
                  className="relative px-8 py-4 bg-transparent border border-white/30 text-white font-medium text-base tracking-wide uppercase overflow-hidden group"
                  style={{ borderRadius: '2px' }}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: "rgba(255,255,255,0.6)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }}
                >
                  <span className="relative z-10">View Portfolio</span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.2 }
                    }}
                  />
                </motion.button>
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
      <section id="section-1" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Starry Background - Same as Hero */}
        <div className="absolute inset-0 bg-black">
          {/* Stars */}
          {[...Array(120)].map((_, i) => (
            <motion.div
              key={`about-star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-white tracking-tight">
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-white/30 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8 text-lg text-white/80 leading-relaxed font-light">
                <p>
                  I'm a passionate full-stack developer with 5+ years of experience building 
                  scalable web applications and mobile solutions. My journey in tech began 
                  with a curiosity for problem-solving and has evolved into a deep expertise 
                  in modern development practices.
                </p>
                <p>
                  Specializing in React, Node.js, and cloud technologies, I help businesses 
                  transform their ideas into powerful digital experiences. From startups to 
                  enterprise clients, I deliver solutions that drive growth and innovation.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <motion.div
                className="grid grid-cols-2 gap-8 pt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center group">
                  <motion.div 
                    className="text-4xl font-light text-white mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    50+
                  </motion.div>
                  <div className="text-white/50 text-sm uppercase tracking-wider">Projects Delivered</div>
                </div>
                <div className="text-center group">
                  <motion.div 
                    className="text-4xl font-light text-white mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    5+
                  </motion.div>
                  <div className="text-white/50 text-sm uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center group">
                  <motion.div 
                    className="text-4xl font-light text-white mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    25+
                  </motion.div>
                  <div className="text-white/50 text-sm uppercase tracking-wider">Happy Clients</div>
                </div>
                <div className="text-center group">
                  <motion.div 
                    className="text-4xl font-light text-white mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    100%
                  </motion.div>
                  <div className="text-white/50 text-sm uppercase tracking-wider">Client Satisfaction</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <div 
                  className="aspect-square bg-white/5 border border-white/10 overflow-hidden relative"
                  style={{ borderRadius: '2px' }}
                >
                  <motion.img
                    src={profileImage}
                    alt="Hamza Chouaibi - Full Stack Developer"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                  />
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.5px] pointer-events-none" />
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
                </div>
                
                {/* Floating Code Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-white/5 border border-white/10 p-4"
                  style={{ borderRadius: '2px' }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Code className="w-6 h-6 text-white/40" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white/5 border border-white/10 p-4"
                  style={{ borderRadius: '2px' }}
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  <Zap className="w-6 h-6 text-white/40" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Starry Background - Same as Hero */}
        <div className="absolute inset-0 bg-black">
          {/* Stars */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`expertise-star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-white tracking-tight">
              Professional Expertise
            </h2>
            <div className="w-16 h-0.5 bg-white/30 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Full-Stack Development",
                description: "End-to-end web application development using modern frameworks and technologies.",
                skills: ["React", "Node.js", "TypeScript", "PostgreSQL"]
              },
              {
                title: "Mobile Development",
                description: "Cross-platform mobile applications with native performance and user experience.",
                skills: ["React Native", "Flutter", "iOS", "Android"]
              },
              {
                title: "Cloud Architecture",
                description: "Scalable cloud solutions and infrastructure design for enterprise applications.",
                skills: ["AWS", "Docker", "Kubernetes", "Microservices"]
              },
              {
                title: "API Design",
                description: "RESTful and GraphQL APIs with comprehensive documentation and testing.",
                skills: ["REST", "GraphQL", "OpenAPI", "Testing"]
              },
              {
                title: "Database Design",
                description: "Efficient database schemas and optimization for high-performance applications.",
                skills: ["PostgreSQL", "MongoDB", "Redis", "Optimization"]
              },
              {
                title: "DevOps & CI/CD",
                description: "Automated deployment pipelines and infrastructure as code implementation.",
                skills: ["GitHub Actions", "Terraform", "Monitoring", "Automation"]
              }
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div 
                  className="bg-white/5 border border-white/10 p-8 h-full transition-all duration-300 group-hover:bg-white/10"
                  style={{ borderRadius: '2px' }}
                >
                  <h3 className="text-xl font-light text-white mb-4 group-hover:text-white/90 transition-colors">
                    {expertise.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
                    {expertise.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {expertise.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 border border-white/20 text-white/80 text-xs font-light tracking-wide uppercase"
                        style={{ borderRadius: '2px' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="section-3" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Starry Background - Same as Hero */}
        <div className="absolute inset-0 bg-black">
          {/* Stars */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`projects-star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="w-16 h-0.5 bg-white/30 mx-auto"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-16">
            {[
              {
                id: 1,
                title: "Enterprise E-Commerce Platform",
                category: "Full-Stack Development",
                description: "Comprehensive e-commerce solution with advanced inventory management, real-time analytics, and seamless payment processing. Built for scalability and performance.",
                tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
                highlights: ["99.9% Uptime", "1M+ Users", "Real-time Analytics", "Multi-vendor Support"],
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                longDescription: "This enterprise-grade e-commerce platform was built to handle millions of users and transactions. The system features advanced inventory management, real-time analytics, fraud detection, and seamless payment processing through multiple gateways. Built with modern technologies for maximum performance and scalability.",
                features: [
                  "Advanced inventory management system",
                  "Real-time analytics and reporting dashboard",
                  "Multi-vendor marketplace functionality", 
                  "Integrated payment processing with Stripe",
                  "Redis caching for optimal performance",
                  "Automated fraud detection system"
                ],
                challenges: "The main challenge was building a system that could scale to handle millions of concurrent users while maintaining sub-second response times and ensuring payment security.",
                outcome: "Successfully deployed with 99.9% uptime, processing over $10M in transactions monthly with zero security incidents.",
                link: "#",
                github: "#"
              },
              {
                id: 2,
                title: "Real-Time Collaboration Platform",
                category: "WebSocket Application", 
                description: "Professional collaboration tool featuring live document editing, video conferencing, and project management capabilities for distributed teams.",
                tech: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
                highlights: ["Live Collaboration", "Video Integration", "Role Management", "API Documentation"],
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                longDescription: "A comprehensive collaboration platform designed for distributed teams. Features include real-time document editing, video conferencing, project management tools, and role-based access control. Built with WebSocket technology for instant synchronization.",
                features: [
                  "Real-time collaborative document editing",
                  "Integrated video conferencing with WebRTC",
                  "Advanced project management tools",
                  "Role-based permission system",
                  "File sharing and version control",
                  "Mobile-responsive design"
                ],
                challenges: "Implementing real-time synchronization across multiple users while handling conflict resolution and maintaining data consistency was the primary technical challenge.",
                outcome: "Adopted by 500+ companies with 50,000+ active users. Reduced team communication overhead by 40% and improved project delivery times by 25%.",
                link: "#",
                github: "#"
              },
              {
                id: 3,
                title: "AI-Powered Analytics Dashboard",
                category: "Machine Learning",
                description: "Advanced data visualization platform with predictive analytics, automated reporting, and machine learning insights for business intelligence.",
                tech: ["Python", "React", "TensorFlow", "AWS", "D3.js"],
                highlights: ["Predictive Models", "Real-time Data", "Custom Reports", "Cloud Infrastructure"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                longDescription: "An intelligent analytics platform that combines traditional business intelligence with machine learning predictions. The system processes millions of data points in real-time and provides actionable insights through advanced visualizations.",
                features: [
                  "Machine learning prediction models",
                  "Real-time data processing pipeline",
                  "Interactive data visualizations with D3.js",
                  "Automated report generation",
                  "Custom dashboard builder",
                  "API integration with 50+ data sources"
                ],
                challenges: "Processing and analyzing massive datasets in real-time while maintaining accuracy of ML predictions and ensuring scalable infrastructure on AWS.",
                outcome: "Improved business decision-making speed by 60% and increased prediction accuracy to 94%. Used by Fortune 500 companies for strategic planning.",
                link: "#",
                github: "#"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div 
                  className="bg-white/5 border border-white/10 p-8 md:p-12 transition-all duration-300 group-hover:bg-white/10"
                  style={{ borderRadius: '2px' }}
                >
                  <div className="grid md:grid-cols-5 gap-8 items-start">
                    {/* Project Image */}
                    <div className="md:col-span-2">
                      <div 
                        className="aspect-video bg-white/5 border border-white/10 overflow-hidden"
                        style={{ borderRadius: '2px' }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <span className="text-white/50 text-sm uppercase tracking-wider font-light">
                          {project.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-light text-white mt-2 group-hover:text-white/90 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-white/70 text-lg leading-relaxed font-light">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 border border-white/20 text-white/80 text-xs font-light tracking-wide uppercase"
                            style={{ borderRadius: '2px' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <motion.button
                        className="inline-flex items-center text-white/60 hover:text-white transition-colors font-light tracking-wide uppercase text-sm"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => setSelectedProject(project)}
                      >
                        View Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    </div>
                    
                    {/* Project Highlights */}
                    <div className="space-y-4">
                      <h4 className="text-white/60 text-sm uppercase tracking-wider font-light">
                        Key Features
                      </h4>
                      <div className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-1 h-1 bg-white/40 rounded-full mr-3"></div>
                            <span className="text-white/70 text-sm font-light">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ zIndex: 1000 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-black border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            style={{ borderRadius: '2px' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors bg-black/50 p-2"
                style={{ borderRadius: '2px' }}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="text-white/60 text-sm uppercase tracking-wider font-light">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-light text-white mt-1">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Project Overview */}
              <div>
                <h3 className="text-xl font-light text-white mb-4">Project Overview</h3>
                <p className="text-white/70 leading-relaxed font-light">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Technology Stack */}
              <div>
                <h3 className="text-xl font-light text-white mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 border border-white/20 text-white/80 text-xs font-light tracking-wide uppercase"
                      style={{ borderRadius: '2px' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-light text-white mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-1 h-1 bg-white/40 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-white/70 text-sm font-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div>
                <h3 className="text-xl font-light text-white mb-4">Challenges & Solutions</h3>
                <p className="text-white/70 leading-relaxed font-light">
                  {selectedProject.challenges}
                </p>
              </div>

              {/* Outcome */}
              <div>
                <h3 className="text-xl font-light text-white mb-4">Results & Impact</h3>
                <p className="text-white/70 leading-relaxed font-light">
                  {selectedProject.outcome}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <motion.button
                  className="flex items-center px-6 py-3 bg-white text-black font-medium text-sm tracking-wide uppercase"
                  style={{ borderRadius: '2px' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </motion.button>
                <motion.button
                  className="flex items-center px-6 py-3 bg-transparent border border-white/30 text-white font-medium text-sm tracking-wide uppercase"
                  style={{ borderRadius: '2px' }}
                  whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.6)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Contact Section */}
      <section id="section-4" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Starry Background - Same as Hero */}
        <div className="absolute inset-0 bg-black">
          {/* Stars */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`contact-star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-white tracking-tight">
              Let's Work Together
            </h2>
            <div className="w-16 h-0.5 bg-white/30 mx-auto mb-8"></div>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              Ready to bring your digital vision to life? Let's connect and create something extraordinary.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { 
                  icon: Mail, 
                  title: "Email", 
                  info: "hamza.chouaibi9@hotmail.com",
                  action: () => window.open('mailto:hamza.chouaibi9@hotmail.com', '_blank')
                },
                { 
                  icon: Phone, 
                  title: "Phone", 
                  info: "(813) 551-8853",
                  action: () => window.open('tel:+18135518853', '_blank')
                },
                { 
                  icon: MapPin, 
                  title: "Location", 
                  info: "Available Worldwide",
                  action: null
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  className="group text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onClick={contact.action}
                  style={{ cursor: contact.action ? 'pointer' : 'default' }}
                >
                  <div 
                    className="bg-white/5 border border-white/10 p-8 transition-all duration-300 group-hover:bg-white/10"
                    style={{ borderRadius: '2px' }}
                  >
                    <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4" style={{ borderRadius: '2px' }}>
                      <contact.icon className="w-6 h-6 text-white/70" />
                    </div>
                    <h3 className="text-lg font-light text-white mb-3 group-hover:text-white/90 transition-colors">
                      {contact.title}
                    </h3>
                    <p className="text-white/60 text-sm font-light">
                      {contact.info}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call-to-Action */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-8 py-4 bg-white text-black font-medium text-base tracking-wide uppercase overflow-hidden group"
                style={{ borderRadius: '2px' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }}
                onClick={() => window.open('mailto:hamza.chouaibi9@hotmail.com', '_blank')}
              >
                <span className="relative z-10 flex items-center">
                  Start a Project
                  <Mail className="w-4 h-4 ml-3" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gray-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.2 }
                  }}
                />
              </motion.button>
              
              <p className="mt-6 text-white/50 text-sm font-light">
                Typically responds within 24 hours
              </p>
            </motion.div>
          </div>
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
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@assets/image_1750813172668.jpg";
import Lottie from "lottie-react";
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
  
  // Lottie animation data for hamburger menu
  const hamburgerAnimation = {
    "v": "5.7.4",
    "fr": 30,
    "ip": 0,
    "op": 30,
    "w": 24,
    "h": 24,
    "nm": "Hamburger to X",
    "ddd": 0,
    "assets": [],
    "layers": [
      {
        "ddd": 0,
        "ind": 1,
        "ty": 4,
        "nm": "Line 1",
        "sr": 1,
        "ks": {
          "o": {"a": 0, "k": 100},
          "r": {
            "a": 1,
            "k": [
              {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 0, "s": [0]},
              {"t": 15, "s": [45]}
            ]
          },
          "p": {"a": 0, "k": [12, 12, 0]},
          "a": {"a": 0, "k": [0, 0, 0]},
          "s": {"a": 0, "k": [100, 100, 100]}
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {"a": 0, "k": [16, 2]},
                "p": {"a": 0, "k": [0, 0]},
                "r": {"a": 0, "k": 1}
              },
              {
                "ty": "fl",
                "c": {"a": 0, "k": [1, 1, 1, 1]},
                "o": {"a": 0, "k": 100}
              }
            ]
          }
        ],
        "ip": 0,
        "op": 900,
        "st": 0
      },
      {
        "ddd": 0,
        "ind": 2,
        "ty": 4,
        "nm": "Line 2",
        "sr": 1,
        "ks": {
          "o": {
            "a": 1,
            "k": [
              {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 0, "s": [100]},
              {"t": 15, "s": [0]}
            ]
          },
          "r": {"a": 0, "k": 0},
          "p": {"a": 0, "k": [12, 12, 0]},
          "a": {"a": 0, "k": [0, 0, 0]},
          "s": {"a": 0, "k": [100, 100, 100]}
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {"a": 0, "k": [16, 2]},
                "p": {"a": 0, "k": [0, 0]},
                "r": {"a": 0, "k": 1}
              },
              {
                "ty": "fl",
                "c": {"a": 0, "k": [1, 1, 1, 1]},
                "o": {"a": 0, "k": 100}
              }
            ]
          }
        ],
        "ip": 0,
        "op": 900,
        "st": 0
      },
      {
        "ddd": 0,
        "ind": 3,
        "ty": 4,
        "nm": "Line 3",
        "sr": 1,
        "ks": {
          "o": {"a": 0, "k": 100},
          "r": {
            "a": 1,
            "k": [
              {"i": {"x": [0.667], "y": [1]}, "o": {"x": [0.333], "y": [0]}, "t": 0, "s": [0]},
              {"t": 15, "s": [-45]}
            ]
          },
          "p": {"a": 0, "k": [12, 12, 0]},
          "a": {"a": 0, "k": [0, 0, 0]},
          "s": {"a": 0, "k": [100, 100, 100]}
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {"a": 0, "k": [16, 2]},
                "p": {"a": 0, "k": [0, 0]},
                "r": {"a": 0, "k": 1}
              },
              {
                "ty": "fl",
                "c": {"a": 0, "k": [1, 1, 1, 1]},
                "o": {"a": 0, "k": 100}
              }
            ]
          }
        ],
        "ip": 0,
        "op": 900,
        "st": 0
      }
    ]
  };



  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(index);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

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
            
            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { label: 'About', section: 1 },
                { label: 'Expertise', section: 2 },
                { label: 'Projects', section: 3 },
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
                  
                  {/* Hover glow effect */}
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

            {/* Desktop CTA */}
            <motion.button 
              onClick={() => scrollToSection(4)}
              className="hidden lg:flex relative px-8 py-4 bg-gradient-to-r from-white/8 via-white/5 to-white/8 backdrop-blur-xl border border-white/20 text-white font-light text-[11px] tracking-[0.25em] uppercase overflow-hidden"
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

            {/* Mobile Menu Button with Lottie */}
            <motion.button
              className="lg:hidden relative p-3 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 relative">
                {isMobileMenuOpen ? (
                  <motion.div
                    initial={{ rotate: 0, scale: 0.8 }}
                    animate={{ rotate: 180, scale: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <X className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 180, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Menu className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </motion.div>
                )}
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Faster & Smoother */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-28 z-30"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 0.15, 
              ease: [0.23, 1, 0.32, 1] // Custom cubic-bezier for smooth motion
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/98 backdrop-blur-xl"
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(20px)" }}
              transition={{ duration: 0.15 }}
            >
              <div className="h-full flex flex-col justify-center">
                <div className="max-w-7xl mx-auto px-8 w-full">
                  <div className="space-y-6">
                    {[
                      { name: "About", section: 1 },
                      { name: "Expertise", section: 2 },
                      { name: "Projects", section: 3 },
                      { name: "Contact", section: 4 }
                    ].map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => {
                          scrollToSection(item.section);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`block w-full text-center py-4 text-2xl font-light tracking-[0.2em] uppercase transition-all duration-200 ${
                          activeSection === item.section 
                            ? 'text-white' 
                            : 'text-white/60 hover:text-white'
                        }`}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.2,
                          delay: index * 0.04, // Much faster stagger
                          ease: [0.23, 1, 0.32, 1]
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.15 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                    
                    {/* Mobile Work with me button */}
                    <motion.button
                      onClick={() => {
                        scrollToSection(4);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-white/8 via-white/5 to-white/8 backdrop-blur-xl border border-white/20 text-white font-light text-sm tracking-[0.25em] uppercase transition-all duration-200 hover:bg-white/10 hover:border-white/30"
                      style={{ borderRadius: "1px" }}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.2,
                        delay: 0.2, // Faster appearance
                        ease: [0.23, 1, 0.32, 1]
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.15 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Work With Me
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="section-0" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
        {/* Starry Background - Same as About Section */}
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
                className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="text-white block mb-3 font-extralight">Hamza Chouaibi</span>
                <span className="text-white/70 text-2xl md:text-3xl lg:text-4xl block font-light tracking-wide">
                  Full-Stack Developer
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Building exceptional digital experiences with modern technologies. 
                Specializing in scalable web applications that drive business growth 
                and deliver measurable results.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <a href="/start-project">
                  <motion.button 
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
                </a>
                
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


          </div>
        </div>


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

      {/* Process Section */}
      <section id="section-2" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Starry Background - Same as Hero */}
        <div className="absolute inset-0 bg-black">
          {/* Stars */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`process-star-${i}`}
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
              How We Work Together
            </h2>
            <div className="w-16 h-0.5 bg-white/30 mx-auto mb-6"></div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              From initial consultation to final launch, here's the proven process that transforms your vision into reality
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                duration: "30-60 minutes",
                description: "We discuss your vision, goals, and requirements. I'll analyze your business needs and provide expert recommendations on the best technical approach.",
                details: ["Project scope & timeline", "Technical requirements", "Budget discussion", "Success metrics"],
                icon: "💬"
              },
              {
                step: "02", 
                title: "Strategy & Planning",
                duration: "1-2 days",
                description: "I create a detailed project roadmap with wireframes, technical architecture, and development phases. You'll see exactly how your website will look and function.",
                details: ["Wireframes & mockups", "Technical architecture", "Development timeline", "Feature prioritization"],
                icon: "📋"
              },
              {
                step: "03",
                title: "Design & Development",
                duration: "1-4 weeks",
                description: "Your website comes to life with modern design and cutting-edge technology. I provide regular updates and gather your feedback throughout the process.",
                details: ["Responsive design", "Modern development", "Regular check-ins", "Quality assurance"],
                icon: "⚡"
              },
              {
                step: "04",
                title: "Testing & Optimization",
                duration: "3-5 days",
                description: "Comprehensive testing across all devices and browsers. Performance optimization ensures your site loads fast and ranks well on search engines.",
                details: ["Cross-browser testing", "Mobile optimization", "Performance tuning", "SEO optimization"],
                icon: "🔍"
              },
              {
                step: "05",
                title: "Launch & Support",
                duration: "1 day + ongoing",
                description: "Your website goes live with professional deployment. I provide training and ongoing support to ensure your continued success.",
                details: ["Professional deployment", "Training session", "Documentation", "30-day support"],
                icon: "🚀"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="relative mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Connection Line */}
                {index !== 4 && (
                  <div className="absolute left-1/2 top-32 w-0.5 h-16 bg-white/20 transform -translate-x-1/2 z-0" />
                )}

                <div className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  {/* Step Number & Icon */}
                  <div className={`text-center md:text-${index % 2 === 0 ? 'right' : 'left'} ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <motion.div
                      className="inline-flex items-center justify-center w-20 h-20 bg-white/5 border border-white/20 mb-4 relative"
                      style={{ borderRadius: '2px' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-2xl">{process.icon}</span>
                      <div className="absolute -top-2 -right-2 bg-white/10 border border-white/30 w-8 h-8 flex items-center justify-center text-xs text-white/80 font-light" style={{ borderRadius: '2px' }}>
                        {process.step}
                      </div>
                    </motion.div>
                    <div className="text-white/50 text-sm font-light uppercase tracking-wider">
                      {process.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <motion.div
                      className="bg-white/5 border border-white/10 p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5"
                      style={{ borderRadius: '2px' }}
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: "rgba(255,255,255,0.1)",
                        borderColor: "rgba(255,255,255,0.25)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-2xl font-light text-white mb-4">
                        {process.title}
                      </h3>
                      <p className="text-white/70 mb-6 leading-relaxed font-light">
                        {process.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {process.details.map((detail) => (
                          <div key={detail} className="flex items-center text-sm text-white/60">
                            <div className="w-1 h-1 bg-white/40 mr-3" style={{ borderRadius: '1px' }} />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href="/start-project">
              <motion.button
                className="bg-white/10 border border-white/20 text-white px-8 py-4 font-light tracking-wide uppercase transition-all duration-300 hover:bg-white/20 hover:border-white/40"
                style={{ borderRadius: '2px' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </a>
          </motion.div>
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
        {/* Starry Background */}
        <div className="absolute inset-0 bg-black">
          {[...Array(80)].map((_, i) => (
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
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
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
            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
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
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  onClick={contact.action}
                  style={{ cursor: contact.action ? 'pointer' : 'default' }}
                >
                  <div 
                    className="bg-white/5 border border-white/10 p-8 h-full transition-all duration-300 group-hover:bg-white/8 group-hover:border-white/20"
                    style={{ borderRadius: '2px' }}
                  >
                    <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/15 transition-all duration-300" style={{ borderRadius: '2px' }}>
                      <contact.icon className="w-6 h-6 text-white/70 group-hover:text-white/90 transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-light text-white mb-3 group-hover:text-white transition-colors duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-white/60 text-sm font-light group-hover:text-white/80 transition-colors duration-300">
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
              transition={{ 
                duration: 0.5,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1]
              }}
              viewport={{ once: true }}
            >
              <a href="/start-project">
                <motion.button
                  className="relative px-10 py-4 bg-white text-black font-medium text-base tracking-wide uppercase overflow-hidden group"
                  style={{ borderRadius: '2px' }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Start a Project
                    <ArrowRight className="w-4 h-4 ml-3" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gray-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ 
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  />
                </motion.button>
              </a>
              
              <motion.p 
                className="mt-8 text-white/50 text-sm font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Typically responds within 24 hours
              </motion.p>
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
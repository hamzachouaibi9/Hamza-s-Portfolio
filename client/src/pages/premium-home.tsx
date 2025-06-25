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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Cancel any pending animation frame to avoid lag
      cancelAnimationFrame(animationFrameId);
      
      // Use requestAnimationFrame for smooth, optimized updates
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
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
      {/* Interactive Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ 
          type: "spring", 
          damping: 30, 
          stiffness: 800,
          mass: 0.5,
          restDelta: 0.01
        }}
      >
        <div className="w-6 h-6 bg-white rounded-full opacity-90 shadow-lg" />
      </motion.div>

      {/* Cursor Trail Effect */}
      <motion.div
        className="fixed pointer-events-none z-40 mix-blend-screen"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 300,
          mass: 0.8
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-sm" />
      </motion.div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              LUXE
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Hero', 'Features', 'Showcase', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(index)}
                  className={`relative font-medium transition-colors ${
                    activeSection === index ? 'text-blue-400' : 'text-white/70 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item}
                  {activeSection === index && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                      layoutId="activeTab"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0"
              size="lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="section-0" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
          {/* Floating Orbs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-screen filter blur-xl"
              style={{
                background: `linear-gradient(45deg, ${['#3B82F6', '#8B5CF6', '#EC4899'][i % 3]}, transparent)`,
                width: `${200 + i * 50}px`,
                height: `${200 + i * 50}px`,
              }}
              animate={{
                x: [0, 100, 0, -100, 0],
                y: [0, -100, 0, 100, 0],
                scale: [1, 1.2, 1, 0.8, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
            />
          ))}
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Experience
            </Badge>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                LUXURY
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                REDEFINED
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              Experience the pinnacle of digital craftsmanship with our revolutionary platform
              that transforms possibilities into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-6 text-lg font-semibold rounded-full border-0 shadow-2xl shadow-blue-500/25"
              >
                <Play className="w-5 h-5 mr-3" />
                Watch Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-12 py-6 text-lg font-semibold rounded-full"
              >
                Explore Features
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Features Section */}
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
              Exceptional Features
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Every detail crafted to perfection for an unparalleled user experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance", color: "from-yellow-400 to-orange-500" },
              { icon: Shield, title: "Ultra Secure", desc: "Bank-level security protocols", color: "from-green-400 to-emerald-500" },
              { icon: Globe, title: "Global Scale", desc: "Worldwide infrastructure", color: "from-blue-400 to-cyan-500" },
              { icon: Users, title: "Team Collaboration", desc: "Seamless team workflows", color: "from-purple-400 to-pink-500" },
              { icon: Award, title: "Premium Support", desc: "24/7 dedicated assistance", color: "from-red-400 to-rose-500" },
              { icon: Sparkles, title: "AI Powered", desc: "Next-gen intelligence", color: "from-indigo-400 to-purple-500" },
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

      {/* Showcase Section */}
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
              Portfolio Showcase
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Witness the extraordinary results we've achieved for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/80 text-lg">Rated 5/5 by 10,000+ users</span>
                </div>
                
                <h3 className="text-4xl font-bold text-white">
                  Transform Your Digital Presence
                </h3>
                
                <p className="text-xl text-white/70 leading-relaxed">
                  From concept to execution, we deliver extraordinary digital experiences 
                  that captivate audiences and drive results beyond expectations.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-xl">
                    <div className="text-3xl font-bold text-blue-400 mb-2">500%</div>
                    <div className="text-white/70">Growth Rate</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-xl">
                    <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-white/70">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-3xl blur-xl" />
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Premium showcase"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="section-3" className="py-32 relative">
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
              Ready to Begin?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Let's create something extraordinary together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { icon: Mail, title: "Email Us", info: "hello@luxe.com", color: "from-blue-400 to-cyan-500" },
              { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567", color: "from-purple-400 to-pink-500" },
              { icon: MapPin, title: "Visit Us", info: "New York, NY", color: "from-green-400 to-emerald-500" },
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
            >
              <Download className="w-6 h-6 mr-3" />
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/50 text-lg">
            © 2024 LUXE. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
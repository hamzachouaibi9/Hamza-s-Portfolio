import { useState, useEffect } from "react";
import { Menu, X, Zap, Globe, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About", icon: Globe },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "projects", label: "Projects", icon: Code2 },
    { id: "contact", label: "Contact", icon: Menu },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-2xl shadow-primary/5" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection("hero")}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center shadow-lg group-hover:shadow-primary/25 transition-all duration-300"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-xl">H</span>
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Hamza Chouaibi
                </h1>
                <p className="text-xs text-muted-foreground font-medium">Full-Stack Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-2xl p-2 border border-primary/20">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive 
                        ? "text-white shadow-lg" 
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={false}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
                        layoutId="navActiveBackground"
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      />
                    )}
                    <Icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">{item.label}</span>
                    {!isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ opacity: 1 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                Let's Talk
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 w-full px-4 py-3 text-left text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                );
              })}
              <motion.div
                className="pt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-xl shadow-lg"
                >
                  Let's Talk
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

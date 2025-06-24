import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-muted to-background py-12 border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-lg mb-6">
            © 2025 Hamza Chouaibi. All rights reserved.
          </p>
          <div className="flex justify-center space-x-8">
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative"
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10">Privacy Policy</span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative"
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10">Terms of Service</span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

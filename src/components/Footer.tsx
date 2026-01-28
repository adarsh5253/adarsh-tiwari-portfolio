import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            <a href="#" className="text-xl font-bold gradient-text">
              AT.
            </a>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:adarshtiwari@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground text-sm flex items-center gap-1"
          >
            © {currentYear} Adarsh Tiwari. Built with{' '}
            <Heart size={14} className="text-destructive fill-destructive" /> using React
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

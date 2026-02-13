import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'ABOUT', href: '#about', id: '01' },
  { name: 'SKILLS', href: '#skills', id: '02' },
  { name: 'PROJECTS', href: '#projects', id: '03' },
  { name: 'EDUCATION', href: '#education', id: '04' },
  { name: 'CONTACT', href: '#contact', id: '05' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'holo-panel py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Terminal className="text-primary" size={20} />
          <span className="font-cyber text-lg text-primary text-glow-cyan tracking-widest">AT_</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="group px-4 py-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-primary/40 text-xs mr-1">{link.id}.</span>
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_5px_hsl(var(--neon-cyan))]" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="cyber-btn ml-4 py-2 px-4 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">HIRE_ME</span>
          </motion.a>
        </div>

        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden holo-panel mt-2 mx-4 rounded-lg overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-sm text-muted-foreground hover:text-primary py-2 px-3 hover:bg-primary/5 rounded transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-primary/40 mr-2">{link.id}.</span>{link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="cyber-btn text-center mt-2 py-2 text-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">HIRE_ME</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

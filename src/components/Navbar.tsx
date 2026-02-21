import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const smoothScrollTo = (targetId: string) => {
  const el = document.querySelector(targetId);
  if (!el) return;

  // Add a brief 3D perspective zoom effect to the page
  const main = document.querySelector('main');
  if (main) {
    main.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s ease';
    main.style.transform = 'perspective(1200px) scale(0.95) rotateX(2deg)';
    main.style.opacity = '0.7';

    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      main.style.transform = 'perspective(1200px) scale(1) rotateX(0deg)';
      main.style.opacity = '1';
    }, 250);

    setTimeout(() => {
      main.style.transition = '';
      main.style.transform = '';
      main.style.opacity = '';
    }, 900);
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

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
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-card !rounded-none py-3 border-x-0 border-t-0' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a href="#" className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="font-display font-bold text-primary text-sm">A</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground">Adarsh<span className="text-primary">.</span></span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); smoothScrollTo(link.href); }}
              className="px-4 py-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('#contact'); }}
            className="btn-premium btn-primary ml-4 py-2 px-5 text-xs rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
        </div>

        <button className="md:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-2 mx-4 !rounded-xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground py-3 px-4 hover:bg-primary/5 rounded-lg transition-all"
                  onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); smoothScrollTo(link.href); }}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-premium btn-primary text-center mt-2 py-2.5 text-xs rounded-lg"
                onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); smoothScrollTo('#contact'); }}>
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-primary/10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-primary" />
              <span className="font-cyber text-sm text-primary text-glow-cyan tracking-widest">AT_</span>
            </div>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: 'mailto:adarshtiwari@example.com' },
              ].map((s, i) => (
                <a key={i} href={s.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground text-xs font-mono">
            © {currentYear} ADARSH_TIWARI // BUILT_WITH <span className="text-primary">REACT</span> + <span className="text-accent">FRAMER</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

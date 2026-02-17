import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border/50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
                <span className="font-display font-bold text-primary text-xs">A</span>
              </div>
              <span className="font-display font-semibold text-foreground">Adarsh<span className="text-primary">.</span></span>
            </div>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: 'https://github.com/users/adarsh5253/succession/invitation' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/adarsh-tiwari-424a45315' },
                { icon: Mail, href: 'mailto:adarshtiwari5122002@gmail.com' },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-muted-foreground hover:text-primary transition-colors">
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground text-xs font-body">
            © {currentYear} Adarsh Tiwari. Built with <span className="text-primary">React</span> + <span className="text-accent">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
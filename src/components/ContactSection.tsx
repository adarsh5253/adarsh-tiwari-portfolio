import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent successfully!');
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'adarshtiwari5122002@gmail.com', href: 'mailto:adarshtiwari5122002@gmail.com', color: 'hsl(190 100% 55%)' },
    { icon: Phone, label: 'Phone', value: '+91 6388143458', href: 'tel:+916388143458', color: 'hsl(270 100% 70%)' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Adarsh Tiwari', href: 'https://www.linkedin.com/in/adarsh-tiwari-424a45315', color: 'hsl(210 100% 60%)' },
    { icon: Github, label: 'GitHub', value: 'adarsh5253', href: 'https://github.com/users/adarsh5253/succession/invitation', color: 'hsl(330 90% 65%)' },
    { icon: MapPin, label: 'Location', value: 'Lucknow, UP, India', href: '#', color: 'hsl(160 80% 50%)' },
  ];

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[250px] pointer-events-none"
        style={{ background: 'hsl(190 100% 55% / 0.05)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 14 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="text-center mb-20"
          style={{ perspective: '800px' }}
        >
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'hsl(190 100% 55% / 0.5)' }}>Contact</span>
          <h2 className="section-heading mt-3">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: -18 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            style={{ perspective: '1000px' }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="holo-card float-3d p-7">
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">Let's work together</h3>
              <p className="text-muted-foreground mb-8 font-body">
                Open to discussing projects, creative ideas, or collaboration opportunities.
              </p>

              <div className="space-y-2">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -30, rotateY: -10 }}
                    animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.09, ease: [0.23, 1, 0.32, 1] }}
                    className="flex items-center gap-4 p-3.5 rounded-xl transition-all group border border-transparent"
                    style={{ perspective: '600px' }}
                    whileHover={{
                      background: `${info.color}08`,
                      borderColor: `${info.color}20`,
                      x: 4,
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
                      style={{ background: `${info.color}10`, border: `1px solid ${info.color}25` }}
                    >
                      <info.icon style={{ color: info.color }} size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-muted-foreground text-[11px] font-mono">{info.label}</p>
                      <p className="font-body text-foreground text-sm truncate">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: 18 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            style={{ perspective: '1000px' }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="holo-card float-3d p-7 md:p-9">
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-body text-muted-foreground mb-2">Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="input-premium" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-body text-muted-foreground mb-2">Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="input-premium" placeholder="your@email.com" />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-xs font-body text-muted-foreground mb-2">Subject</label>
                <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="input-premium" placeholder="What's this about?" />
              </div>
              <div className="mb-7">
                <label className="block text-xs font-body text-muted-foreground mb-2">Message</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="input-premium resize-none" placeholder="Tell me about your project..." />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 py-4"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

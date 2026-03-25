import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.blog, href: '#blog' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="font-display text-2xl font-semibold tracking-wide text-foreground">
          Floral Marks
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="ml-4 px-3 py-1 text-xs font-body tracking-widest uppercase border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); setOpen(false); }}
                className="px-3 py-1 text-xs font-body tracking-widest uppercase border border-border rounded-sm text-muted-foreground"
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

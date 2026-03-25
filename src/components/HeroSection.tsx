import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import heroImage from '@/assets/bookmark-collection.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Handmade watercolor bookmarks collection"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground max-w-4xl leading-tight"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-lg md:text-xl text-primary-foreground/80 mt-6 max-w-xl tracking-wide"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-primary-foreground/90 text-foreground font-body text-sm tracking-widest uppercase hover:bg-primary-foreground transition-colors"
          >
            {t.hero.cta}
          </a>
          <a
            href="https://wa.me/34616935443"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary-foreground/60 text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors"
          >
            {t.hero.ctaWhatsapp}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

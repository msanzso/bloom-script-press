import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import weddingImg from '@/assets/bookmark-wedding.jpg';

const OccasionsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={weddingImg} alt="Wedding bookmarks" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-light text-primary-foreground mb-12"
        >
          {t.occasions.title}
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {t.occasions.items.map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="px-6 py-2.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground font-body text-sm tracking-wide"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OccasionsSection;

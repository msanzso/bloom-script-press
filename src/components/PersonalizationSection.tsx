import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import detailImg from '@/assets/bookmark-detail.jpg';

const PersonalizationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">{t.personalization.title}</h2>
            <p className="font-body text-muted-foreground mb-10 text-lg">{t.personalization.subtitle}</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-display font-bold text-sm shrink-0 mt-1">1</span>
                <p className="font-body text-foreground">{t.personalization.option1}</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-display font-bold text-sm shrink-0 mt-1">2</span>
                <p className="font-body text-foreground">{t.personalization.option2}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img src={detailImg} alt="Personalized bookmark" className="w-full aspect-[3/4] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationSection;

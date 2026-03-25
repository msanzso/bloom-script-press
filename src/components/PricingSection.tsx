import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">{t.pricing.title}</h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">{t.pricing.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {t.pricing.tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`p-8 text-center border transition-shadow ${
                i === 1
                  ? 'border-gold bg-background shadow-lg'
                  : 'border-border bg-background/50'
              }`}
            >
              <h3 className="font-display text-2xl font-semibold text-foreground">{tier.name}</h3>
              <p className="font-body text-sm text-muted-foreground mt-1">{tier.range}</p>
              <div className="mt-6 mb-4">
                <span className="font-display text-5xl font-light text-foreground">{tier.price}</span>
                <span className="font-body text-sm text-muted-foreground">{tier.unit}</span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{tier.desc}</p>
              <a
                href="#contact"
                className={`inline-block mt-8 px-6 py-2.5 font-body text-xs tracking-widest uppercase transition-colors ${
                  i === 1
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {t.pricing.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import productImg from '@/assets/bookmark-product-1.jpg';
import processImg from '@/assets/bookmark-process.jpg';
import detailImg from '@/assets/bookmark-detail.jpg';

const ProductSection = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-24 md:py-32 bg-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">{t.product.title}</h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">{t.product.subtitle}</p>
        </motion.div>

        {/* Large image grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {[productImg, processImg, detailImg].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <img src={img} alt="Bookmark detail" className="w-full aspect-[3/4] object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.product.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

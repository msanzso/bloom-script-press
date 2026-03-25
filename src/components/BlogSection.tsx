import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import collectionImg from '@/assets/bookmark-collection.jpg';
import processImg from '@/assets/bookmark-process.jpg';
import weddingImg from '@/assets/bookmark-wedding.jpg';

const blogImages = [collectionImg, processImg, weddingImg];

const BlogSection = () => {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">{t.blog.title}</h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">{t.blog.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.blog.posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-5">
                <img
                  src={blogImages[i]}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">{post.date}</p>
              <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

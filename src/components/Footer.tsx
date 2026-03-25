import { useLanguage } from '@/i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-2xl mb-2">Floral Marks</p>
        <p className="font-body text-sm text-primary-foreground/60 italic">{t.footer.tagline}</p>
        <p className="font-body text-xs text-primary-foreground/40 mt-6">
          © {new Date().getFullYear()} Floral Marks. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

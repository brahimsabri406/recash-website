import { Link } from 'react-router-dom';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang].footer;

  return (
    <footer className="bg-surface-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Recash" className="h-10 w-10" />
              <span className="text-2xl font-bold text-primary">Recash</span>
            </div>
            <p className="text-foreground-secondary text-sm">
              {translations[currentLang].hero.subtitle}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
            <div className="space-y-2">
              <Link to="/cashback" className="block text-sm text-foreground-secondary hover:text-primary transition-colors">
                {translations[currentLang].nav.cashback}
              </Link>
              <Link to="/health" className="block text-sm text-foreground-secondary hover:text-primary transition-colors">
                {translations[currentLang].nav.health}
              </Link>
              <Link to="/pricing" className="block text-sm text-foreground-secondary hover:text-primary transition-colors">
                {translations[currentLang].nav.pricing}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Légal</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-sm text-foreground-secondary hover:text-primary transition-colors">
                {t.privacy}
              </Link>
              <Link to="/legal" className="block text-sm text-foreground-secondary hover:text-primary transition-colors">
                {t.legal}
              </Link>
              <Link to="/contact" className="block text-sm text-foreground-secondary hover:text-primary transition-colors">
                {t.contact}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground-secondary">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}

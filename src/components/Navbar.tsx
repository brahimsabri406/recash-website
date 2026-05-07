import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ currentLang, onLanguageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const t = translations[currentLang].nav;

  const links = [
    { to: '/', label: t.home },
    { to: '/cashback', label: t.cashback },
    { to: '/health', label: t.health },
    { to: '/compare', label: t.compare },
    { to: '/family', label: t.family },
    { to: '/pricing', label: t.pricing },
    { to: '/ethics', label: t.ethics },
    { to: '/faq', label: t.faq },
    { to: '/contact', label: t.contact }
  ];

  return (
    <nav className="fixed top-0 w-full bg-surface-primary/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Recash" className="h-10 w-10" />
            <span className="text-2xl font-bold text-primary">Recash</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? 'text-primary' : 'text-foreground-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-surface-primary">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.to ? 'text-primary' : 'text-foreground-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
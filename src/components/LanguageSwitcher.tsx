import { Globe } from 'lucide-react';
import { useState } from 'react';
import type { Language } from '../i18n/translations';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages: { code: Language; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
  { code: 'de', label: 'DE' }
];

export default function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-secondary hover:bg-surface-tertiary transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">{currentLang.toUpperCase()}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-32 bg-surface-primary rounded-lg shadow-xl border border-border z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-surface-secondary transition-colors ${
                currentLang === lang.code ? 'text-primary font-semibold' : 'text-foreground'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cashback from './pages/Cashback';
import Health from './pages/Health';
import Compare from './pages/Compare';
import Family from './pages/Family';
import Pricing from './pages/Pricing';
import Ethics from './pages/Ethics';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';
import type { Language } from './i18n/translations';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('recash-lang') as Language;
    if (savedLang && ['fr', 'en', 'es', 'pt', 'de'].includes(savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('recash-lang', lang);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar currentLang={currentLang} onLanguageChange={handleLanguageChange} />
        <Routes>
          <Route path="/" element={<Home currentLang={currentLang} />} />
          <Route path="/cashback" element={<Cashback currentLang={currentLang} />} />
          <Route path="/health" element={<Health currentLang={currentLang} />} />
          <Route path="/compare" element={<Compare currentLang={currentLang} />} />
          <Route path="/family" element={<Family currentLang={currentLang} />} />
          <Route path="/pricing" element={<Pricing currentLang={currentLang} />} />
          <Route path="/ethics" element={<Ethics currentLang={currentLang} />} />
          <Route path="/faq" element={<FAQ currentLang={currentLang} />} />
          <Route path="/contact" element={<Contact currentLang={currentLang} />} />
          <Route path="/privacy" element={<Privacy currentLang={currentLang} />} />
          <Route path="/legal" element={<Legal currentLang={currentLang} />} />
        </Routes>
        <Footer currentLang={currentLang} />
      </div>
    </BrowserRouter>
  );
}

export default App;

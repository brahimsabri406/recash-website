import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Award } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface HealthProps {
  currentLang: Language;
}

export default function Health({ currentLang }: HealthProps) {
  const t = translations[currentLang].healthPage;

  const allergens = t.allergensList.split(', ');
  const additives = t.additivesList.split(', ');

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Allergen Detection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-secondary rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-8 h-8 text-teal-500 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-3 text-foreground">{t.allergens}</h2>
              <p className="text-foreground-secondary mb-6">{t.allergensText}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allergens.map((allergen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-surface-primary rounded-lg p-4 text-center font-medium text-foreground shadow-md"
              >
                {allergen}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dangerous Additives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-3 text-foreground">{t.additives}</h2>
              <p className="text-foreground-secondary mb-6">{t.additivesText}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additives.map((additive, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-primary rounded-lg p-4 font-medium text-foreground shadow-md"
              >
                {additive}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nutri-Score & NOVA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-secondary rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-3 text-foreground">{t.nutriscore}</h2>
              <p className="text-foreground-secondary mb-6">{t.nutriscoreText}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-3 text-foreground">Nutri-Score</h3>
                  <div className="flex gap-2">
                    {['A', 'B', 'C', 'D', 'E'].map((score, index) => (
                      <div
                        key={score}
                        className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white ${
                          index === 0 ? 'bg-green-600' :
                          index === 1 ? 'bg-lime-500' :
                          index === 2 ? 'bg-yellow-500' :
                          index === 3 ? 'bg-orange-500' :
                          'bg-red-600'
                        }`}
                      >
                        {score}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-foreground">NOVA</h3>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((nova) => (
                      <div
                        key={nova}
                        className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white ${
                          nova === 1 ? 'bg-green-600' :
                          nova === 2 ? 'bg-yellow-500' :
                          nova === 3 ? 'bg-orange-500' :
                          'bg-red-600'
                        }`}
                      >
                        {nova}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
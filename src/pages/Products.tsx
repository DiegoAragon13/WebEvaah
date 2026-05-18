import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Check, X } from 'lucide-react'
import { Pricing } from '../components/sections/Pricing'
import { Accordion } from '../components/ui/Accordion'

const compareFeatures = [
  { feature: 'Módulo hardware NEMIKI', kit: true, b2b: true, enterprise: true },
  { feature: 'App móvil ARGOS (on-device)', kit: true, b2b: true, enterprise: true },
  { feature: 'Diagnóstico LLM + RAG', kit: true, b2b: true, enterprise: true },
  { feature: 'Análisis Weibull de vida útil', kit: false, b2b: true, enterprise: true },
  { feature: 'Multi-usuario (hasta 10)', kit: false, b2b: true, enterprise: true },
  { feature: 'Dashboard web', kit: false, b2b: true, enterprise: true },
  { feature: 'ARGOS Pro (Gemini Vision)', kit: false, b2b: true, enterprise: true },
  { feature: 'Historial ilimitado', kit: false, b2b: true, enterprise: true },
  { feature: 'VPC dedicada AWS', kit: false, b2b: false, enterprise: true },
  { feature: 'SLA garantizado', kit: false, b2b: false, enterprise: true },
  { feature: 'Onboarding personalizado', kit: false, b2b: false, enterprise: true },
]

export function Products() {
  const { t } = useTranslation()
  const faqItems = t('products.faqItems', { returnObjects: true }) as { q: string; a: string }[]

  return (
    <div className="pt-16">
      <Pricing />

      {/* Compare table */}
      <section className="py-16 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display font-bold text-2xl text-center text-[var(--text-primary)] mb-10"
          >
            {t('products.compare')}
          </motion.h2>
          <div className="overflow-x-auto rounded-2xl border border-[var(--border-default)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--background-surface)] border-b border-[var(--border-default)]">
                  <th className="text-left px-6 py-4 text-[var(--text-secondary)] font-medium">Característica</th>
                  <th className="px-6 py-4 text-[#00C8D7] font-display font-bold">Kit Directo</th>
                  <th className="px-6 py-4 text-[#00C8D7] font-display font-bold">B2B Cloud</th>
                  <th className="px-6 py-4 text-[#00C8D7] font-display font-bold">On-Premise</th>
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((row, i) => (
                  <tr key={i} className={`border-b border-[var(--border-default)] ${i % 2 === 0 ? 'bg-[var(--background-surface)]' : 'bg-[var(--background-secondary)]'}`}>
                    <td className="px-6 py-3 text-[var(--text-primary)]">{row.feature}</td>
                    {(['kit', 'b2b', 'enterprise'] as const).map(tier => (
                      <td key={tier} className="px-6 py-3 text-center">
                        {row[tier]
                          ? <Check size={16} className="text-[#3EBF7A] mx-auto" />
                          : <X size={16} className="text-[var(--text-secondary)] mx-auto opacity-40" />
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display font-bold text-2xl text-center text-[var(--text-primary)] mb-10"
          >
            {t('products.faq')}
          </motion.h2>
          <Accordion items={faqItems} />
        </div>
      </section>
    </div>
  )
}

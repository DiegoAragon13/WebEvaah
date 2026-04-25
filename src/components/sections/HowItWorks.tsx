import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Plug, Camera, Zap } from 'lucide-react'

const icons = [Plug, Camera, Zap]

export function HowItWorks() {
  const { t } = useTranslation()
  const steps = ['step1', 'step2', 'step3'] as const

  return (
    <section id="how" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl text-center text-[var(--text-primary)] mb-16"
        >
          {t('howItWorks.title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-[#00C8D7]/40 to-transparent" />
          {steps.map((step, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-[var(--accent-subtle,#003F44)] border border-[#00C8D7]/30 flex items-center justify-center mb-6 relative">
                  <Icon size={32} className="text-[#00C8D7]" />
                  <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#00C8D7] text-[#0D1117] text-xs font-bold flex items-center justify-center font-display">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-3">{t(`howItWorks.${step}.title`)}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{t(`howItWorks.${step}.desc`)}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Plug, Camera, Zap } from 'lucide-react'

const icons = [Plug, Camera, Zap]
const colors = ['#00C8D7', '#3EBF7A', '#F5A623']

export function HowItWorks() {
  const { t } = useTranslation()
  const steps = ['step1', 'step2', 'step3'] as const

  return (
    <section id="how" className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00C8D7]">Proceso</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[var(--text-primary)] mt-2">
            {t('howItWorks.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
          {steps.map((step, i) => {
            const Icon = icons[i]
            const color = colors[i]
            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.55 }}
                className="flex sm:flex-col items-start gap-5 sm:gap-0"
              >
                {/* Icon + number */}
                <div
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 sm:mb-6"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={26} style={{ color }} />
                  <span
                    className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center font-display"
                    style={{ background: color }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--text-primary)] mb-2">
                    {t(`howItWorks.${step}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {t(`howItWorks.${step}.desc`)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

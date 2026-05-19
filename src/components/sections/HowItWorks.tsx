import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Plug, Camera, Zap } from 'lucide-react'

const steps = [
  { icon: Plug, color: '#00C8D7', key: 'step1' as const },
  { icon: Camera, color: '#3EBF7A', key: 'step2' as const },
  { icon: Zap, color: '#F5A623', key: 'step3' as const },
]

export function HowItWorks() {
  const { t } = useTranslation()

  return (
    <section id="how" className="py-28 bg-[var(--background-primary)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C8D7] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#3EBF7A] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C8D7] mb-3">
            Proceso
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[var(--text-primary)]">
            {t('howItWorks.title')}
          </h2>
        </motion.div>

        {/* Steps - Desktop: horizontal with connecting lines */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00C8D7] via-[#3EBF7A] to-[#F5A623] opacity-20" />
          
          <div className="grid grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="relative bg-[var(--background-surface)] rounded-3xl p-8 border border-[var(--border-default)] hover:border-opacity-50 transition-all duration-300 hover:shadow-2xl group">
                    {/* Glow effect */}
                    <div 
                      className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                      style={{ background: `${step.color}20` }}
                    />
                    
                    <div className="relative">
                      {/* Icon circle */}
                      <div className="relative mx-auto w-24 h-24 mb-6">
                        <div 
                          className="absolute inset-0 rounded-full animate-pulse"
                          style={{ background: `${step.color}15` }}
                        />
                        <div 
                          className="relative w-full h-full rounded-full flex items-center justify-center"
                          style={{ background: `${step.color}25`, border: `2px solid ${step.color}` }}
                        >
                          <Icon size={36} style={{ color: step.color }} />
                        </div>
                        {/* Step number badge */}
                        <div 
                          className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-lg shadow-lg"
                          style={{ background: step.color }}
                        >
                          {i + 1}
                        </div>
                      </div>

                      {/* Text */}
                      <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3 text-center">
                        {t(`howItWorks.${step.key}.title`)}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed text-center">
                        {t(`howItWorks.${step.key}.desc`)}
                      </p>
                    </div>
                  </div>

                  {/* Arrow connector (except last) */}
                  {i < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.4 }}
                      className="absolute top-24 -right-4 z-20"
                    >
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path 
                          d="M4 16H28M28 16L20 8M28 16L20 24" 
                          stroke={step.color} 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Steps - Mobile/Tablet: vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex items-start gap-5 bg-[var(--background-surface)] rounded-2xl p-6 border border-[var(--border-default)]">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: `${step.color}20`, border: `2px solid ${step.color}` }}
                    >
                      <Icon size={28} style={{ color: step.color }} />
                    </div>
                    <div 
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-white text-sm"
                      style={{ background: step.color }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-1">
                    <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2">
                      {t(`howItWorks.${step.key}.title`)}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {t(`howItWorks.${step.key}.desc`)}
                    </p>
                  </div>
                </div>

                {/* Vertical connector (except last) */}
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M12 4V20M12 20L6 14M12 20L18 14" 
                        stroke={step.color} 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

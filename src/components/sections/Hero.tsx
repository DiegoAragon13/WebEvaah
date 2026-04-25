import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'
import { useNavigate } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

function DiagnosticMockup() {
  const { t } = useTranslation()
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative w-72 bg-[var(--background-surface)] border border-[var(--border-default)] rounded-2xl p-5 shadow-2xl shadow-[#00C8D7]/10"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-display font-bold text-sm text-[#00C8D7]">{t('hero.mockup.title')}</span>
        <span className="text-xs px-2 py-1 rounded-full bg-[#3EBF7A]/20 text-[#3EBF7A] font-semibold">{t('hero.mockup.status')}</span>
      </div>
      <div className="mb-4 p-3 rounded-xl bg-[var(--background-secondary)] border border-[var(--border-default)]">
        <p className="text-xs text-[var(--text-secondary)] mb-1">Componente detectado</p>
        <p className="font-semibold text-[var(--text-primary)] text-sm">{t('hero.mockup.component')}</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: t('hero.mockup.voltage'), value: '3.3V', color: '#3EBF7A' },
          { label: t('hero.mockup.current'), value: '120mA', color: '#F5A623' },
          { label: t('hero.mockup.temp'), value: '42°C', color: '#00C8D7' },
        ].map(m => (
          <div key={m.label} className="p-2 rounded-lg bg-[var(--background-secondary)] text-center">
            <p className="text-xs text-[var(--text-secondary)]">{m.label}</p>
            <p className="font-bold text-sm mt-1" style={{ color: m.color }}>{m.value}</p>
          </div>
        ))}
      </div>
      {/* Animated pulse */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#00C8D7]"
      />
    </motion.div>
  )
}

export function Hero() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center pcb-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background-primary)] via-[var(--background-primary)] to-[var(--accent-subtle,#003F44)] opacity-95" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 {...fadeUp(0)} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] leading-tight">
              {t('hero.tagline')}
            </motion.h1>
            <motion.p {...fadeUp(0.1)} className="mt-6 text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </motion.p>
            <motion.div {...fadeUp(0.2)} className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => navigate('/productos')}>{t('hero.cta1')}</Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('hero.cta2')}
              </Button>
            </motion.div>
          </div>
          <div className="flex-shrink-0">
            <DiagnosticMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

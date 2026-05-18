import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/Button'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Cpu, Wifi, Brain, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

function AppMockup() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[360px] mx-auto lg:mx-0"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-[#00C8D7]/15 blur-2xl scale-105 pointer-events-none" />

      <div className="relative rounded-3xl overflow-hidden border border-[#00C8D7]/25 bg-[var(--background-surface)] shadow-2xl">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <span className="font-display font-bold text-base text-[var(--text-primary)]">NEMIKI</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-[#3EBF7A]">
            <span className="w-2 h-2 rounded-full bg-[#3EBF7A] animate-pulse" />
            {t('hero.mockup.status')}
          </span>
        </div>

        <div className="h-px bg-[var(--border-default)] mx-5" />

        <div className="p-4 sm:p-5 space-y-3">
          {/* Detected component */}
          <div className="rounded-2xl bg-[var(--background-secondary)] p-3 sm:p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00C8D7]/15 flex items-center justify-center flex-shrink-0">
              <Cpu size={20} className="text-[#00C8D7]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest mb-0.5">
                Componente detectado
              </p>
              <p className="font-display font-bold text-sm text-[var(--text-primary)] truncate">
                {t('hero.mockup.component')}
              </p>
            </div>
            <CheckCircle size={15} className="text-[#3EBF7A] flex-shrink-0" />
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: t('hero.mockup.voltage'), value: '3.3V',  color: '#3EBF7A' },
              { label: t('hero.mockup.current'), value: '120mA', color: '#F5A623' },
              { label: t('hero.mockup.temp'),    value: '42°C',  color: '#00C8D7' },
            ].map(m => (
              <div key={m.label} className="rounded-xl p-2.5 text-center bg-[var(--background-secondary)]">
                <p className="text-[10px] text-[var(--text-secondary)] mb-1">{m.label}</p>
                <p className="font-display font-bold text-sm sm:text-base" style={{ color: m.color }}>{m.value}</p>
              </div>
            ))}
          </div>

          {/* Trend chart */}
          <div className="rounded-2xl bg-[var(--background-secondary)] p-3 flex items-center gap-3">
            <TrendingUp size={15} className="text-[#3EBF7A] flex-shrink-0" />
            <div className="flex-1">
              <div className="flex gap-1 items-end h-5">
                {[3, 5, 4, 6, 5, 7, 6, 8, 7, 9].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
                    className="flex-1 rounded-sm origin-bottom"
                    style={{ height: `${h * 10}%`, background: i === 9 ? '#00C8D7' : '#00C8D730' }}
                  />
                ))}
              </div>
            </div>
            <span className="text-[10px] text-[#3EBF7A] font-semibold whitespace-nowrap">+Normal</span>
          </div>

          {/* AI bubble */}
          <div className="rounded-2xl border border-[#00C8D7]/20 bg-[#00C8D7]/5 p-3 flex items-start gap-2.5">
            <Brain size={13} className="text-[#00C8D7] mt-0.5 flex-shrink-0" />
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Sin anomalías detectadas.{' '}
              <span className="text-[#00C8D7] font-semibold">Vida útil estimada: 18 meses.</span>
            </p>
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-1 text-[10px] text-[var(--text-secondary)]">
            <span className="flex items-center gap-1">
              <Wifi size={11} className="text-[#3EBF7A]" /> Conectado
            </span>
            <span>Actualizado hace 2s</span>
          </div>
        </div>
      </div>

      {/* Floating badge — hidden on very small screens to avoid overflow */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        className="hidden sm:flex absolute -right-3 top-20 bg-[var(--background-surface)] border border-[var(--border-default)] rounded-2xl px-3 py-2 shadow-lg items-center gap-2"
      >
        <AlertTriangle size={13} className="text-[#F5A623]" />
        <span className="text-xs font-semibold text-[var(--text-primary)]">Alerta preventiva</span>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background-primary)]">
      <div className="absolute inset-0 pcb-pattern opacity-30" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-[#00C8D7]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-[#00C8D7]/6 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left */}
          <div className="flex-1 text-center lg:text-left w-full">
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#00C8D7] bg-[#00C8D7]/10 border border-[#00C8D7]/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C8D7] animate-pulse flex-shrink-0" />
              <span className="truncate">{t('hero.badge')}</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.07)}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[4.5rem] text-[var(--text-primary)] leading-[1.04] tracking-tight"
            >
              {t('hero.tagline')}
            </motion.h1>

            <motion.p
              {...fadeUp(0.14)}
              className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              {...fadeUp(0.21)}
              className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Button size="lg" onClick={() => navigate('/productos')} className="group">
                {t('hero.cta1')}
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta2')}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.28)}
              className="mt-10 grid grid-cols-3 gap-4 max-w-xs mx-auto lg:mx-0"
            >
              {[
                { value: '< 5s', label: 'Diagnóstico' },
                { value: '↓60%', label: 'Paros' },
                { value: '24/7', label: 'Monitoreo' },
              ].map(s => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="font-display font-extrabold text-xl sm:text-2xl text-[#00C8D7]">{s.value}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — full width on mobile, fixed on desktop */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 lg:max-w-[380px]">
            <AppMockup />
          </div>

        </div>
      </div>
    </section>
  )
}

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Radio, Eye, Brain, BarChart2, Building2 } from 'lucide-react'

const slideIcons = [Radio, Eye, Brain, BarChart2, Building2]

const slides = [
  {
    id: 1,
    label: 'Monitoreo en tiempo real',
    desc: 'Voltaje, corriente, temperatura y vibración capturados continuamente por el módulo ESP32-S3.',
    accent: '#00C8D7',
    stat: '< 2s',
    statLabel: 'latencia de datos',
  },
  {
    id: 2,
    label: 'Visión Artificial ARGOS',
    desc: 'Identificación de componentes PCB on-device con YOLOv8n. Sin internet, sin demoras.',
    accent: '#3EBF7A',
    stat: '0.721',
    statLabel: 'mAP50 entrenado',
  },
  {
    id: 3,
    label: 'Diagnóstico con IA + RAG',
    desc: 'El LLM conoce tu circuito específico. Diagnósticos narrativos y recomendaciones accionables.',
    accent: '#F5A623',
    stat: '< 5s',
    statLabel: 'tiempo de diagnóstico',
  },
  {
    id: 4,
    label: 'Análisis Predictivo Weibull',
    desc: 'Estimación de vida útil y probabilidad de falla basada en historial acumulado del equipo.',
    accent: '#A78BFA',
    stat: '↓ 60%',
    statLabel: 'reducción de paros',
  },
  {
    id: 5,
    label: 'Industria 4.0 lista',
    desc: 'Arquitectura escalable sobre AWS. Desde un taller hasta 600+ maquiladoras simultáneas.',
    accent: '#00C8D7',
    stat: '1,200',
    statLabel: 'unidades objetivo año 1',
  },
]

export function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 3800, stopOnInteraction: true })]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-20 bg-[var(--background-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#00C8D7]">Tecnología</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text-primary)] mt-1">
              Cómo funciona NEMIKI
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-[var(--border-default)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[#00C8D7] hover:text-[#00C8D7] transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-[var(--border-default)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[#00C8D7] hover:text-[#00C8D7] transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 touch-pan-y">
            {slides.map((slide, idx) => {
              const SlideIcon = slideIcons[idx]
              return (
              <div
                key={slide.id}
                className="flex-none w-[85vw] sm:w-[420px] lg:w-[380px]"
              >
                <div
                  className="relative rounded-3xl p-8 h-64 flex flex-col justify-between overflow-hidden border"
                  style={{
                    borderColor: `${slide.accent}30`,
                    background: `linear-gradient(135deg, ${slide.accent}08 0%, var(--background-surface) 60%)`,
                  }}
                >
                  {/* Decorative blob */}
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-20 pointer-events-none"
                    style={{ background: slide.accent }}
                  />

                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${slide.accent}20` }}>
                      <SlideIcon size={20} style={{ color: slide.accent }} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2">
                      {slide.label}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                      {slide.desc}
                    </p>
                  </div>

                  <div className="relative flex items-end justify-between">
                    <div>
                      <span className="font-display font-extrabold text-2xl" style={{ color: slide.accent }}>
                        {slide.stat}
                      </span>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">{slide.statLabel}</p>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: `${slide.accent}20` }}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ background: slide.accent }} />
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:hidden">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className="w-2 h-2 rounded-full bg-[var(--border-default)] transition-all"
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

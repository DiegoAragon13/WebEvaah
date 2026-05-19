import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { VideoModal } from '../ui/VideoModal'

export function Testimonial() {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-[var(--background-secondary)] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C8D7] rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C8D7] mb-3">
                {t('testimonial.label')}
              </span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[var(--text-primary)]">
                {t('testimonial.title')}
              </h2>
            </motion.div>

            {/* Video Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="relative bg-[var(--background-surface)] rounded-3xl p-8 sm:p-10 border border-[var(--border-default)] hover:border-[#00C8D7]/50 transition-all duration-300 hover:shadow-2xl">
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote size={80} className="text-[#00C8D7]" />
                </div>

                <div className="relative z-10">
                  {/* Testimonial text */}
                  <blockquote className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
                    "{t('testimonial.quote')}"
                  </blockquote>

                  {/* Author info + Play button */}
                  <div className="flex items-center justify-between gap-6 flex-wrap">
                    <div>
                      <p className="font-display font-bold text-lg text-[var(--text-primary)]">
                        {t('testimonial.author')}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {t('testimonial.role')}
                      </p>
                    </div>

                    {/* Play button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsModalOpen(true)}
                      className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#00C8D7] text-white font-semibold hover:bg-[#00B8C7] transition-colors shadow-lg hover:shadow-xl"
                    >
                      <Play size={20} className="fill-white" />
                      {t('testimonial.cta')}
                    </motion.button>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00C8D7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc="/testimonio.mp4"
        title={`${t('testimonial.label')} - ${t('testimonial.author')}`}
      />
    </>
  )
}

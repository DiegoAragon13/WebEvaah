import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { VideoPlayer } from '../ui/VideoPlayer'

export function VideoShowcase() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-[var(--background-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] mb-4">
            {t('video.headline').split('miles de dólares').map((part, i) => 
              i === 0 ? (
                <span key={i}>{part}<span className="text-[#00C8D7]">miles de dólares</span></span>
              ) : part
            )}
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-medium">
            {t('video.subtitle')}
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <VideoPlayer 
            src="/falloinfo.mp4"
            autoPlay={false}
            loop={true}
            className="aspect-video shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  )
}

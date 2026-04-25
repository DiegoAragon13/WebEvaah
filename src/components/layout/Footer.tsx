import { useTranslation } from 'react-i18next'
import { Sun, Moon, Languages } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export function Footer() {
  const { t, i18n } = useTranslation()
  const { theme, toggle } = useTheme()

  const toggleLang = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
    localStorage.setItem('evaah-lang', next)
  }

  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--background-surface)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="font-display font-extrabold text-2xl text-[#00C8D7]">EVAAH</span>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{t('footer.tagline')}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-3">{t('footer.links')}</h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li><a href="/productos" className="hover:text-[#00C8D7] transition-colors">{t('nav.pricing')}</a></li>
              <li><a href="/#team" className="hover:text-[#00C8D7] transition-colors">{t('nav.team')}</a></li>
              <li><a href="tel:6183659548" className="hover:text-[#00C8D7] transition-colors">{t('nav.contact')}</a></li>
              <li><a href="#" className="hover:text-[#00C8D7] transition-colors">{t('footer.privacy')}</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <button onClick={toggle} className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[#00C8D7] transition-colors">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            </button>
            <button onClick={toggleLang} className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[#00C8D7] transition-colors">
              <Languages size={16} />
              {i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            </button>
          </div>
        </div>
        <div className="border-t border-[var(--border-default)] pt-6 text-center text-xs text-[var(--text-secondary)]">
          {t('footer.credit')}
        </div>
      </div>
    </footer>
  )
}

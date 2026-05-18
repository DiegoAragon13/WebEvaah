import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Sun, Moon, Menu, X, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useCartStore } from '../../store/cartStore'
import { useTheme } from '../../hooks/useTheme'

export function Navbar() {
  const { t, i18n } = useTranslation()
  const { theme, toggle } = useTheme()
  const count = useCartStore(s => s.count())
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartPop, setCartPop] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    if (count > 0) {
      setCartPop(true)
      setTimeout(() => setCartPop(false), 300)
    }
  }, [count])

  const toggleLang = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
    localStorage.setItem('nemiki-lang', next)
  }

  const links = [
    { label: t('nav.product'),    href: '/#features' },
    { label: t('nav.howItWorks'), href: '/#how' },
    { label: t('about.label'),    href: '/#about' },
    { label: t('nav.pricing'),    href: '/productos' },
    { label: t('nav.contact'),    href: 'tel:6183659548' },
  ]

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--background-surface)]/90 backdrop-blur-md shadow-lg border-b border-[var(--border-default)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display font-extrabold text-2xl text-[#00C8D7] tracking-tight flex-shrink-0">
          NEMIKI
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[#00C8D7] transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="hidden sm:flex items-center gap-1 text-xs font-semibold text-[var(--text-secondary)] hover:text-[#00C8D7] transition-colors px-2 py-1 rounded-lg hover:bg-[var(--background-secondary)]"
          >
            <Languages size={15} />
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[#00C8D7] hover:bg-[var(--background-secondary)] transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => navigate('/carrito')}
            aria-label={t('nav.cart')}
            className="relative p-2 rounded-lg text-[var(--text-secondary)] hover:text-[#00C8D7] hover:bg-[var(--background-secondary)] transition-colors"
          >
            <ShoppingCart size={20} />
            {count > 0 && (
              <motion.span
                animate={cartPop ? { scale: [1, 1.5, 1] } : {}}
                className="absolute -top-1 -right-1 bg-[#00C8D7] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
              >
                {count}
              </motion.span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--background-secondary)] transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay + drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 bg-black/40 z-40 md:hidden"
              onClick={handleLinkClick}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-16 right-0 bottom-0 w-72 max-w-[85vw] bg-[var(--background-surface)] border-l border-[var(--border-default)] shadow-2xl z-50 flex flex-col"
            >
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-1">
                  {links.map(l => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        onClick={handleLinkClick}
                        className="flex items-center text-base font-medium text-[var(--text-primary)] hover:text-[#00C8D7] hover:bg-[var(--background-secondary)] transition-colors py-3 px-3 rounded-xl"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Bottom actions */}
              <div className="p-6 border-t border-[var(--border-default)] flex items-center gap-3">
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-1.5 text-sm font-semibold text-[var(--text-secondary)] hover:text-[#00C8D7] transition-colors"
                >
                  <Languages size={16} />
                  {i18n.language === 'es' ? 'English' : 'Español'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

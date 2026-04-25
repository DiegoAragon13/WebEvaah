import { useEffect, useState } from 'react'

export function useTheme() {
  const getInitial = (): 'dark' | 'light' => {
    const saved = localStorage.getItem('evaah-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  }

  const [theme, setTheme] = useState<'dark' | 'light'>(getInitial)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('evaah-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}

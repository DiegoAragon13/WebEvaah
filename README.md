# NEMIKI Web

Sitio web oficial de NEMIKI — Sistema inteligente de diagnóstico de placas electrónicas.

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | React 18 + Vite |
| Estilos | Tailwind CSS v3 (custom, sin UI libs) |
| Routing | React Router v6 |
| Animaciones | Framer Motion |
| Iconos | Lucide React |
| Internacionalización | i18next + react-i18next (ES/EN) |
| Estado global (carrito) | Zustand |
| Fuentes | Google Fonts: Syne + DM Sans |
| Build | Vite |

## Setup

> Requiere Node.js 18+. Descárgalo en https://nodejs.org

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev

# 3. Build para producción
npm run build
```

## Estructura

```
src/
├── components/
│   ├── layout/     ← Navbar, Footer
│   ├── ui/         ← Button, Badge, Modal, Accordion
│   └── sections/   ← Hero, Problem, HowItWorks, Features, Pricing, Team
├── pages/          ← Home, Products, Cart
├── store/          ← cartStore (Zustand)
├── i18n/           ← es.json, en.json
├── hooks/          ← useTheme
└── styles/         ← globals.css
```

## Despliegue (Vercel)

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Repo: https://github.com/DiegoAragon13/WebEvaah.git
- Rama de trabajo: `feature/web/kevin`

## Equipo

Diego Aragón · Dulce Niebla · Kevin Castorena · Michelle · Felix  
InnovaTecNM 2026 — Instituto Tecnológico de Durango

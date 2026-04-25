import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import './i18n'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

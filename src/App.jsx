import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import BebidasQuentes from './pages/BebidasQuentes'
import BebidasGeladas from './pages/BebidasGeladas'
import Salgados from './pages/Salgados'
import Doces from './pages/Doces'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/produto/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/bebidas-quentes" element={<BebidasQuentes />} />
        <Route path="/bebidas-geladas" element={<BebidasGeladas />} />
        <Route path="/salgados" element={<Salgados />} />
        <Route path="/doces" element={<Doces />} />
      </Routes>
    </Router>
  )
}

export default App

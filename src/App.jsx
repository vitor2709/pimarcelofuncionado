import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'

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
      </Routes>
    </Router>
  )
}

export default App

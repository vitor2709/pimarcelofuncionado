import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import Register from './pages/Register'
import ChooseLanchonete from './pages/ChooseLanchonete'
import LanchoneteSesc from './pages/LanchoneteSesc'
import LanchoneteSenac from './pages/LanchoneteSenac'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import BebidasQuentes from './pages/BebidasQuentes'
import BebidasGeladas from './pages/BebidasGeladas'
import Salgados from './pages/Salgados'
import Doces from './pages/Doces'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'
import AddMenuItem from './pages/AddMenuItem'
import MenuManagement from './pages/MenuManagement'
import EditMenuItem from './pages/EditMenuItem'

function App() {
  return (
    <AuthProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
          <Route path="/escolher-lanchonete" element={<ChooseLanchonete />} />
          <Route path="/lanchonete-sesc" element={<LanchoneteSesc />} />
          <Route path="/lanchonete-senac" element={<LanchoneteSenac />} />
          <Route path="/home" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/produto/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/bebidas-quentes" element={<BebidasQuentes />} />
        <Route path="/bebidas-geladas" element={<BebidasGeladas />} />
        <Route path="/salgados" element={<Salgados />} />
        <Route path="/doces" element={<Doces />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/menu" element={<MenuManagement />} />
        <Route path="/admin/add-item" element={<AddMenuItem />} />
        <Route path="/admin/edit-item/:id" element={<EditMenuItem />} />
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App

import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { defaultMenuItems } from '../data/menuData';

export default function LanchoneteSenac() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('todos');
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [allMenuItems, setAllMenuItems] = useState([]);

  useEffect(() => {
    // Salvar que o usuário está na lanchonete Senac
    localStorage.setItem('lanchonete_selecionada', 'senac');
  }, []);

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, message: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  // Carregar itens customizados e filtrar itens padrão removidos
  useEffect(() => {
    const customItems = JSON.parse(localStorage.getItem('custom_menu_items') || '[]');
    const removedItems = JSON.parse(localStorage.getItem('removed_default_items') || '[]');
    const activeDefaultItems = defaultMenuItems.filter(item => !removedItems.includes(item.id));
    setAllMenuItems([...activeDefaultItems, ...customItems]);
  }, []);

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('🛒 Adicionando ao carrinho:', item.name);
    
    // Pega o carrinho atual do localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    console.log('📦 Carrinho antes:', cart);
    
    // Verifica se o item já existe no carrinho
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex > -1) {
      // Se já existe, incrementa a quantidade
      cart[existingItemIndex].quantity += 1;
      console.log('✅ Item já existe, incrementando quantidade');
    } else {
      // Se não existe, adiciona com quantidade 1
      cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        description: item.description,
        quantity: 1
      });
      console.log('✅ Item novo adicionado');
    }
    
    // Salva o carrinho atualizado
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('💾 Carrinho salvo:', cart);
    console.log('💾 localStorage cart:', localStorage.getItem('cart'));
    
    // Mostra notificação
    setNotification({ show: true, message: `${item.name} adicionado ao carrinho!` });
    
    // Redireciona para o carrinho após 800ms
    setTimeout(() => {
      navigate('/carrinho');
    }, 800);
  };

  const filteredItems = activeCategory === 'todos' 
    ? allMenuItems 
    : allMenuItems.filter(item => item.category === activeCategory);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      {/* Notificação Toast */}
      {notification.show && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
          <div className="flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg">
            <span className="material-symbols-outlined">check_circle</span>
            <span className="font-semibold">{notification.message}</span>
          </div>
        </div>
      )}

      {/* Top Navigation Bar */}
      <header className="w-full bg-background-light dark:bg-background-dark/80 sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"></path>
                <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fillRule="evenodd"></path>
              </svg>
              <h1 className="text-xl font-bold">Senac Cafeteria</h1>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/carrinho')}
                className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <span className="material-symbols-outlined text-text-light dark:text-text-dark">shopping_cart</span>
              </button>
              <button 
                onClick={() => navigate('/perfil')}
                className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <span className="material-symbols-outlined text-text-light dark:text-text-dark">person</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          {/* Promotional Banner */}
          <div className="mb-8 overflow-hidden rounded-xl bg-accent">
            <div 
              className="bg-cover bg-center" 
              style={{backgroundImage: 'linear-gradient(90deg, rgba(255, 199, 44, 0.9) 0%, rgba(255, 199, 44, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPyT8Z5BSLurCrpXR2TeMx_CfbQCnVDlkcyDI2JqONg0D837a-a0ymxFVwTBoGJJsdShBTM0HdTcsaIHmT6uzRFbPDhZ69TonueXuQAIfxUAwpUPgs4nZp9ASA0QnKhyY9kh6_ieopFkrv1vVqzSsT0sWxBW-r9w45-0ufgUCYsisyMWAVHITVDwxaQhkSQi-QltoF40_aL-cbEv204zr0CbEYqlfoNkORao2SHvyjmDQdjOlWlMp9-TxzhUWiqxXsMy34psOjqw")'}}
            >
              <div className="flex flex-col justify-center p-8 sm:p-12 min-h-[220px]">
                <p className="text-4xl font-black text-text-light tracking-tight">Combo Especial</p>
                <p className="mt-2 text-2xl font-bold text-text-light">Cappuccino + Croissant por R$ 12,00</p>
                <p className="mt-1 text-text-light/80">Experimente nosso combo exclusivo da Lanchonete Senac!</p>
              </div>
            </div>
          </div>

          {/* Page Heading */}
          <div className="mb-6">
            <h2 className="text-3xl font-black tracking-tight text-text-light dark:text-text-dark">Nosso Cardápio</h2>
            <p className="mt-1 text-subtext-light dark:text-subtext-dark">Descubra os sabores exclusivos da Lanchonete Senac.</p>
          </div>

          {/* Category Chips */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <button 
              onClick={() => setActiveCategory('todos')}
              className={`h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-semibold shadow-sm ${
                activeCategory === 'todos' 
                  ? 'bg-primary text-white' 
                  : 'bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-600 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Todos
            </button>
            <button 
              onClick={() => setActiveCategory('bebidas-quentes')}
              className={`h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-semibold shadow-sm ${
                activeCategory === 'bebidas-quentes' 
                  ? 'bg-primary text-white' 
                  : 'bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-600 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Bebidas Quentes
            </button>
            <button 
              onClick={() => setActiveCategory('bebidas-geladas')}
              className={`h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-semibold shadow-sm ${
                activeCategory === 'bebidas-geladas' 
                  ? 'bg-primary text-white' 
                  : 'bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-600 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Bebidas Geladas
            </button>
            <button 
              onClick={() => setActiveCategory('salgados')}
              className={`h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-semibold shadow-sm ${
                activeCategory === 'salgados' 
                  ? 'bg-primary text-white' 
                  : 'bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-600 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Salgados
            </button>
            <button 
              onClick={() => setActiveCategory('doces')}
              className={`h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-semibold shadow-sm ${
                activeCategory === 'doces' 
                  ? 'bg-primary text-white' 
                  : 'bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-600 text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Doces
            </button>
          </div>

          {/* Menu Item Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item) => (
              <Link 
                key={item.id} 
                to={`/produto/${item.id}`}
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark/50 shadow-sm transition-all hover:shadow-md hover:scale-105 cursor-pointer group"
              >
                <div 
                  className="aspect-video w-full bg-cover bg-center" 
                  style={{backgroundImage: `url("${item.image}")`}}
                ></div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-bold text-text-light dark:text-text-dark group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="mt-1 text-sm text-subtext-light dark:text-subtext-dark">{item.description}</p>
                  <p className="mt-2 text-base font-bold text-primary">{item.price}</p>
                  <button 
                    onClick={(e) => handleAddToCart(e, item)}
                    className="mt-4 w-full h-9 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full border-t border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <p className="text-center text-sm text-subtext-light dark:text-subtext-dark">
            © 2024 Sesc Senac. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

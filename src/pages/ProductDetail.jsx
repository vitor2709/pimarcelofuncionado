import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductHeader from '../components/ProductHeader';
import Breadcrumb from '../components/Breadcrumb';
import QuantitySelector from '../components/QuantitySelector';
import { defaultMenuItems } from '../data/menuData';

function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Carregar todos os produtos (padrão + customizados)
    const customItems = JSON.parse(localStorage.getItem('custom_menu_items') || '[]');
    const removedItems = JSON.parse(localStorage.getItem('removed_default_items') || '[]');
    
    // Filtrar itens padrão que não foram removidos
    const activeDefaultItems = defaultMenuItems.filter(item => !removedItems.includes(item.id));
    
    // Combinar todos os itens
    const allItems = [...activeDefaultItems, ...customItems];
    
    // Buscar o produto pelo ID
    const foundProduct = allItems.find(item => item.id === id);
    
    if (foundProduct) {
      // Converter o preço de string para número se necessário
      const price = typeof foundProduct.price === 'string' 
        ? parseFloat(foundProduct.price.replace('R$', '').replace(',', '.').trim())
        : foundProduct.price;
      
      setProduct({
        ...foundProduct,
        price: price
      });
    } else {
      // Se não encontrar, redireciona
      const lanchonete = localStorage.getItem('lanchonete_selecionada');
      if (lanchonete === 'sesc') navigate('/lanchonete-sesc');
      else if (lanchonete === 'senac') navigate('/lanchonete-senac');
      else navigate('/escolher-lanchonete');
    }
  }, [id, navigate]);

  const breadcrumbItems = [
    { label: 'Menu', link: '/home' },
    { label: product?.category || 'Produtos', link: '/home' },
    { label: product?.name || 'Carregando...', link: null }
  ];

  const calculateTotal = () => {
    if (!product) return 0;
    return product.price * quantity;
  };

  const handleAddToCart = () => {
    if (!product) return;
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    };
    cart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/carrinho');
  };

  if (!product) {
    return (
      <div className="relative flex min-h-screen w-full flex-col">
        <ProductHeader />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">Carregando produto...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-linear-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <ProductHeader />
        
        <main className="flex-1 px-4 sm:px-8 md:px-16 lg:px-24 py-10">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-8">
              {/* Product Image */}
              <div className="relative group">
                <div 
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-2xl min-h-[400px] lg:min-h-[550px] shadow-2xl transform transition-all duration-300 hover:scale-[1.02] ring-4 ring-blue-100 dark:ring-blue-900/30"
                  style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%), url("${product.image}")` }}
                >
                  <div className="absolute top-4 right-4">
                    <span className="bg-linear-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      🔥 Destaque
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 self-start">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category === 'bebidas-quentes' && '☕ Bebida Quente'}
                      {product.category === 'bebidas-geladas' && '🧊 Bebida Gelada'}
                      {product.category === 'doces' && '🍰 Doce'}
                      {product.category === 'salgados' && '🥐 Salgado'}
                    </span>
                  </div>
                  
                  <h1 className="text-gray-900 dark:text-white text-5xl font-black leading-tight tracking-[-0.033em] bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text">
                    {product.name}
                  </h1>
                  
                  <div className="flex items-baseline gap-3">
                    <p className="text-[#1152d4] text-4xl font-black">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </p>
                    <span className="text-gray-500 text-sm">por unidade</span>
                  </div>
                </div>

                <div className="bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border-2 border-blue-100 dark:border-blue-800/50">
                  <p className="text-gray-700 dark:text-gray-300 text-lg font-normal leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 my-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-center">
                    <span className="text-2xl">⚡</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Preparo Rápido</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-center">
                    <span className="text-2xl">🌟</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Qualidade Premium</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-center">
                    <span className="text-2xl">✨</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Sabor Único</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <QuantitySelector
                      quantity={quantity}
                      onIncrease={() => setQuantity(q => q + 1)}
                      onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                    />
                    
                    <button
                      onClick={handleAddToCart}
                      className="w-full flex-1 flex items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#1152d4] to-[#0d3d8f] h-16 px-8 text-lg font-bold text-white shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 hover:from-[#0d3d8f] hover:to-[#1152d4]"
                    >
                      <span className="material-symbols-outlined text-2xl">add_shopping_cart</span>
                      Adicionar ao Carrinho
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between px-2 text-sm mt-4">
                    <span className="text-gray-600 dark:text-gray-400">Total:</span>
                    <span className="text-2xl font-bold text-[#1152d4]">
                      R$ {calculateTotal().toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-3xl">verified</span>
                  <div>
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300">Produto Garantido</p>
                    <p className="text-xs text-green-700 dark:text-green-400">Qualidade e frescor assegurados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductDetail;

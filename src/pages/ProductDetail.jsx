import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductHeader from '../components/ProductHeader';
import Breadcrumb from '../components/Breadcrumb';
import SizeSelector from '../components/SizeSelector';
import AddonsSelector from '../components/AddonsSelector';
import QuantitySelector from '../components/QuantitySelector';

function ProductDetail() {
  const navigate = useNavigate();
  
  const [selectedSize, setSelectedSize] = useState('small');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Cappuccino Especial",
    price: 12.50,
    description: "Uma deliciosa combinação de café espresso, leite vaporizado e uma generosa camada de espuma cremosa. Perfeito para começar o dia ou para uma pausa relaxante à tarde.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8y88-qoBkEUudRKslOFWTG1CQhIWbUO_DlvQhrjrQX3TQIpHdp3XDyGrP3z5JWvXvgVhE9YWxB3Rr7pOJ_qjHwFaendxAhCsLC1jBvld4-Kt09EyRAf7RfvyEqrFMzOpJJfUjhhGy5Dq0VyL8d7VUkU2HmxoIIDyQl0GvpbwXBqrJ9QeDOyO0ictwCSPw2WWn7Gg0r_ecYlKTGPOrZZkCEBeNyB6JJJj7PFhXJYomk2ML6z5MTWBjYKxQZtkBl2lO9CedBAXbXg"
  };

  const sizes = [
    { id: 'small', name: 'Pequeno (200ml)' },
    { id: 'medium', name: 'Médio (300ml)' },
    { id: 'large', name: 'Grande (400ml)' }
  ];

  const addons = [
    { id: 'whipped-cream', name: 'Chantilly', price: 0 },
    { id: 'almond-milk', name: 'Leite de Amêndoas', price: 2.00 },
    { id: 'chocolate-syrup', name: 'Calda de Chocolate', price: 0 }
  ];

  const breadcrumbItems = [
    { label: 'Menu', link: '/home' },
    { label: 'Cafés', link: '/home' },
    { label: 'Cappuccino Especial', link: null }
  ];

  const handleToggleAddon = (addonId) => {
    setSelectedAddons(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const calculateTotal = () => {
    let total = product.price;
    selectedAddons.forEach(addonId => {
      const addon = addons.find(a => a.id === addonId);
      if (addon) total += addon.price;
    });
    return total * quantity;
  };

  const handleAddToCart = () => {
    // Aqui você pode adicionar a lógica para adicionar ao carrinho
    console.log({
      product,
      size: selectedSize,
      addons: selectedAddons,
      quantity,
      total: calculateTotal()
    });
    navigate('/carrinho');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <ProductHeader />
        
        <main className="flex-1 px-4 sm:px-8 md:px-16 lg:px-24 py-10">
          <div className="max-w-6xl mx-auto">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Product Image */}
              <div 
                className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[400px] lg:min-h-[500px]"
                style={{ backgroundImage: `url("${product.imageUrl}")` }}
              ></div>

              {/* Product Details */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    {product.name}
                  </h1>
                  <p className="text-[#1152d4] text-3xl font-bold">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-6 bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                  <SizeSelector
                    sizes={sizes}
                    selectedSize={selectedSize}
                    onSelectSize={setSelectedSize}
                  />
                  
                  <AddonsSelector
                    addons={addons}
                    selectedAddons={selectedAddons}
                    onToggleAddon={handleToggleAddon}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <QuantitySelector
                    quantity={quantity}
                    onIncrease={() => setQuantity(q => q + 1)}
                    onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                  />
                  
                  <button
                    onClick={handleAddToCart}
                    className="w-full flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#1152d4] h-14 px-6 text-lg font-bold text-[#fde047] shadow-lg hover:bg-blue-700 transition-colors"
                  >
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                    Adicionar ao Carrinho
                  </button>
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

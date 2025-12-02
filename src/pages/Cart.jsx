import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartHeader from '../components/CartHeader';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import EmptyCart from '../components/EmptyCart';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = typeof item.price === 'string'
        ? parseFloat(item.price.replace('R$', '').replace(',', '.').trim())
        : item.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const fees = 1.50;
  const subtotal = calculateSubtotal();
  const total = subtotal + fees;

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <CartHeader />
      
      <main className="container mx-auto flex-1 px-4 py-8 md:py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-4xl font-black tracking-tighter text-text-light dark:text-text-dark">Meu Carrinho</h1>
          <Link to="/home" className="flex h-11 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md bg-slate-100 dark:bg-slate-800 px-4 text-sm font-bold tracking-wide transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span>Continuar Comprando</span>
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex flex-col gap-4">
                <div className="hidden border-b border-border-light dark:border-border-dark pb-3 text-sm font-medium text-slate-500 dark:text-slate-400 md:grid md:grid-cols-5 md:gap-4">
                  <div className="col-span-2">Produto</div>
                  <div className="text-center">Preço</div>
                  <div className="text-center">Quantidade</div>
                  <div className="text-right">Total</div>
                </div>
                
                {cartItems.map(item => (
                  <CartItem 
                    key={item.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>
            </div>

            <OrderSummary 
              subtotal={subtotal}
              fees={fees}
              total={total}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default Cart;

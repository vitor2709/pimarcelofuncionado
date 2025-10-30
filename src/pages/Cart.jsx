import { useState } from 'react';
import CartHeader from '../components/CartHeader';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import EmptyCart from '../components/EmptyCart';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Café Espresso",
      description: "Pequeno, Sem açúcar",
      price: "R$ 5,00",
      quantity: 1,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPT1pa1Ks7ENLS6DExwFSJOkoYvitOtyEOMTJj8wn6d-ycsrceFrvk-zpGtV2tKk9yiC73LWVubWZSyM4YATh48uKud30RwDk--JY0W2LfdoZN_hAUOVo0RPMmuT36MDFfseQuHutMNcPvDLcpkbaldCrArTJ4JImww1OBwrIT_eKJQinlhwOoYE0EyDW2PJwbeHdjFB4Mkpku-NLdhVIKCQHRpiJsJQOTShoOkTtMGDdNI4Dp3S3nkp_HlNiiAzpGqiorjGiwpA"
    },
    {
      id: 2,
      name: "Pão de Queijo",
      description: "Tradicional",
      price: "R$ 3,50",
      quantity: 2,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb-G9a4e_caugvJZRoNym9GpHrR18B7Fd07hKSW0iX1F6NTlNxhrlEAKvNEk4bHdjVRAGcMgm8u00DkSM9GqgGeuiZzM5294WEaExd_8xmFRmeVFpA41raWVyF1QV4ZylR551j7zEYVy0SFQnf1kCeSBHUQwWSf9Zq0426LBGKjlkx1UE7egZWkHMYRlFLCDKAUBcbTiGT1_nPT09LAzsW0t_YzXy6n6l3NLNwYaqV6gWEWczo6ZhbeBEXQF_YhqnT2Ln1KRNxDA"
    },
    {
      id: 3,
      name: "Suco de Laranja Natural",
      description: "500ml",
      price: "R$ 8,00",
      quantity: 1,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-nJj6z_5i55zgVujhryTOOUy3iXNe3aAZqs5NAmXnCA3xrYWyKd9_z3fDAuqHd6NzpAfnvDyr1opx-JUtxCasNGZuzBrzCHNZKHaHLe3PIBYjwdNIAyJ-1I8zrXt2GSkBITWhE-pHTD7BVj1YHuosUZf8reVzsdjlZB9wXyZebsDYdzUkUtuZ7eOuNbtPlMVQ8aPrCj2K1_vn0PeVs__cQ82oUQYbTcislY-SARxNofvXEqonZNJ305yVGHkgnKSLrwkGkzIiZA"
    }
  ]);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
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
          <a className="flex h-11 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md bg-slate-100 dark:bg-slate-800 px-4 text-sm font-bold tracking-wide transition-colors hover:bg-slate-200 dark:hover:bg-slate-700" href="/">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span>Continuar Comprando</span>
          </a>
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

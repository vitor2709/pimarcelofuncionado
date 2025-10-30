import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <span className="material-symbols-outlined text-7xl text-slate-300 dark:text-slate-600 mb-4">shopping_cart_off</span>
      <h2 className="text-2xl font-bold mb-2">Seu carrinho está vazio</h2>
      <p className="text-slate-500 dark:text-slate-400 mb-6">Parece que você ainda não adicionou nenhum item.</p>
      <Link to="/home" className="flex h-11 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md bg-primary px-6 text-sm font-bold text-white tracking-wide transition-colors hover:bg-primary/90">
        <span>Ver o cardápio</span>
      </Link>
    </div>
  );
}

export default EmptyCart;

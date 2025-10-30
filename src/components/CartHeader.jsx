import { Link } from 'react-router-dom';

function CartHeader() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-4">
        <Link to="/home" className="flex items-center gap-4 text-text-light dark:text-text-dark">
          <div className="text-primary text-2xl">
            <svg className="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight">Sesc Senac Cafeteria</h2>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link className="text-sm font-medium transition-colors hover:text-primary" to="/home">Voltar ao Cardápio</Link>
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#">Meus Pedidos</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 text-text-light dark:text-text-dark transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
            <span className="material-symbols-outlined text-xl">person</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default CartHeader;

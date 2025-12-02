import { Link } from 'react-router-dom';

function Header() {
  const getLanchoneteRoute = () => {
    const lanchonete = localStorage.getItem('lanchonete_selecionada');
    if (lanchonete === 'sesc') return '/lanchonete-sesc';
    if (lanchonete === 'senac') return '/lanchonete-senac';
    return '/lanchonete-sesc'; // default
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 px-6 py-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-50">
      <Link to={getLanchoneteRoute()} className="flex items-center gap-4 text-[#0d121b] dark:text-white">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Sesc Senac Cafeteria</h2>
      </Link>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link to="/perfil" className="text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary">Perfil</Link>
        </div>
        <Link to="/carrinho" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Fazer Pedido</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;

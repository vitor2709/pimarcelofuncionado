import { Link } from 'react-router-dom';

function ProductHeader() {
  const getLanchoneteRoute = () => {
    const lanchonete = localStorage.getItem('lanchonete_selecionada');
    if (lanchonete === 'sesc') return '/lanchonete-sesc';
    if (lanchonete === 'senac') return '/lanchonete-senac';
    return '/lanchonete-sesc'; // default
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ebf3] dark:border-b-background-dark px-4 sm:px-10 py-3 bg-white dark:bg-gray-900/50">
      <Link to={getLanchoneteRoute()} className="flex items-center gap-4 text-gray-900 dark:text-white">
        <div className="size-6 text-[#1152d4]">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Sesc Senac Cafeteria</h2>
      </Link>
      <div className="hidden md:flex items-center gap-9">
        <a className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal" href="#menu">Menu</a>
        <a className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal" href="#promocoes">Promoções</a>
        <a className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal" href="#sobre">Sobre Nós</a>
        <a className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal" href="#contato">Contato</a>
      </div>
      <div className="flex flex-1 justify-end items-center gap-4">
        <Link to="/carrinho" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADonLG3_V5eZPRtMrM1JvGitb9R99Fol59YSMcE6FiAM6QMylyAP8aiw0uHvghDNJHmuCPdebYNf9EZsmgrB93RNrxmgRQ1G4AYJTZGPqLfGCwm_rrDIBchpuKlx_uJ0OEYdCM7uyDObBM_9fZvE4kRcBK0mWhaSts6BJkHEBTamT-Eou7z92guo52RKHMrDQ1lzCCped1wIjfGPRaUdC2iebkpP9JSdTg0cGeXpc1KVy9FtVbfr8_Bj5YJi3PwSYcW1BHBadpkA")' }}></div>
      </div>
    </header>
  );
}

export default ProductHeader;

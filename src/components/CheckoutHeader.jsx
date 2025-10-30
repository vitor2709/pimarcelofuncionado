import { Link } from 'react-router-dom';

function CheckoutHeader() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border-light bg-white dark:bg-background-dark dark:border-gray-700 px-4 md:px-10 py-3 fixed w-full top-0 z-10">
      <Link to="/home" className="flex items-center gap-4 text-gray-800 dark:text-white">
        <div className="text-primary size-7">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-gray-800 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Sesc Senac Cafeteria</h2>
      </Link>
      <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
        <div className="hidden md:flex items-center gap-9">
          <Link to="/home" className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-accent">Cardápio</Link>
          <a className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-accent" href="#promocoes">Promoções</a>
          <a className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-accent" href="#conta">Minha Conta</a>
        </div>
        <Link to="/carrinho" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACIq4ogmw2NrAwvV0GXJkCnI-3PTIubBs0wl10UkPrJWRio_zKpsyWtIIRUPexSN9fZuWZmK4jpv2Qevt6w3e6goqeQZIpXl1_mEjaUvL0i3memEK4erM3_g5vEiF9CZE5dMbmK6xl79Cu10Xiavw60ZbVNX60g_puGaT6earYZDq3F56jVgNULvyQ4ZZS3lrs7CwBzMmHglmXDu4KjhorVIhs_4fn60KalqHup4KimWCLt97aq_cR3CQhnRI-OUWmo4aGAdylcw")' }}></div>
      </div>
    </header>
  );
}

export default CheckoutHeader;

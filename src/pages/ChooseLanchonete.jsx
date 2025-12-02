import { useNavigate } from 'react-router-dom';

export default function ChooseLanchonete() {
  const navigate = useNavigate();

  const handleSelectLanchonete = (lanchonete) => {
    // Salvar a escolha no localStorage
    localStorage.setItem('lanchonete_selecionada', lanchonete);
    // Redirecionar para a página específica
    if (lanchonete === 'sesc') {
      navigate('/lanchonete-sesc');
    } else if (lanchonete === 'senac') {
      navigate('/lanchonete-senac');
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-center whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-4 bg-white dark:bg-background-dark">
          <div className="flex items-center gap-3 text-text-light dark:text-text-dark">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Sesc Senac Cafeteria</h2>
          </div>
        </header>

        <main className="flex flex-1 justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="layout-content-container flex flex-col items-center max-w-4xl flex-1 text-center">
            <div className="flex flex-col gap-3 mb-10 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark">
                Bem-vindo(a)!
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl font-normal leading-normal">
                Onde você gostaria de comer hoje?
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
              {/* Lanchonete Sesc */}
              <div 
                onClick={() => handleSelectLanchonete('sesc')}
                className="group flex cursor-pointer flex-col items-center justify-center gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
                  Lanchonete Sesc
                </h2>
                <button className="flex w-full max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors group-hover:bg-secondary group-hover:text-text-light">
                  <span className="truncate">Ver Cardápio</span>
                </button>
              </div>

              {/* Lanchonete Senac */}
              <div 
                onClick={() => handleSelectLanchonete('senac')}
                className="group flex cursor-pointer flex-col items-center justify-center gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
                  Lanchonete Senac
                </h2>
                <button className="flex w-full max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors group-hover:bg-secondary group-hover:text-text-light">
                  <span className="truncate">Ver Cardápio</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-slate-500 dark:text-slate-400">
            <a className="hover:text-primary dark:hover:text-secondary" href="#">
              <span className="material-symbols-outlined">lunch_dining</span>
            </a>
            <a className="hover:text-primary dark:hover:text-secondary" href="#">
              <span className="material-symbols-outlined">restaurant</span>
            </a>
            <a className="hover:text-primary dark:hover:text-secondary" href="#">
              <span className="material-symbols-outlined">local_cafe</span>
            </a>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
            © 2024 Sesc Senac. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}

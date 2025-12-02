import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultMenuItems } from '../data/menuData';

export default function MenuManagement() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carregar todos os itens (padrão + customizados)
  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    setLoading(true);
    
    // Carregar itens customizados do localStorage
    const customItems = JSON.parse(localStorage.getItem('custom_menu_items') || '[]');
    
    // Carregar lista de itens padrão removidos
    const removedItems = JSON.parse(localStorage.getItem('removed_default_items') || '[]');
    
    // Filtrar itens padrão que não foram removidos
    const activeDefaultItems = defaultMenuItems.filter(item => !removedItems.includes(item.id));
    
    // Combinar itens padrão ativos com customizados
    const allItems = [...activeDefaultItems, ...customItems];
    setMenuItems(allItems);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja remover este item?')) {
      // Verificar se é item customizado (começa com 'custom-')
      if (id.startsWith('custom-')) {
        // Remover do localStorage (itens customizados)
        const customItems = JSON.parse(localStorage.getItem('custom_menu_items') || '[]');
        const updatedItems = customItems.filter(item => item.id !== id);
        localStorage.setItem('custom_menu_items', JSON.stringify(updatedItems));
        
        alert('Item customizado removido com sucesso!');
        carregarProdutos();
      } else {
        // Remover item padrão (adicionar à lista de itens removidos)
        const removedItems = JSON.parse(localStorage.getItem('removed_default_items') || '[]');
        if (!removedItems.includes(id)) {
          removedItems.push(id);
          localStorage.setItem('removed_default_items', JSON.stringify(removedItems));
        }
        
        alert('Item padrão removido com sucesso!');
        carregarProdutos();
      }
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  const filteredItems = menuItems.filter(item => {
    const nome = item.name || '';
    const categoria = item.category || '';
    return nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
           categoria.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-row bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col border-r border-border-light dark:border-border-dark bg-primary text-white">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center gap-3">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 bg-white flex items-center justify-center">
              <span className="material-symbols-outlined text-primary" style={{fontSize: '32px'}}>
                coffee
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">Sesc Senac</h1>
              <p className="text-sm font-normal text-gray-200">Cafeteria Admin</p>
            </div>
          </div>
        </div>
        <nav className="flex flex-col gap-2 p-4 pt-0">
          <button
            onClick={() => navigate('/admin')}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 transition-colors w-full text-left"
          >
            <span className="material-symbols-outlined text-white">dashboard</span>
            <p className="text-sm font-medium">Dashboard</p>
          </button>
          <button
            onClick={() => navigate('/admin/menu')}
            className="flex items-center gap-3 rounded-lg bg-white/20 px-3 py-2.5 w-full text-left"
          >
            <span className="material-symbols-outlined text-white">restaurant_menu</span>
            <p className="text-sm font-medium">Menu</p>
          </button>
        </nav>
        <div className="mt-auto flex flex-col gap-1 p-4">

          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 transition-colors w-full text-left"
          >
            <span className="material-symbols-outlined text-white">logout</span>
            <p className="text-sm font-medium">Sair</p>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center p-6">
          <div className="flex flex-col w-full max-w-7xl flex-1">
            <main>
              {/* Header */}
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex min-w-72 flex-col gap-2">
                  <p className="text-gray-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
                    Gerenciamento de Cardápio
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                    Adicione, edite ou remova itens do menu.
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/admin/add-item')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-yellow-accent text-base font-bold leading-normal tracking-[0.015em] shadow-md hover:bg-primary/90 transition-colors"
                >
                  <span className="truncate">Adicionar Novo Item</span>
                </button>
              </div>

              {/* Search Bar */}
              <div className="px-2 py-3 mt-4">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                    <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-background-dark items-center justify-center pl-4 rounded-l-xl border-y border-l border-gray-200 dark:border-gray-700">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input 
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-y border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal" 
                      placeholder="Buscar por nome ou categoria..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </label>
              </div>

              {/* Table */}
              <div className="px-2 py-3">
                <div className="flex overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark shadow-sm">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-white/5">
                      <tr>
                        <th className="px-6 py-4 text-left text-gray-600 dark:text-gray-300 w-[50%] text-sm font-medium leading-normal uppercase tracking-wider">
                          Item
                        </th>
                        <th className="px-6 py-4 text-left text-gray-600 dark:text-gray-300 w-[20%] text-sm font-medium leading-normal uppercase tracking-wider">
                          Categoria
                        </th>
                        <th className="px-6 py-4 text-left text-gray-600 dark:text-gray-300 w-[15%] text-sm font-medium leading-normal uppercase tracking-wider">
                          Preço
                        </th>
                        <th className="px-6 py-4 text-right text-gray-600 dark:text-gray-300 w-[15%] text-sm font-medium leading-normal uppercase tracking-wider">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {loading ? (
                        <tr>
                          <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                            Carregando produtos...
                          </td>
                        </tr>
                      ) : filteredItems.length === 0 ? (
                        <tr>
                          <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                            Nenhum produto encontrado
                          </td>
                        </tr>
                      ) : (
                        filteredItems.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-white/5">
                          <td className="h-[72px] px-6 py-2">
                            <div className="flex items-center gap-4">
                              <div 
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-12 h-12 shrink-0"
                                style={{backgroundImage: `url("${item.image}")`}}
                              ></div>
                              <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                                {item.name}
                              </span>
                            </div>
                          </td>
                          <td className="h-[72px] px-6 py-2 text-gray-500 dark:text-gray-400 text-sm font-normal">
                            {item.category}
                          </td>
                          <td className="h-[72px] px-6 py-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
                            {item.price}
                          </td>
                          <td className="h-[72px] px-6 py-2 text-sm font-normal">
                            <div className="flex items-center justify-end gap-2">
                              <button 
                                onClick={() => navigate(`/admin/edit-item/${item.id}`)}
                                className="flex items-center justify-center rounded-lg h-9 px-3 bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
                              >
                                Editar
                              </button>
                              <button 
                                onClick={() => handleDelete(item.id)}
                                className="flex items-center justify-center size-9 rounded-lg bg-yellow-accent text-gray-800 hover:bg-yellow-accent/90 transition-colors"
                              >
                                <span className="material-symbols-outlined text-xl">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      )))}
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

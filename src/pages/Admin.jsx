import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultMenuItems } from '../data/menuData';

export default function Admin() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState({
    totalItems: 0,
    customItems: 0,
    totalOrders: 0,
    cartItems: 0
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  // Carregar estatísticas
  useEffect(() => {
    loadStats();
    loadRecentOrders();
  }, []);

  const loadStats = () => {
    const customItems = JSON.parse(localStorage.getItem('custom_menu_items') || '[]');
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    setStats({
      totalItems: defaultMenuItems.length + customItems.length,
      customItems: customItems.length,
      totalOrders: recentOrders.length,
      cartItems: cart.reduce((sum, item) => sum + item.quantity, 0)
    });
  };

  const loadRecentOrders = () => {
    // Carregar pedidos do localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    if (orders.length > 0) {
      // Usar pedidos reais do localStorage
      setRecentOrders(orders.slice(0, 10)); // Mostrar até 10 pedidos mais recentes
    } else {
      // Pedidos de exemplo caso não haja pedidos reais
      const exampleOrders = [
        { id: '#1205', customer: 'Ana Silva', phone: '(41) 99999-9999', date: new Date().toLocaleDateString('pt-BR'), total: 'R$ 25,50', status: 'Em Preparo', statusColor: 'yellow', paymentMethod: 'pix' },
        { id: '#1204', customer: 'Carlos Pereira', phone: '(41) 98888-8888', date: new Date().toLocaleDateString('pt-BR'), total: 'R$ 42,00', status: 'Concluído', statusColor: 'green', paymentMethod: 'Cartão de Crédito' },
        { id: '#1203', customer: 'Mariana Costa', phone: '(41) 97777-7777', date: new Date().toLocaleDateString('pt-BR'), total: 'R$ 18,75', status: 'Pronto para Retirada', statusColor: 'blue', paymentMethod: 'Dinheiro' },
        { id: '#1202', customer: 'João Martins', phone: '(41) 96666-6666', date: new Date(Date.now() - 86400000).toLocaleDateString('pt-BR'), total: 'R$ 33,20', status: 'Concluído', statusColor: 'green', paymentMethod: 'pix' },
        { id: '#1201', customer: 'Luiza Ferreira', phone: '(41) 95555-5555', date: new Date(Date.now() - 86400000).toLocaleDateString('pt-BR'), total: 'R$ 12,00', status: 'Cancelado', statusColor: 'red', paymentMethod: 'Cartão de Débito' },
      ];
      setRecentOrders(exampleOrders);
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowOrderModal(true);
  };

  const handleUpdateOrderStatus = (orderId, newStatus, newColor) => {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const updatedOrders = orders.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus, statusColor: newColor }
        : order
    );
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    loadRecentOrders();
    setShowOrderModal(false);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex h-screen w-full">
      {/* SideNavBar */}
      <aside className="flex w-64 flex-col border-r border-border-light dark:border-border-dark bg-primary text-white">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center gap-3">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 bg-white flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary" style={{fontSize: '32px'}}>
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
            className="flex items-center gap-3 rounded-lg bg-white/20 px-3 py-2.5 w-full text-left"
          >
            <span className="material-symbols-outlined text-white">dashboard</span>
            <p className="text-sm font-medium">Dashboard</p>
          </button>
          <button
            onClick={() => navigate('/admin/menu')}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 transition-colors w-full text-left"
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
      <main className="flex flex-1 flex-col overflow-y-auto">
        {/* TopNavBar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-8 py-4 sticky top-0 z-10">
          <label className="flex flex-col min-w-40 h-10! max-w-sm">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-gray-500 flex border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark items-center justify-center pl-3 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-full placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal" 
                placeholder="Pesquisar pedidos, itens..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </label>
          <div className="flex flex-1 justify-end gap-6 items-center">
            <button className="relative flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 text-gray-600 dark:text-gray-300 hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-background-light dark:border-background-dark"></span>
            </button>
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMycQQ_64oI3PQ_H2i1mA8L2hBITGcXsno3-BDAzDtXoTz1tVjQp9gCA1E0FDvQYphDQ8m_FKFTZyF6dwlkLu-pxvIMhjNmpoHAc8ZKQwqmIdvMg_na_i-OtbKVeHQww-mXnNI2dX2Zl3tUFCz0Ab_ZcuUfdnHhBdz4bX6eijn86EjIgKkiTt_bXgxd6VHtgpdYFTmHAvJPvm_JnsFWVZo0d3ZuuzB8oGEyIBpOIkfMPkXHRgN3ZtZUVJnyEdjA-RZPezZJQtapg")'}}
            ></div>
          </div>
        </header>

        <div className="p-8">
          {/* PageHeading */}
          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex min-w-72 flex-col gap-1">
              <p className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">Dashboard</p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Bem-vindo de volta, Admin!</p>
            </div>
            <button 
              onClick={() => navigate('/admin/add-item')}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-secondary hover:bg-primary/90 transition-colors"
            >
              <span className="material-symbols-outlined" style={{fontSize: '20px'}}>add_circle</span>
              Adicionar Novo Item
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-3 rounded-xl p-6 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <span className="material-symbols-outlined text-primary text-2xl">restaurant_menu</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Itens no Cardápio</p>
                  <p className="text-2xl font-bold text-text-light dark:text-text-dark">{stats.totalItems}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-green-600">{stats.customItems} itens customizados</p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl p-6 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-500/10">
                  <span className="material-symbols-outlined text-yellow-600 text-2xl">pending</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pedidos Pendentes</p>
                  <p className="text-2xl font-bold text-text-light dark:text-text-dark">{recentOrders.filter(o => o.statusColor === 'yellow').length}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-yellow-600">Aguardando preparo</p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl p-6 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10">
                  <span className="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pedidos Hoje</p>
                  <p className="text-2xl font-bold text-text-light dark:text-text-dark">{recentOrders.length}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-green-600">{recentOrders.filter(o => o.statusColor === 'green').length} concluídos</p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl p-6 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10">
                  <span className="material-symbols-outlined text-blue-600 text-2xl">shopping_cart</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Itens no Carrinho</p>
                  <p className="text-2xl font-bold text-text-light dark:text-text-dark">{stats.cartItems}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-blue-600">De todos os usuários</p>
            </div>
          </div>

          {/* Section with Table */}
          <div className="mt-10 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark">Pedidos Recentes</h2>
            <div className="w-full overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-gray-500 dark:text-gray-400 uppercase">
                    <tr>
                      <th className="px-6 py-4 font-medium" scope="col">ID do Pedido</th>
                      <th className="px-6 py-4 font-medium" scope="col">Cliente</th>
                      <th className="px-6 py-4 font-medium" scope="col">Data</th>
                      <th className="px-6 py-4 font-medium" scope="col">Total</th>
                      <th className="px-6 py-4 font-medium" scope="col">Status</th>
                      <th className="px-6 py-4 font-medium text-center" scope="col">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light dark:divide-border-dark">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-secondary">{order.id}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-text-light dark:text-text-dark">{order.customer}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-300">{order.date}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-semibold text-text-light dark:text-text-dark">{order.total}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            order.statusColor === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300' :
                            order.statusColor === 'green' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300' :
                            order.statusColor === 'blue' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300' :
                            'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          <button 
                            onClick={() => handleViewOrder(order)}
                            className="text-secondary hover:underline font-medium"
                          >
                            Ver Detalhes
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal de Detalhes do Pedido */}
      {showOrderModal && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Pedido {selectedOrder.id}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{selectedOrder.date}</p>
              </div>
              <button
                onClick={() => setShowOrderModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-gray-500">close</span>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Informações do Cliente */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Informações do Cliente</h3>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gray-500 text-lg">person</span>
                    <span className="text-gray-700 dark:text-gray-300">{selectedOrder.customer}</span>
                  </div>
                  {selectedOrder.phone && (
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-gray-500 text-lg">phone</span>
                      <span className="text-gray-700 dark:text-gray-300">{selectedOrder.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gray-500 text-lg">payments</span>
                    <span className="text-gray-700 dark:text-gray-300">{selectedOrder.paymentMethod}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gray-500 text-lg">store</span>
                    <span className="text-gray-700 dark:text-gray-300">Retirada no Local</span>
                  </div>
                </div>
              </div>

              {/* Itens do Pedido */}
              {selectedOrder.items && selectedOrder.items.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Itens do Pedido</h3>
                  <div className="space-y-2">
                    {selectedOrder.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
                        <div className="flex items-center gap-3 flex-1">
                          {item.imageUrl && (
                            <img src={item.imageUrl} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                          )}
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Quantidade: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Total */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center justify-between text-xl font-bold">
                  <span className="text-gray-900 dark:text-white">Total</span>
                  <span className="text-primary dark:text-secondary">{selectedOrder.total}</span>
                </div>
              </div>

              {/* Status e Ações */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Atualizar Status</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleUpdateOrderStatus(selectedOrder.id, 'Em Preparo', 'yellow')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 rounded-lg font-medium transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">restaurant</span>
                    Em Preparo
                  </button>
                  <button
                    onClick={() => handleUpdateOrderStatus(selectedOrder.id, 'Pronto para Retirada', 'blue')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg font-medium transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">shopping_bag</span>
                    Pronto
                  </button>
                  <button
                    onClick={() => handleUpdateOrderStatus(selectedOrder.id, 'Concluído', 'green')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg font-medium transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    Concluído
                  </button>
                  <button
                    onClick={() => handleUpdateOrderStatus(selectedOrder.id, 'Cancelado', 'red')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg font-medium transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">cancel</span>
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { defaultMenuItems } from '../data/menuData';

export default function EditMenuItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isCustomItem, setIsCustomItem] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Bebidas Quentes',
    image: null
  });

  // Carregar dados do produto
  useEffect(() => {
    carregarProduto();
  }, [id]);

  const carregarProduto = async () => {
    setLoading(true);
    
    // Verificar se é item customizado
    if (id.startsWith('custom-')) {
      setIsCustomItem(true);
      const customItems = JSON.parse(localStorage.getItem('custom_menu_items') || '[]');
      const item = customItems.find(item => item.id === id);
      
      if (item) {
        // Mapear categoria de volta para formato de exibição
        const categoryMap = {
          'bebidas-quentes': 'Bebidas Quentes',
          'bebidas-geladas': 'Bebidas Geladas',
          'salgados': 'Salgados',
          'doces': 'Doces',
          'outros': 'Outros'
        };
        
        setFormData({
          name: item.name || '',
          description: item.description || '',
          price: item.price.replace('R$ ', '') || '',
          category: categoryMap[item.category] || 'Outros',
          image: null
        });
        setImagePreview(item.image || '');
      } else {
        alert('Item não encontrado');
        navigate('/admin/menu');
      }
    } else {
      // Item padrão - não pode ser editado completamente
      setIsCustomItem(false);
      const item = defaultMenuItems.find(item => item.id === id);
      
      if (item) {
        const categoryMap = {
          'bebidas-quentes': 'Bebidas Quentes',
          'bebidas-geladas': 'Bebidas Geladas',
          'salgados': 'Salgados',
          'doces': 'Doces',
          'outros': 'Outros'
        };
        
        setFormData({
          name: item.name || '',
          description: item.description || '',
          price: item.price.replace('R$ ', '') || '',
          category: categoryMap[item.category] || 'Outros',
          image: null
        });
        setImagePreview(item.image || '');
      } else {
        alert('Item não encontrado');
        navigate('/admin/menu');
      }
    }
    
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isCustomItem) {
      alert('Itens padrão do cardápio não podem ser editados. Apenas itens adicionados pelo administrador.');
      return;
    }
    
    if (!formData.name || !formData.price || !formData.description) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    setSaving(true);

    try {
      // Mapear categorias para o formato usado no menu
      const categoryMap = {
        'Bebidas Quentes': 'bebidas-quentes',
        'Bebidas Geladas': 'bebidas-geladas',
        'Salgados': 'salgados',
        'Doces': 'doces',
        'Outros': 'outros'
      };

      // Atualizar item customizado
      const updatedItem = {
        id: id,
        name: formData.name,
        description: formData.description,
        price: `R$ ${parseFloat(formData.price.replace(',', '.')).toFixed(2).replace('.', ',')}`,
        category: categoryMap[formData.category] || 'outros',
        image: imagePreview
      };

      // Obter itens existentes do localStorage
      const customItems = JSON.parse(localStorage.getItem('custom_menu_items') || '[]');
      
      // Encontrar e atualizar o item
      const itemIndex = customItems.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        customItems[itemIndex] = updatedItem;
        localStorage.setItem('custom_menu_items', JSON.stringify(customItems));
        
        alert('Item atualizado com sucesso!');
        navigate('/admin/menu');
      } else {
        throw new Error('Item não encontrado');
      }
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
      alert('Erro ao atualizar item: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    navigate('/admin/menu');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="relative flex min-h-screen w-full">
      {/* SideNavBar */}
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
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 transition-colors" href="#">
            <span className="material-symbols-outlined text-white">settings</span>
            <p className="text-sm font-medium">Configurações</p>
          </a>
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
      <main className="flex-1 p-8 bg-background-light dark:bg-background-dark">
        <div className="w-full max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button 
              onClick={() => navigate('/admin/menu')}
              className="text-gray-500 text-sm font-medium leading-normal hover:text-primary"
            >
              Menu
            </button>
            <span className="text-gray-400 text-sm font-medium leading-normal">/</span>
            <button 
              onClick={() => navigate('/admin/menu')}
              className="text-gray-500 text-sm font-medium leading-normal hover:text-primary"
            >
              Itens
            </button>
            <span className="text-gray-400 text-sm font-medium leading-normal">/</span>
            <span className="text-text-dark text-sm font-medium leading-normal">Editar Item</span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 mb-8">
            <div>
              <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
                {isCustomItem ? 'Editar Item' : 'Visualizar Item'}: {formData.name}
              </h1>
              {!isCustomItem && (
                <p className="text-yellow-600 dark:text-yellow-500 text-sm mt-2">
                  ⚠️ Este é um item padrão do cardápio e não pode ser editado. Apenas itens adicionados pelo administrador podem ser modificados.
                </p>
              )}
            </div>
          </div>

          {/* Form Container */}
          <form onSubmit={handleSubmit}>
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Fields Column */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <label className="flex flex-col w-full">
                    <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
                      Nome do Item <span className="text-red-500">*</span>
                    </p>
                    <input 
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-primary bg-white dark:bg-gray-800 h-12 placeholder:text-gray-400 px-4 text-base font-normal leading-normal"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="flex flex-col w-full">
                    <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
                      Descrição <span className="text-red-500">*</span>
                    </p>
                    <textarea 
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-primary bg-white dark:bg-gray-800 min-h-36 placeholder:text-gray-400 p-4 text-base font-normal leading-normal"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col w-full">
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
                        Preço <span className="text-red-500">*</span>
                      </p>
                      <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                          R$
                        </span>
                        <input 
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-primary bg-white dark:bg-gray-800 h-12 placeholder:text-gray-400 pl-10 pr-4 text-base font-normal leading-normal"
                          type="text"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </label>

                    <label className="flex flex-col w-full">
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
                        Categoria <span className="text-red-500">*</span>
                      </p>
                      <select 
                        className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-primary bg-white dark:bg-gray-800 h-12 placeholder:text-gray-400 px-4 text-base font-normal leading-normal"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <option>Salgados</option>
                        <option>Doces</option>
                        <option>Bebidas Quentes</option>
                        <option>Bebidas Frias</option>
                      </select>
                    </label>
                  </div>
                </div>

                {/* Image Upload Column */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                  <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Imagem do Item</p>
                  <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-border-light dark:border-border-dark p-6 h-full">
                    <div 
                      className="w-full max-w-[200px] aspect-square rounded-lg bg-cover bg-center mb-4"
                      style={{backgroundImage: `url('${imagePreview}')`}}
                    ></div>
                    <label className="flex items-center justify-center gap-2 w-full h-12 px-6 bg-white dark:bg-gray-800 text-primary border border-primary rounded-lg text-sm font-semibold hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors cursor-pointer">
                      <span className="material-symbols-outlined">upload_file</span>
                      Alterar Imagem
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                    <p className="text-gray-400 text-xs text-center">JPG, PNG ou GIF. Tamanho máx. 5MB.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
                <button 
                  type="button"
                  onClick={handleCancel}
                  disabled={saving || loading}
                  className="h-12 px-8 bg-secondary text-primary rounded-lg text-base font-bold hover:brightness-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCustomItem ? 'Cancelar' : 'Voltar'}
                </button>
                {isCustomItem && (
                  <button 
                    type="submit"
                    disabled={saving || loading}
                    className="h-12 px-8 bg-primary text-secondary rounded-lg text-base font-bold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {saving ? 'Salvando...' : loading ? 'Carregando...' : 'Salvar Alterações'}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

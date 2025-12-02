import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { criarProduto, uploadImagem } from '../services/produtoService';

export default function AddMenuItem() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Bebidas Quentes',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      
      // Criar preview da imagem
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.description) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    setLoading(true);

    try {
      // Mapear categorias para o formato usado no menu
      const categoryMap = {
        'Bebidas Quentes': 'bebidas-quentes',
        'Bebidas Geladas': 'bebidas-geladas',
        'Salgados': 'salgados',
        'Doces': 'doces',
        'Outros': 'outros'
      };

      // Criar novo item
      const newItem = {
        id: `custom-${Date.now()}`,
        name: formData.name,
        description: formData.description,
        price: `R$ ${parseFloat(formData.price.replace(',', '.')).toFixed(2).replace('.', ',')}`,
        category: categoryMap[formData.category] || 'outros',
        image: imagePreview || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'
      };

      // Obter itens existentes do localStorage
      const existingItems = JSON.parse(localStorage.getItem('custom_menu_items') || '[]');
      
      // Adicionar novo item
      existingItems.push(newItem);
      
      // Salvar no localStorage
      localStorage.setItem('custom_menu_items', JSON.stringify(existingItems));

      alert('Item adicionado com sucesso!');
      navigate('/admin/menu');
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
      alert('Erro ao adicionar item: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
            
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ebf4] dark:border-b-gray-700 px-4 md:px-10 py-3 mb-8">
              <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
                <div className="size-6 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h1 className="text-xl font-bold leading-tight tracking-[-0.015em]">Sesc Senac Cafeteria</h1>
              </div>
              <div className="flex flex-1 justify-end gap-4">
                <button
                  onClick={() => navigate('/admin')}
                  className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">arrow_back</span>
                </button>
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_doWPLSPAqD8XFMeIsh_vA2iG7Y2frNs7RvZ7LsfTrUWriA5NEYz2zpVIKKhwUZUne8v0E87qjeBJxt05dgGZYHPOWxem0vR3edGJ7XTuc0B1eJXSClpqJbrsYuzmpgHKcOl8rlXANocIMYUSHESENzAaWWl-SLEpwPynCjzu9W6x5RvIZpqiaq5YqPGE-o0c2_BtvkewYtfR24UifY1Y7YDFRVN-f4aGYghoXaG3clBb9CSTqxBGNnzKu5yWXl225zuWmdcIHw")'}}
                ></div>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 px-4 md:px-6">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <h2 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                  Adicionar Novo Item ao Menu
                </h2>
              </div>

              <div className="mt-8 bg-background-light dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 md:p-8">
                <h3 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-0 pb-6 pt-0">
                  Detalhes do Produto
                </h3>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {/* Nome do Item */}
                  <div className="flex flex-col">
                    <label className="flex flex-col">
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
                        Nome do Item <span className="text-red-500">*</span>
                      </p>
                      <input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-primary bg-background-light dark:bg-background-dark h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" 
                        placeholder="Ex: Café Expresso"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

                  {/* Preço */}
                  <div className="flex flex-col">
                    <label className="flex flex-col">
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
                        Preço (R$) <span className="text-red-500">*</span>
                      </p>
                      <input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-primary bg-background-light dark:bg-background-dark h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" 
                        placeholder="Ex: 5,50"
                        name="price"
                        type="text"
                        value={formData.price}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

                  {/* Descrição */}
                  <div className="flex flex-col md:col-span-2">
                    <label className="flex flex-col">
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
                        Descrição <span className="text-red-500">*</span>
                      </p>
                      <textarea 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-primary bg-background-light dark:bg-background-dark min-h-36 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" 
                        placeholder="Ex: Café forte e encorpado, tirado na hora."
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

                  {/* Categoria */}
                  <div className="flex flex-col">
                    <label className="flex flex-col">
                      <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
                        Categoria <span className="text-red-500">*</span>
                      </p>
                      <select 
                        className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-primary bg-background-light dark:bg-background-dark h-14 p-[15px] text-base font-normal leading-normal"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <option>Bebidas Quentes</option>
                        <option>Bebidas Geladas</option>
                        <option>Salgados</option>
                        <option>Doces</option>
                        <option>Outros</option>
                      </select>
                    </label>
                  </div>

                  {/* Upload de Imagem */}
                  <div className="flex flex-col">
                    <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
                      Imagem do Item
                    </p>
                    <div className="flex items-center justify-center w-full">
                      <label 
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-primary border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors" 
                        htmlFor="dropzone-file"
                      >
                        {imagePreview ? (
                          <img src={imagePreview} alt="Preview" className="h-full w-full object-cover rounded-lg" />
                        ) : (
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 mb-2">cloud_upload</span>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">Clique para fazer upload</span> ou arraste e solte
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG ou GIF (MAX. 800x400px)</p>
                          </div>
                        )}
                        <input 
                          className="hidden" 
                          id="dropzone-file" 
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Botões de Ação */}
                  <div className="md:col-span-2 flex flex-col sm:flex-row justify-end gap-4 mt-6">
                    <button 
                      type="button"
                      onClick={() => navigate('/admin/menu')}
                      disabled={loading}
                      className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg border-2 border-primary px-8 py-4 text-center text-base font-bold text-primary transition-all hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancelar
                    </button>
                    <button 
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-primary px-8 py-4 text-center text-base font-bold text-accent shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Adicionando...' : 'Adicionar Item'}
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

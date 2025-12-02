import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../config/supabase';

export default function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dados');
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profilePhoto: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.user_metadata?.nome || '',
        email: user.email || '',
        phone: user.user_metadata?.telefone || '',
        profilePhoto: user.user_metadata?.profile_photo || 'https://lh3.googleusercontent.com/aida-public/AB6AXuD587OnMemoyLu1nXo35tCJLSjBTskXvgeDY1Sy7CJULIRMM1xVIhB_nR1rlGn-D0Nh7GsbKy7cj47A2znS0-44Rgzqj68MYccA55MxhP_K9LUw0-popHP4H_hkV5DSvmSjND2n4p101CQO3UpqxTd1TouewbgRdicno1zXiEF1XMt60_n6y-XMZMTGwmZhDtekMOv_rQWWUG8DJzCCrlR0AVlkzJvMjzk9gIooWan56jObzbc0y4OWjK1WyX0HcJHWP2t8-m5VjA'
      });
    }
  }, [user]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profilePhoto: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: {
          nome: formData.name,
          telefone: formData.phone,
          profile_photo: formData.profilePhoto
        }
      });

      if (error) throw error;
      
      console.log('✅ Dados salvos no Supabase:', data);
      alert('✅ Alterações salvas com sucesso!\n\nSuas informações foram atualizadas.');
      
      // Recarregar dados do usuário
      const { data: { user: updatedUser } } = await supabase.auth.getUser();
      if (updatedUser) {
        setFormData({
          name: updatedUser.user_metadata?.nome || '',
          email: updatedUser.email || '',
          phone: updatedUser.user_metadata?.telefone || '',
          profilePhoto: updatedUser.user_metadata?.profile_photo || formData.profilePhoto
        });
      }
    } catch (error) {
      console.error('❌ Erro ao salvar:', error);
      alert('❌ Erro ao salvar alterações:\n\n' + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Aplicar máscara de telefone
    if (name === 'phone') {
      let phoneValue = value.replace(/\D/g, ''); // Remove tudo que não é dígito
      
      if (phoneValue.length <= 11) {
        // Formatar: (99) 99999-9999 ou (99) 9999-9999
        if (phoneValue.length <= 2) {
          phoneValue = phoneValue.replace(/(\d{0,2})/, '($1');
        } else if (phoneValue.length <= 6) {
          phoneValue = phoneValue.replace(/(\d{2})(\d{0,4})/, '($1) $2');
        } else if (phoneValue.length <= 10) {
          phoneValue = phoneValue.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else {
          phoneValue = phoneValue.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        }
        
        setFormData({
          ...formData,
          [name]: phoneValue
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border-light dark:border-border-dark px-6 sm:px-10 py-3 bg-white dark:bg-[#1a2333]">
        <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
          <button 
            onClick={() => navigate('/escolher-lanchonete')}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-background-light dark:hover:bg-background-dark transition-colors"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>
          <div className="text-primary size-7">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Sesc Senac Cafeteria</h2>
        </div>
        <div className="flex flex-1 justify-end gap-2 sm:gap-4">
          <div className="flex gap-2">  
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 justify-center py-5 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col w-full max-w-4xl bg-white dark:bg-[#1a2333] rounded-xl shadow-sm border border-border-light dark:border-border-dark/50">
          
          {/* Profile Header */}
          <div className="flex p-6 sm:p-8">
            <div className="flex w-full flex-col gap-6 items-center">
              <div className="flex gap-4 flex-col items-center">
                <div className="relative">
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-white dark:border-gray-800 shadow-md"
                    style={{backgroundImage: `url("${formData.profilePhoto}")`}}
                  ></div>
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    accept="image/*" 
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                  <button 
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-1 right-1 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-accent hover:bg-primary/90 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">edit</span>
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">{formData.name}</p>
                  <p className="text-text-light/70 dark:text-text-dark/70 text-base font-normal leading-normal text-center">{formData.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="pb-3 border-b border-border-light dark:border-border-dark/50">
            <div className="flex px-4 sm:px-8 justify-start sm:justify-center overflow-x-auto">
              <button
                onClick={() => setActiveTab('dados')}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 px-4 whitespace-nowrap transition-colors ${
                  activeTab === 'dados' 
                    ? 'border-b-primary text-primary' 
                    : 'border-b-transparent text-text-light/70 dark:text-text-dark/70 hover:border-b-border-light dark:hover:border-b-border-dark'
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Dados Pessoais</p>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8">
            {activeTab === 'dados' && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col flex-1">
                    <p className="text-base font-medium leading-normal pb-2">Nome Completo</p>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark h-14 p-[15px] text-base font-normal leading-normal border border-border-light dark:border-border-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </label>
                  <label className="flex flex-col flex-1">
                    <p className="text-base font-medium leading-normal pb-2">E-mail</p>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      readOnly
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-background-light/50 dark:bg-background-dark/50 text-text-light/70 dark:text-text-dark/70 h-14 p-[15px] text-base font-normal leading-normal border border-border-light dark:border-border-dark cursor-not-allowed"
                    />
                  </label>
                  <label className="flex flex-col flex-1 md:col-span-2">
                    <p className="text-base font-medium leading-normal pb-2">Telefone</p>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark h-14 p-[15px] text-base font-normal leading-normal border border-border-light dark:border-border-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </label>
                </div>
                <div className="flex items-center justify-end pt-4 border-t border-border-light dark:border-border-dark/50 mt-2">
                  <button 
                    type="submit"
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-accent text-sm font-bold leading-normal tracking-[0.015em] w-full sm:w-auto hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
                  >
                    <span className="truncate">Salvar Alterações</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

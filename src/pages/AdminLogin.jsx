import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação com credenciais fixas do administrador
    if (formData.username === 'admin@gmail.com' && formData.password === 'Admin1234') {
      // Credenciais corretas - acessa o admin
      localStorage.setItem('admin_logged_in', 'true');
      navigate('/admin');
    } else if (!formData.username || !formData.password) {
      alert('Por favor, preencha todos os campos');
    } else {
      alert('Credenciais inválidas. Acesso negado.');
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <div className="layout-container flex h-full min-h-screen grow flex-col items-center justify-center bg-primary/20 dark:bg-primary/10 p-4">
        <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-xl bg-white dark:bg-background-dark shadow-lg p-8 sm:p-10">
          
          {/* Header */}
          <div className="flex w-full flex-col items-center gap-2">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary mb-4">
              <span className="material-symbols-outlined text-secondary text-4xl">coffee</span>
            </div>
            <h1 className="text-text-main dark:text-white tracking-tight text-3xl font-bold leading-tight text-center">
              Acesso Administrativo
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Exclusivo para administradores da cafeteria.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
            <label className="flex flex-col w-full">
              <p className="text-text-main dark:text-gray-300 text-base font-medium leading-normal pb-2">
                E-mail ou Usuário
              </p>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-primary/50 bg-white dark:bg-background-dark/50 h-12 placeholder:text-gray-400 p-3 text-base font-normal leading-normal" 
                placeholder="Digite seu e-mail ou nome de usuário" 
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>

            <label className="flex flex-col w-full">
              <p className="text-text-main dark:text-gray-300 text-base font-medium leading-normal pb-2">
                Senha
              </p>
              <div className="relative flex w-full flex-1 items-stretch">
                <input 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-primary/50 bg-white dark:bg-background-dark/50 h-12 placeholder:text-gray-400 p-3 pr-10 text-base font-normal leading-normal" 
                  placeholder="Digite sua senha" 
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 flex h-full items-center pr-3 text-gray-400 dark:text-gray-500 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
              </div>
            </label>

            <div className="flex w-full flex-col items-center gap-4 pt-4">
              <button 
                type="submit"
                className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-secondary text-base font-bold leading-normal tracking-wide transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark"
              >
                <span className="truncate">Entrar</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="text-sm text-primary dark:text-secondary/80 hover:underline"
              >
                Voltar ao login principal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

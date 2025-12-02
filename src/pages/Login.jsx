import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      showNotification('Por favor, preencha todos os campos', 'error');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await login(formData.email, formData.password);

      if (error) {
        throw error;
      }

      // Login bem-sucedido
      showNotification('Login realizado com sucesso!', 'success');
      setTimeout(() => navigate('/escolher-lanchonete'), 1500);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      
      let mensagemErro = 'Erro ao fazer login. ';
      
      if (error.message.includes('Invalid login credentials')) {
        mensagemErro += 'Email ou senha incorretos.';
      } else if (error.message.includes('Email not confirmed')) {
        mensagemErro += 'Por favor, confirme seu email antes de fazer login.';
      } else {
        mensagemErro += error.message;
      }
      
      showNotification(mensagemErro, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccount = () => {
    navigate('/cadastro');
  };

  const handleGoogleLogin = () => {
    alert('Login com Google em desenvolvimento');
  };

  const handleFacebookLogin = () => {
    alert('Login com Facebook em desenvolvimento');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4 lg:p-8 font-display">
      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ${
          notification.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          <span className="material-symbols-outlined text-2xl">
            {notification.type === 'success' ? 'check_circle' : 'error'}
          </span>
          <span className="font-semibold">{notification.message}</span>
        </div>
      )}

      <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-xl bg-white shadow-xl dark:bg-background-dark/50 md:grid-cols-2">
        {/* Left Panel - Brand */}
        <div className="hidden md:flex flex-col items-center justify-center bg-primary p-12 text-white">
          <div className="w-24 h-24 mb-6">
            <svg className="w-full h-full text-secondary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM4 19h16v2H4v-2z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-center">Cafeteria Sesc Senac</h2>
          <p className="mt-4 text-center text-lg font-light opacity-80">O melhor café, a um clique de distância.</p>
        </div>

        {/* Right Panel - Login Form */}
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <div className="w-full max-w-md mx-auto">
            <h1 className="text-[#0d121b] dark:text-white tracking-light text-3xl font-bold leading-tight text-left pb-1 pt-6">
              Bem-vindo!
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal pb-6">
              Faça login ou crie uma conta para aproveitar nossas delícias.
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <label className="flex flex-col w-full">
                <p className="text-[#0d121b] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                  E-mail ou Usuário
                </p>
                <input 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d121b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfd7e7] dark:border-gray-600 bg-background-light dark:bg-background-dark/60 h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" 
                  placeholder="Digite seu e-mail ou usuário"
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>

              <label className="flex flex-col w-full">
                <p className="text-[#0d121b] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                  Senha
                </p>
                <div className="flex w-full flex-1 items-stretch">
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-[#0d121b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfd7e7] dark:border-gray-600 bg-background-light dark:bg-background-dark/60 h-14 placeholder:text-gray-500 p-[15px] border-r-0 pr-2 text-base font-normal leading-normal" 
                    placeholder="Digite sua senha"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className="text-gray-500 dark:text-gray-400 flex border border-[#cfd7e7] dark:border-gray-600 bg-background-light dark:bg-background-dark/60 items-center justify-center px-4 rounded-r-lg border-l-0">
                    <span 
                      className="material-symbols-outlined cursor-pointer" 
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </div>
                </div>
              </label>

              <div className="flex justify-end">
                <p className="text-primary dark:text-secondary text-sm font-normal leading-normal underline cursor-pointer hover:text-primary/80 dark:hover:text-secondary/80 transition-colors">
                  Esqueci minha senha
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <button 
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center whitespace-nowrap rounded-lg bg-primary h-14 text-base font-bold text-white transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Entrando...' : 'Entrar'}
                </button>
                <button 
                  type="button"
                  onClick={handleCreateAccount}
                  disabled={loading}
                  className="flex items-center justify-center whitespace-nowrap rounded-lg bg-secondary h-14 text-base font-bold text-primary transition-colors hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Criar Conta
                </button>
              </div>
            </form>





            {/* Admin Access Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => navigate('/admin-login')}
                className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors group"
              >
                <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
                <span className="underline">Acessar como Administrador</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

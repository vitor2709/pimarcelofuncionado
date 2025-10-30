import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Login:', formData);
    
    // Simular login bem-sucedido e redirecionar para home
    if (formData.email && formData.password) {
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos');
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
                  className="flex items-center justify-center whitespace-nowrap rounded-lg bg-primary h-14 text-base font-bold text-white transition-colors hover:bg-primary/90"
                >
                  Entrar
                </button>
                <button 
                  type="button"
                  onClick={handleCreateAccount}
                  className="flex items-center justify-center whitespace-nowrap rounded-lg bg-secondary h-14 text-base font-bold text-primary transition-colors hover:bg-secondary/90"
                >
                  Criar Conta
                </button>
              </div>
            </form>

            <div className="relative flex items-center py-8">
              <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
              <span className="flex-shrink mx-4 text-sm text-gray-500 dark:text-gray-400">Ou entre com</span>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            </div>

            <div className="flex justify-center gap-4">
              <button 
                onClick={handleGoogleLogin}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"></path>
                  <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00"></path>
                  <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50"></path>
                  <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C43.021,36.213,44,30.551,44,24C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2"></path>
                </svg>
              </button>
              <button 
                onClick={handleFacebookLogin}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

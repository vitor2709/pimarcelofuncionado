import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registrarUsuario } from '../services/authService';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  // Validações de senha
  const passwordValidations = {
    minLength: formData.password.length >= 8,
    hasUpperCase: /[A-Z]/.test(formData.password),
    hasNumber: /[0-9]/.test(formData.password)
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validações
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      showNotification('Por favor, preencha todos os campos', 'error');
      return;
    }

    if (!passwordValidations.minLength || !passwordValidations.hasUpperCase || !passwordValidations.hasNumber) {
      showNotification('A senha não atende aos requisitos mínimos', 'error');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showNotification('As senhas não coincidem', 'error');
      return;
    }

    setLoading(true);

    try {
      // Registrar usuário no Supabase
      const dadosPerfil = {
        nome: formData.fullName
      };

      const { data, error } = await registrarUsuario(
        formData.email,
        formData.password,
        dadosPerfil
      );

      if (error) {
        throw error;
      }

      showNotification('Conta criada com sucesso!', 'success');
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      
      // Mensagens de erro mais amigáveis
      let mensagemErro = 'Erro ao criar conta. ';
      
      if (error.message.includes('already registered')) {
        mensagemErro += 'Este email já está cadastrado.';
      } else if (error.message.includes('Password')) {
        mensagemErro += 'A senha não atende aos requisitos.';
      } else {
        mensagemErro += error.message;
      }
      
      showNotification(mensagemErro, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-background-light dark:bg-background-dark">
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

      <div className="w-full max-w-md rounded-xl bg-background-light p-8 shadow-lg dark:bg-slate-900">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-text-main dark:text-white">
              Crie sua Conta
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Bem-vindo à Cafeteria Sesc Senac
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Nome Completo */}
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium text-text-main dark:text-gray-300">
                Nome Completo
              </p>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Insira seu nome completo"
                className="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-lg bg-background-light p-3 text-sm font-normal leading-normal text-text-main placeholder:text-gray-400 focus:ring-0 dark:bg-slate-800 dark:text-white dark:placeholder:text-gray-500 border border-gray-300 dark:border-gray-600 focus:border-primary focus:outline-none focus:shadow-[0_0_0_2px_rgba(0,86,145,0.2)]"
              />
            </label>

            {/* E-mail */}
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium text-text-main dark:text-gray-300">
                E-mail
              </p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                className="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-lg bg-background-light p-3 text-sm font-normal leading-normal text-text-main placeholder:text-gray-400 focus:ring-0 dark:bg-slate-800 dark:text-white dark:placeholder:text-gray-500 border border-gray-300 dark:border-gray-600 focus:border-primary focus:outline-none focus:shadow-[0_0_0_2px_rgba(0,86,145,0.2)]"
              />
            </label>

            {/* Senha */}
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium text-text-main dark:text-gray-300">
                Senha
              </p>
              <div className="form-input flex w-full flex-1 items-stretch rounded-lg bg-background-light pr-3 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 focus-within:border-primary focus-within:shadow-[0_0_0_2px_rgba(0,86,145,0.2)]">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Crie uma senha"
                  className="w-full flex-1 resize-none overflow-hidden border-0 bg-transparent p-3 text-sm font-normal leading-normal text-text-main placeholder:text-gray-400 focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </label>

            {/* Password Requirements */}
            <div>
              <p className="text-xs font-normal leading-normal text-gray-600 dark:text-gray-400">
                Sua senha precisa conter:
              </p>
              <ul className="mt-2 space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-base ${passwordValidations.minLength ? 'text-green-500' : 'text-gray-400'}`}>
                    {passwordValidations.minLength ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <span>Mínimo de 8 caracteres</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-base ${passwordValidations.hasUpperCase ? 'text-green-500' : 'text-gray-400'}`}>
                    {passwordValidations.hasUpperCase ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <span>Uma letra maiúscula</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-base ${passwordValidations.hasNumber ? 'text-green-500' : 'text-gray-400'}`}>
                    {passwordValidations.hasNumber ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <span>Um número</span>
                </li>
              </ul>
            </div>

            {/* Confirmar Senha */}
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium text-text-main dark:text-gray-300">
                Confirmar Senha
              </p>
              <div className="form-input flex w-full flex-1 items-stretch rounded-lg bg-background-light pr-3 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 focus-within:border-primary focus-within:shadow-[0_0_0_2px_rgba(0,86,145,0.2)]">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirme sua senha"
                  className="w-full flex-1 resize-none overflow-hidden border-0 bg-transparent p-3 text-sm font-normal leading-normal text-text-main placeholder:text-gray-400 focus:outline-none focus:ring-0 dark:text-white dark:placeholder:text-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showConfirmPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-base font-bold text-accent transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Criando conta...' : 'Criar Conta'}
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Já tem uma conta?{' '}
              <Link to="/" className="font-semibold text-primary hover:underline">
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

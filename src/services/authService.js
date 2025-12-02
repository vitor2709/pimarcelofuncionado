import { supabase } from '../config/supabase';

// Registrar novo usuário
export const registrarUsuario = async (email, senha, dadosPerfil) => {
  try {
    // Criar usuário no auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password: senha,
      options: {
        data: {
          nome: dadosPerfil.nome
        }
      }
    });
    
    if (authError) throw authError;

    return { data: authData, error: null };
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    return { data: null, error };
  }
};

// Login
export const login = async (email, senha) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return { data: null, error };
  }
};

// Logout
export const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    return { error };
  }
};

// Obter usuário atual
export const getUsuarioAtual = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return { data: user, error: null };
  } catch (error) {
    console.error('Erro ao obter usuário:', error);
    return { data: null, error };
  }
};

// Obter perfil do usuário
export const getPerfil = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('perfil')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    return { data: null, error };
  }
};

// Atualizar perfil
export const atualizarPerfil = async (userId, dadosPerfil) => {
  try {
    const { data, error } = await supabase
      .from('perfil')
      .update(dadosPerfil)
      .eq('id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    return { data: null, error };
  }
};

// Verificar se usuário está autenticado
export const estaAutenticado = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session !== null;
};

// Listener para mudanças de autenticação
export const onAuthStateChange = (callback) => {
  return supabase.auth.onAuthStateChange((event, session) => {
    callback(event, session);
  });
};

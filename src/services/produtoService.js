import { supabase } from '../config/supabase';

// Buscar todos os produtos
export const getProdutos = async () => {
  try {
    const { data, error } = await supabase
      .from('produto')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return { data: null, error };
  }
};

// Buscar produtos por categoria
export const getProdutosPorCategoria = async (categoria) => {
  try {
    const { data, error } = await supabase
      .from('produto')
      .select('*')
      .eq('categoria', categoria)
      .order('id', { ascending: true });
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erro ao buscar produtos por categoria:', error);
    return { data: null, error };
  }
};

// Buscar produto por ID
export const getProdutoPorId = async (id) => {
  try {
    const { data, error } = await supabase
      .from('produto')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return { data: null, error };
  }
};

// Criar novo produto
export const criarProduto = async (produto) => {
  try {
    const { data, error } = await supabase
      .from('produto')
      .insert([produto])
      .select()
      .single();
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return { data: null, error };
  }
};

// Atualizar produto
export const atualizarProduto = async (id, produto) => {
  try {
    const { data, error } = await supabase
      .from('produto')
      .update(produto)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    return { data: null, error };
  }
};

// Deletar produto
export const deletarProduto = async (id) => {
  try {
    const { error } = await supabase
      .from('produto')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    return { error };
  }
};

// Upload de imagem
export const uploadImagem = async (file, path) => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('produtos')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('produtos')
      .getPublicUrl(filePath);

    return { data: data.publicUrl, error: null };
  } catch (error) {
    console.error('Erro ao fazer upload da imagem:', error);
    return { data: null, error };
  }
};

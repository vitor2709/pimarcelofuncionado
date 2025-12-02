import { supabase } from '../config/supabase';

// Buscar todos os pedidos
export const getPedidos = async () => {
  try {
    const { data, error } = await supabase
      .from('pedido')
      .select(`
        *,
        perfil(nome, email),
        itens_pedido(
          quantidade,
          preco_unitario,
          produto(nome, descricao, imagem)
        )
      `)
      .order('data_pedido', { ascending: false });
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    return { data: null, error };
  }
};

// Buscar pedidos por usuário
export const getPedidosPorUsuario = async (perfilId) => {
  try {
    const { data, error } = await supabase
      .from('pedido')
      .select(`
        *,
        itens_pedido(
          quantidade,
          preco_unitario,
          produto(nome, descricao, imagem)
        )
      `)
      .eq('perfil_id', perfilId)
      .order('data_pedido', { ascending: false });
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erro ao buscar pedidos do usuário:', error);
    return { data: null, error };
  }
};

// Criar novo pedido
export const criarPedido = async (pedido, itens) => {
  try {
    // Criar o pedido
    const { data: pedidoData, error: pedidoError } = await supabase
      .from('pedido')
      .insert([pedido])
      .select()
      .single();
    
    if (pedidoError) throw pedidoError;

    // Adicionar os itens do pedido
    const itensComPedidoId = itens.map(item => ({
      ...item,
      pedido_id: pedidoData.id
    }));

    const { error: itensError } = await supabase
      .from('itens_pedido')
      .insert(itensComPedidoId);
    
    if (itensError) throw itensError;

    return { data: pedidoData, error: null };
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    return { data: null, error };
  }
};

// Atualizar status do pedido
export const atualizarStatusPedido = async (id, status) => {
  try {
    const { data, error } = await supabase
      .from('pedido')
      .update({ status })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erro ao atualizar status do pedido:', error);
    return { data: null, error };
  }
};

// Deletar pedido
export const deletarPedido = async (id) => {
  try {
    // Primeiro deletar os itens do pedido
    const { error: itensError } = await supabase
      .from('itens_pedido')
      .delete()
      .eq('pedido_id', id);
    
    if (itensError) throw itensError;

    // Depois deletar o pedido
    const { error } = await supabase
      .from('pedido')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Erro ao deletar pedido:', error);
    return { error };
  }
};

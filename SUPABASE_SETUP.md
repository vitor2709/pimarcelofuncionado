# Configuração do Supabase

## Estrutura das Tabelas

### Tabela: `produto`
```sql
CREATE TABLE produto (
  id BIGSERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  preco DECIMAL(10, 2) NOT NULL,
  categoria VARCHAR(100),
  imagem TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Tabela: `perfil`
```sql
CREATE TABLE perfil (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  nome VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  telefone VARCHAR(20),
  endereco TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Tabela: `pedido`
```sql
CREATE TABLE pedido (
  id BIGSERIAL PRIMARY KEY,
  perfil_id UUID REFERENCES perfil(id),
  status VARCHAR(50) DEFAULT 'pendente',
  total DECIMAL(10, 2) NOT NULL,
  data_pedido TIMESTAMP DEFAULT NOW(),
  observacoes TEXT
);
```

### Tabela: `itens_pedido`
```sql
CREATE TABLE itens_pedido (
  id BIGSERIAL PRIMARY KEY,
  pedido_id BIGINT REFERENCES pedido(id) ON DELETE CASCADE,
  produto_id BIGINT REFERENCES produto(id),
  quantidade INTEGER NOT NULL,
  preco_unitario DECIMAL(10, 2) NOT NULL
);
```

### Tabela: `escola`
```sql
CREATE TABLE escola (
  id BIGSERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  endereco TEXT,
  telefone VARCHAR(20),
  email VARCHAR(255)
);
```

### Tabela: `lanchonete`
```sql
CREATE TABLE lanchonete (
  id BIGSERIAL PRIMARY KEY,
  escola_id BIGINT REFERENCES escola(id),
  nome VARCHAR(255) NOT NULL,
  horario_funcionamento TEXT
);
```

## Storage Bucket

Crie um bucket público chamado `produtos` para armazenar as imagens dos produtos:

1. Vá em Storage no Supabase
2. Crie um novo bucket chamado `produtos`
3. Torne-o público marcando a opção "Public bucket"

## Políticas de Segurança (RLS)

### Para `produto`:
```sql
-- Permitir leitura pública
CREATE POLICY "Permitir leitura pública de produtos"
ON produto FOR SELECT
TO public
USING (true);

-- Permitir inserção apenas para usuários autenticados
CREATE POLICY "Permitir inserção de produtos para autenticados"
ON produto FOR INSERT
TO authenticated
WITH CHECK (true);

-- Permitir atualização apenas para usuários autenticados
CREATE POLICY "Permitir atualização de produtos para autenticados"
ON produto FOR UPDATE
TO authenticated
USING (true);

-- Permitir deleção apenas para usuários autenticados
CREATE POLICY "Permitir deleção de produtos para autenticados"
ON produto FOR DELETE
TO authenticated
USING (true);
```

### Para `perfil`:
```sql
-- Permitir leitura do próprio perfil
CREATE POLICY "Usuários podem ler próprio perfil"
ON perfil FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- Permitir atualização do próprio perfil
CREATE POLICY "Usuários podem atualizar próprio perfil"
ON perfil FOR UPDATE
TO authenticated
USING (auth.uid() = id);
```

### Para `pedido`:
```sql
-- Permitir leitura dos próprios pedidos
CREATE POLICY "Usuários podem ler próprios pedidos"
ON pedido FOR SELECT
TO authenticated
USING (perfil_id = auth.uid());

-- Permitir criação de pedidos
CREATE POLICY "Usuários podem criar pedidos"
ON pedido FOR INSERT
TO authenticated
WITH CHECK (perfil_id = auth.uid());
```

## Integração Implementada

✅ **Produtos (Menu)**
- Listar todos os produtos
- Adicionar novo produto
- Editar produto existente
- Deletar produto
- Upload de imagens

✅ **Autenticação**
- Registro de usuários
- Login
- Logout
- Gerenciamento de sessão

✅ **Pedidos**
- Criar pedido com itens
- Listar pedidos do usuário
- Atualizar status do pedido
- Listar todos os pedidos (admin)

## Próximos Passos

Para completar a integração, você pode:

1. **Páginas de Produtos por Categoria**: Conectar as páginas de bebidas quentes, geladas, salgados e doces ao Supabase
2. **Carrinho de Compras**: Implementar persistência do carrinho no localStorage ou Supabase
3. **Checkout**: Integrar a criação de pedidos no processo de checkout
4. **Dashboard Admin**: Conectar as estatísticas ao banco de dados real
5. **Autenticação**: Implementar login/registro real nas páginas Login.jsx e Register.jsx

## Variáveis de Ambiente (Opcional)

Para maior segurança em produção, mova as credenciais para variáveis de ambiente:

1. Crie um arquivo `.env` na raiz do projeto:
```
VITE_SUPABASE_URL=https://igtxexrtsysixclqjbfp.supabase.co
VITE_SUPABASE_ANON_KEY=sua_chave_aqui
```

2. Atualize `src/config/supabase.js`:
```javascript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
```

3. Adicione `.env` ao `.gitignore`

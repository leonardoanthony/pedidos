# Design Spec: Painel Admin Completo

**Data:** 2026-07-15
**Projeto:** Pedidos (Sistema de Gerenciamento de Pedidos)
**Status:** Aprovado

---

## 1. Visão Geral

Expansão do sistema de pedidos existente para incluir:
- Cadastro de clientes (hardcoded)
- Catálogo de produtos (hardcoded)
- Painel admin completo com sidebar, dashboard e seções gerenciáveis
- Busca, filtros e ordenação em todas as seções

**Escopo:** Tudo hardcoded no frontend. Sem backend.

---

## 2. Arquitetura dos Dados

### 2.1 Clientes (`clientes.js`)

```javascript
const clientes = [
  {
    id: 1,
    nome: "Edgard",
    telefone: "(11) 99999-0000",
    endereco: "Rua X, 123 - São Paulo/SP",
    frete: 10
  }
];
```

### 2.2 Produtos (`produtos.js`)

```javascript
const produtos = [
  {
    id: 1,
    nome: "Pack Camisa 3 Unidades",
    cores: [
      { nome: "Preto", hash: "#000000" },
      { nome: "Branco", hash: "#FFFFFF" }
    ],
    tamanhos: ["P", "M", "G", "GG"],
    imagem: "https://exemplo.com/camisa.jpg" // ou "./assets/camisa.jpg"
  }
];
```

### 2.3 Pedidos (`pedidos.js`) — existente, com adição de `data`

```javascript
const pedidos = [
  {
    code: 1212,
    nome: "Edgard",
    data: "2026-08-01",  // NOVO: formato YYYY-MM-DD
    status: "Entregue",
    itens: [...],
    pagamentos: [...]
  }
];
```

---

## 3. Layout do Admin

### 3.1 Estrutura

- **Sidebar fixa** à esquerda (250px desktop, hamburger mobile)
- **Logo** "POLAR BEAR" no topo da sidebar
- **Links de navegação** com ícones emoji + texto
- **Área principal** à direita com padding e scroll independente

### 3.2 Navegação (ordem)

1. Dashboard
2. Clientes
3. Pedidos
4. Pagamentos
5. Produtos

### 3.3 Comportamento

- Navegação por JS (mostra/esconde seções)
- Estado ativo destacado (fundo #2C2C2C)
- Barra de busca + avatar no topo do conteúdo

### 3.4 Design System

Seguir o design system Polar Bear existente:
- Fonte: Inter
- Cores: --primary (#111), --accent (#6A8D73), --success (#30B566), --warning (#F2B544), --danger (#E45D5D)
- Bordas arredondadas: --radius-lg (22px) para cards
- Sombras: --shadow-sm

---

## 4. Seções do Admin

### 4.1 Dashboard

**Cards de métricas (topo):**
- Total de Pedidos (número)
- Receita Total (R$)
- Pagamentos Pendentes (R$ + quantidade de parcelas)

**Tabela de Pedidos Recentes:**
- Colunas: Código, Cliente, Status (badge), Valor
- Clicável → expande inline com detalhes

**Resumo de Pagamentos:**
- Próximas parcelas a vencer
- Status: pago/em aberto/atrasado

### 4.2 Clientes

**Tabela:**
- Colunas: Nome, Telefone, Endereço, Frete

**Funcionalidades:**
- Busca por nome (filtra em tempo real)
- Ordenação por nome (clicando no cabeçalho)
- Botão "Novo Cliente" → formulário inline
- Clicou na linha → expande inline com formulário de edição
- Exclusão com confirmação

**Formulário:**
```
Nome: [input]
Telefone: [input]
Endereço: [input]
Frete padrão: [input numérico]
[Salvar] [Cancelar]
```

### 4.3 Pedidos

**Tabela:**
- Colunas: Código, Cliente, Data, Status (badge), Valor Total

**Funcionalidades:**
- Busca por código ou nome do cliente
- Filtro por status: Todos / Pendente / Em Entrega / Entregue / Atrasado
- Ordenação por código, data ou valor
- Expansão inline ao clicar

**Detalhes do Pedido (expandido):**
- Dados do cliente (nome, telefone, endereço)
- Tabela de itens: Item, Tam, Qtd, Valor, Total
- Subtotal
- Select de status para alteração
- Botão "Salvar Alterações"

### 4.4 Pagamentos

**Resumo no topo:**
- Total Recebido: R$ X
- Total Pendente: R$ X
- Atrasado: R$ X

**Tabela:**
- Colunas: Código Pedido, Cliente, Mês, Valor, Status (badge)

**Funcionalidades:**
- Busca por nome do cliente
- Filtro por status: Todos / Pago / Em Aberto / Atrasado
- Ordenação por mês ou valor
- Edição rápida: clicou no status → toggle entre estados

### 4.5 Produtos

**Grid/Cards:**
- Imagem, nome, cores (swatches), tamanhos

**Funcionalidades:**
- Busca por nome
- Ordenação por nome
- Clicou no card → expande com formulário de edição

**Formulário:**
```
Nome: [input]
Cores: [add/remover com hex]
Tamanhos: [add/remover]
URL da imagem: [input]
[Salvar] [Cancelar]
```

---

## 5. Página Pública (`index.html`)

**Mantida como está** — apenas consulta de pedido por código.

---

## 6. Estrutura de Arquivos

```
pedidos/
├── index.html              (página pública)
├── pedidos.js              (dados de pedidos)
├── clientes.js             (dados de clientes) — NOVO
├── produtos.js             (dados de produtos) — NOVO
├── admin/
│   └── index.html          (painel admin) — REESCRITO
├── docs/
│   └── design-system/
│       └── index.html      (design system)
└── assets/                 (imagens locais) — NOVO (opcional)
```

---

## 7. Fontes de Dados

Hardcoded em arquivos JS. Exemplo de carregamento no admin:

```html
<script src="../pedidos.js"></script>
<script src="../clientes.js"></script>
<script src="../produtos.js"></script>
```

Imagens de produtos: URLs externas ou caminhos relativos (`./assets/...`).

---

## 8. Restrições

- Sem backend — dados estáticos
- Sem autenticação real (login hardcoded mantido)
- Sem persistência — alterações só no estado da sessão
- Tudo em um único arquivo HTML por página (admin)
- Design system Polar Bear obrigatório

---

## 9. Fora do Escopo

- Backend/API
- Autenticação real
- Persistência de dados
- Sistema de notificações
- Relatórios/PDF/Exportação

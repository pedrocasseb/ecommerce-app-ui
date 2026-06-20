# 🪐 ORBIT - E-commerce

Uma aplicação de e-commerce moderna, rápida e responsiva construída com as tecnologias mais recentes do ecossistema React e Next.js. O projeto conta com uma interface premium, fluxo completo de carrinho de compras e validações robustas de checkout.

![Orbit E-commerce](public/app.png)

---

## 🚀 Funcionalidades

- **Catálogo Dinâmico**: Visualização de produtos em destaque na página inicial com suporte a filtros por categorias e barra de busca integrada.
- **Página de Detalhes do Produto**: Exibição detalhada de imagens, descrição completa, preço, seleção de tamanhos e cores dinâmicas.
- **Carrinho de Compras**: Gerenciamento de estado global com Zustand, permitindo adicionar, atualizar quantidade, remover itens e limpar o carrinho de forma rápida e reativa.
- **Fluxo de Checkout Validado**:
  - **Dados de Entrega**: Validação em tempo real dos campos de endereço, e-mail e telefone.
  - **Dados de Pagamento**: Validação de número de cartão de crédito, titular, validade e CVV.
- **Experiência do Usuário (UX)**:
  - Feedbacks instantâneos através de notificações do tipo Toast.
  - Design totalmente responsivo adaptado para dispositivos móveis, tablets e computadores.
  - Micro-animações suaves e visual moderno no estilo Glassmorphism.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: [Next.js 16 (App Router)](https://nextjs.org/) & [React 19](https://react.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) & [Lucide React](https://lucide.dev/) (Ícones)
- **Gerenciamento de Estado**: [Zustand](https://zustand-demo.pmnd.rs/) (com persistência local)
- **Validação de Formulários**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Notificações**: [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 📁 Estrutura de Pastas

Abaixo está a estrutura principal do diretório do projeto dentro de `src/`:

```bash
src/
├── app/                  # Roteamento e páginas (App Router)
│   ├── cart/             # Página do carrinho e checkout
│   ├── products/         # Páginas de listagem e detalhes (/products/[id])
│   ├── globals.css       # Configuração global de estilos do Tailwind CSS v4
│   ├── layout.tsx        # Layout principal com Navbar e Footer
│   └── page.tsx          # Página inicial (Home)
├── components/           # Componentes reutilizáveis da interface
│   ├── Categories.tsx    # Componente de filtro por categorias
│   ├── Navbar.tsx        # Barra de navegação com contador do carrinho
│   ├── ProductCard.tsx   # Card individual de exibição do produto
│   ├── PaymentForm.tsx   # Formulário de checkout com validação de cartão
│   ├── ShippingForm.tsx  # Formulário de endereço com validação Zod
│   └── ...
├── stores/               # Stores de gerenciamento de estado (Zustand)
│   └── cartStore.ts      # Controle do carrinho (itens, quantidade, limpar)
└── types.ts              # Definições de tipagem TypeScript e esquemas Zod
```

---

## ⚙️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clonar o repositório
```bash
git clone <url-do-repositorio>
cd client
```

### 2. Instalar as dependências
Utilize o gerenciador de pacotes de sua preferência (`npm` ou `pnpm`):

```bash
# Usando npm
npm install

# Usando pnpm
pnpm install
```

### 3. Executar em modo de desenvolvimento
Após a instalação das dependências, inicie o servidor local:

```bash
# Usando npm
npm run dev

# Usando pnpm
pnpm run dev
```

Abra o navegador em [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

### 4. Build de produção (Opcional)
Para gerar uma build otimizada de produção:

```bash
# Usando npm
npm run build

# Usando pnpm
pnpm run build
```

---

## 🛡️ Validações implementadas

### Informações de Envio (`shippingFormSchema`)
- **Nome**: Obrigatório.
- **E-mail**: Formato de e-mail válido.
- **Telefone**: Deve conter apenas números, com tamanho entre 7 e 10 dígitos.
- **Endereço e Cidade**: Obrigatórios.

### Informações de Pagamento (`paymentFormSchema`)
- **Nome no Cartão**: Obrigatório.
- **Número do Cartão**: Exatamente 16 dígitos.
- **Data de Validade**: Formato `MM/AA`.
- **CVV**: Exatamente 3 dígitos.

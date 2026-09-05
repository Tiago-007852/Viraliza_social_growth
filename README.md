# 🚀 Viraliza — Social Growth Platform

> **Faz a tua presença digital crescer.** Uma plataforma. Todas as tuas redes sociais.

O **Viraliza** é uma landing page moderna, interativa e de alta conversão concebida para serviços de crescimento e autoridade digital nas principais redes sociais (Instagram, TikTok, YouTube e Facebook). O site oferece aos clientes uma experiência imersiva com visualização em órbita 3D, seleção intuitiva de planos e fluxo de contratação instantâneo direto pelo WhatsApp.

---

## 📑 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Plataformas Atendidas](#-plataformas-atendidas)
- [Pacotes e Preços](#-pacotes-e-preços)
- [Fluxo de Conversão no WhatsApp](#-fluxo-de-conversão-no-whatsapp)
- [Design & Identidade Visual](#-design--identidade-visual)
- [Responsividade & Dispositivos Móveis](#-responsividade--dispositivos-móveis)
- [Arquitetura e Estrutura de Ficheiros](#-arquitetura-e-estrutura-de-ficheiros)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Licença](#-licença)

---

## 🌟 Visão Geral

O site foi estruturado para apresentar os serviços de forma limpa, direta e com forte apelo visual, eliminando o atrito tradicional de formulários de checkout complexos. O utilizador navega pelas plataformas, seleciona o pacote que melhor atende aos seus objetivos e, com um único clique, inicia a conversa com a equipa de atendimento no WhatsApp já com todos os detalhes do pacote pré-configurados.

---

## ⚡ Funcionalidades Principais

1. **Viraliza Orbit Interativo (3D Elliptical Canvas)**:
   - Apresentação orbital dinâmica no Hero, onde os nós das redes sociais giram suavemente ao redor do núcleo da marca.
   - Profundidade simulada em tempo real (mudança de escala, opacidade e sombras conforme a posição Z).
   - Pausa automática ao passar o cursor ou ao tocar no telemóvel.
   - Seleção interativa: ao clicar em qualquer nó orbital, o site sincroniza e foca a plataforma escolhida.

2. **Seletor de Plataformas Sincronizado**:
   - Barra de abas com ícones oficiais e efeito visual ativo (*gradient pill*).
   - Cartões de plataforma dedicados com descrições específicas de cada rede social e indicação de status.

3. **Grelha de Preços Transparente**:
   - 5 níveis de pacotes por plataforma: **Básico**, **Standard**, **Premium**, **Gold** (com selo de destaque *"🔥 MAIS ESCOLHIDO"*) e **Platina**.
   - Detalhamento explícito de quantidade de seguidores, likes incluídos e preço em Euros.
   - Feedback dinâmico da plataforma atualmente em exibição.

4. **Secção "Como Funciona"**:
   - 3 passos claros e ilustrados:
     1. **Escolhe o Pacote**: Selecionar a rede e o plano desejado.
     2. **Envia o Teu Link**: Indicar o perfil ou canal sem nunca solicitar senhas.
     3. **Vê o Resultado**: Entrega ágil com acompanhamento direto.

5. **Navegação Inteligente & Sticky Navbar**:
   - Barra de navegação com efeito de vidro (*glassmorphism*) e desfoque (*backdrop blur*).
   - Menu hambúrguer animado para smartphones com alvos de clique otimizados.
   - Rolagem suave (*smooth scrolling*) entre as âncoras das secções (`#inicio`, `#servicos`, `#precos`, `#como-funciona`).

---

## 🌐 Plataformas Atendidas

| Plataforma | Ícone / Cor | Foco Principal | Tagline |
| :--- | :--- | :--- | :--- |
| **Instagram** | Rosa / Roxo / Laranja | Autoridade visual, alcance e engagement | *Seguidores + Likes* |
| **TikTok** | Ciano / Rosa Choque | Distribuição algorítmica e alcance de For You | *Seguidores + Likes* |
| **YouTube** | Vermelho Carmim | Subscritores para vídeos longos e Shorts | *Seguidores + Likes* |
| **Facebook** | Azul Real | Alcance de páginas, negócios e comunidades | *Seguidores + Likes* |

---

## 💎 Pacotes e Preços

Todos os pacotes são válidos para a plataforma selecionada e incluem seguidores combinados com curtidas para um crescimento equilibrado:

| Pacote | Seguidores | Likes | Preço | Destaque |
| :--- | :---: | :---: | :---: | :--- |
| **Básico** | 500 | 50 | **€7,90** | Ideal para perfis novos ou validação inicial |
| **Standard** | 1.500 | 100 | **€14,90** | Mais alcance e presença regular |
| **Premium** | 3.000 | 200 | **€24,90** | Autoridade acelerada para criadores |
| **Gold** | **7.000** | **400** | **€39,90** | ⭐ **Mais Escolhido** (Melhor custo-benefício) |
| **Platina** | 15.000 | 800 | **€69,90** | Máximo impacto e crescimento exponencial |

---

## 📲 Fluxo de Conversão no WhatsApp

O processo de compra utiliza a API oficial de deep link do WhatsApp (`https://wa.me/`):

- **Número Configurado**: `+244 924445652`
- **Exemplo de Mensagem Gerada Automaticamente**:

```text
Olá! 👋

Tenho interesse no pacote Gold para Instagram.

📦 7.000 seguidores
❤️ 400 likes
💰 €39,90

Gostaria de saber como posso avançar.
```

O cliente não precisa redigir nem explicar qual plano deseja; a mensagem já chega formatada para a equipa comercial responder imediatamente.

---

## 🎨 Design & Identidade Visual

O website foi desenvolvido sob o padrão de estilo **Professional Polish**:

- **Fundo / Background**: `#050508` (Dark mode profundo com excelente contraste).
- **Luzes Ambientais**: Efeitos radiais sutis em roxo e anil (`BackgroundGlow`) criando profundidade sem poluição visual.
- **Cartões de Vidro (`glass-card`)**: Efeito translúcido com `backdrop-filter: blur(12px)` e bordas finas com transparência.
- **Cartão em Destaque (`gold-card`)**: Gradiente exclusivo roxo/rosa com brilho perimétrico para o pacote Gold.
- **Tipografia**: Família `Inter` com escala harmônica, rastreamento equilibrado e títulos com efeito `text-gradient`.
- **Micro-interações**: Animações suaves de entrada, transições de hover nos botões e elevação nos cartões ao passar o cursor.

---

## 📱 Responsividade & Dispositivos Móveis

A interface foi rigorosamente otimizada para todos os tipos de ecrãs:

- **Ecrãs Muito Pequenos (<360px)**: Suporte para dispositivos dobráveis externos e telemóveis compactos sem qualquer quebra de layout ou rolagem horizontal.
- **Smartphones (360px – 640px)**:
  - Viraliza Orbit redimensionado automaticamente com suporte a gestos de toque (`onTouchStart`/`onTouchEnd`).
  - Abas de plataformas organizadas em grelha 2x2 com cantos harmónicos e botões touch-friendly (mínimo de 44px de altura).
  - Grelha de preços em 1 coluna com fácil rolagem vertical.
- **Tablets (640px – 1024px)**: Grelha de 2 a 3 colunas para os pacotes e cartões de serviço balanceados.
- **Desktop e Monitores Grandes (≥1024px)**: Visualização completa em 5 colunas com o pacote Gold destacado em elevação superior (`translate-y`), Hero layout de duas colunas com órbita em tamanho real.
- **Viewport Safe Area**: Configuração com `viewport-fit=cover` para compatibilidade total com barras e entalhes de ecrã (*notches*).

---

## 📁 Arquitetura e Estrutura de Ficheiros

```text
├── index.html                  # Ponto de entrada HTML com metatags SEO e fonte Inter
├── metadata.json               # Configurações do applet
├── package.json                # Dependências do projeto e scripts npm
├── tsconfig.json               # Configuração do TypeScript
├── vite.config.ts              # Configuração do Vite e plugins
└── src/
    ├── main.tsx                # Ponto de entrada da aplicação React
    ├── App.tsx                 # Componente principal e orquestração das secções
    ├── index.css               # Folha de estilos global com Tailwind e utilitários
    ├── types.ts                # Interfaces e tipos TypeScript partilhados
    ├── data/
    │   └── config.ts           # Definição das plataformas, pacotes e WhatsApp
    ├── utils/
    │   └── whatsapp.ts         # Gerador de links e formatador de moeda/números
    └── components/
        ├── Navbar.tsx          # Cabeçalho responsivo com logo, links e botão CTA
        ├── Hero.tsx            # Secção inicial com título, slogans e CTAs
        ├── ViralizaOrbit.tsx   # Órbita interativa elíptica com as 4 redes sociais
        ├── PlatformsSection.tsx# Cartões descritivos de cada plataforma
        ├── PricingSection.tsx  # Tabela com as abas de redes e os 5 pacotes
        ├── HowItWorksSection.tsx # Passo a passo em 3 etapas de fácil compreensão
        ├── BackgroundGlow.tsx  # Luzes e gradientes de fundo do tema escuro
        ├── Footer.tsx          # Rodapé com logo, direitos e navegação
        └── icons/              # Componentes de ícones SVG customizados
```

---

## 🛠️ Tecnologias Utilizadas

- **React 19**: Biblioteca para construção da interface de utilizador com componentes funcionais e hooks.
- **TypeScript 5.8**: Tipagem estática rigorosa para garantir segurança e prevenir erros em tempo de execução.
- **Tailwind CSS 4**: Motor de utilitários CSS moderno e de alta performance.
- **Motion (`motion/react`)**: Biblioteca para animações fluidas de entrada, rolagem e hover.
- **Lucide React**: Pacote de ícones vetoriais com design limpo e uniforme.
- **Vite 6**: Ambiente de desenvolvimento rápido e bundler otimizado para produção.

---

## 💻 Como Executar o Projeto

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- Gerenciador de pacotes **npm**, **yarn** ou **bun**

### Instalação

1. Clone ou descarregue o repositório do projeto.
2. Instale as dependências:
   ```bash
   npm install
   ```

### Executar em Ambiente de Desenvolvimento

Inicie o servidor de desenvolvimento local:
```bash
npm run dev
```
Aceda à aplicação através do navegador no endereço indicado (por padrão `http://localhost:3000`).

### Verificar Erros de Tipo e Sintaxe (Lint)

```bash
npm run lint
```

### Compilar para Produção

Gere os ficheiros estáticos otimizados para produção na pasta `dist/`:
```bash
npm run build
```

---

## 📄 Licença

Desenvolvido para **Viraliza — Social Growth**. Todos os direitos reservados.

# Catálogo de Produtos

**Aluna:** Lívia Mendes e Anna Paula Lino 
**Disciplina:** Projeto de Website - Front End - Avaliação de Produto 2 - Desenvolvimento de Aplicação Web com React
**Data:** 2026

---

## Objetivo da Aplicação

Desenvolver uma aplicação web funcional em React que implemente um catálogo de produtos com funcionalidades interativas. O projeto demonstra o domínio de conceitos fundamentais de React, incluindo componentes, props, estado (useState), eventos, renderização condicional e manipulação de listas.

---

## Tecnologias Utilizadas

- **React 19.2.1** - Biblioteca JavaScript para construção de interfaces
- **JavaScript ES6+** - Linguagem de programação (sem TypeScript)
- **CSS3** - Estilização pura, sem frameworks CSS
- **Vite** - Ferramenta de build e desenvolvimento
- **Node.js** - Ambiente de execução JavaScript

---

## Requisitos Atendidos

### Estrutura do Projeto
- ✅ Estrutura simples e organizada com pastas `components`, `data` e arquivos principais
- ✅ Uso de React com JavaScript (sem TypeScript)
- ✅ Código fácil de entender com comentários explicativos

### Componentes React
- ✅ **4 componentes** implementados:
  1. `Header.jsx` - Cabeçalho com título e contador de favoritos
  2. `SearchBar.jsx` - Campo de busca por nome de produto
  3. `ProductCard.jsx` - Card individual de produto
  4. `ProductList.jsx` - Grid de produtos
  5. `App.jsx` - Componente principal (bônus)

### Props e Estado
- ✅ **Props** utilizadas em 2+ componentes:
  - `ProductCard` recebe `product`, `isFavorite`, `onToggleFavorite`
  - `ProductList` recebe `products`, `favorites`, `onToggleFavorite`
  - `Header` recebe `favoriteCount`
  - `SearchBar` recebe `searchTerm`, `onSearchChange`

- ✅ **useState** em 2+ situações:
  1. `searchTerm` - Gerencia o termo de busca digitado
  2. `selectedCategory` - Gerencia a categoria selecionada
  3. `favorites` - Gerencia lista de produtos favoritados

### Funcionalidades Interativas
1. ✅ **Busca por nome** - Campo de entrada que filtra produtos em tempo real
2. ✅ **Filtro por categoria** - Botões para selecionar categorias (Todos, Eletrônicos, Acessórios, Casa, Livros)
3. ✅ **Sistema de favoritos** - Botão em cada produto para adicionar/remover dos favoritos
4. ✅ **Contador de produtos** - Exibe quantidade de produtos encontrados

### Eventos
- ✅ **onChange** - Evento de digitação no campo de busca
- ✅ **onClick** - Clique em botões de categoria e favoritos
- ✅ Manipulação de eventos com funções callback

### Dados e Renderização
- ✅ **12 produtos** com dados completos (id, nome, preço, categoria, descrição, imagem)
- ✅ Renderização dinâmica de produtos baseada em filtros
- ✅ Renderização condicional (mensagem quando nenhum produto é encontrado)

### Interface
- ✅ Menu de categorias organizado
- ✅ Layout responsivo (desktop, tablet, mobile)
- ✅ Design simples e moderno com cores neutras
- ✅ Estilos apenas com CSS puro (sem frameworks)

---

## Estrutura do Projeto

```
catalogo-produtos-academico/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx          # Cabeçalho da aplicação
│   │   │   ├── SearchBar.jsx       # Campo de busca
│   │   │   ├── ProductCard.jsx     # Card do produto
│   │   │   └── ProductList.jsx     # Lista de produtos
│   │   ├── data/
│   │   │   └── products.js         # Dados dos produtos
│   │   ├── App.jsx                 # Componente principal
│   │   ├── App.css                 # Estilos da aplicação
│   │   └── main.jsx                # Ponto de entrada
│   └── index.html                  # HTML principal
├── package.json                    # Dependências do projeto
├── vite.config.js                  # Configuração do Vite
└── README.md                       # Este arquivo
```

---

## Instruções para Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou pnpm

### Passos para Executar

1. **Clonar ou extrair o projeto:**
   ```bash
   cd catalogo-produtos-academico
   ```

2. **Instalar dependências:**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Acessar a aplicação:**
   - Abra o navegador e acesse: `http://localhost:3000`
   - A aplicação será recarregada automaticamente ao fazer alterações no código

5. **Build para produção:**
   ```bash
   pnpm build
   # ou
   npm run build
   ```

---

## Funcionalidades Detalhadas

### 1. Busca por Nome
- Campo de entrada que filtra produtos em tempo real
- Busca case-insensitive (não diferencia maiúsculas/minúsculas)
- Atualiza a lista de produtos conforme o usuário digita

### 2. Filtro por Categoria
- 5 categorias disponíveis: Todos, Eletrônicos, Acessórios, Casa, Livros
- Botões interativos que destacam a categoria selecionada
- Combina com a busca para filtrar produtos

### 3. Sistema de Favoritos
- Botão em cada produto (coração) para adicionar/remover dos favoritos
- Contador no cabeçalho exibe total de produtos favoritados
- Favoritos persistem durante a sessão

### 4. Contador de Produtos
- Exibe quantos produtos foram encontrados
- Atualiza dinamicamente com base nos filtros aplicados

---

## Dados dos Produtos

O catálogo contém 12 produtos com as seguintes informações:
- **ID** - Identificador único
- **Nome** - Nome do produto
- **Preço** - Valor em reais (R$)
- **Categoria** - Categoria do produto
- **Descrição** - Breve descrição
- **Imagem** - URL da imagem do produto

### Categorias Disponíveis
1. Eletrônicos (7 produtos)
2. Acessórios (1 produto)
3. Casa (3 produtos)
4. Livros (2 produtos)

---

## Design e Estilo

### Paleta de Cores
- **Primária:** #2c3e50 (Azul escuro)
- **Secundária:** #f5f5f5 (Cinza claro)
- **Destaque:** #e8f0f7 (Azul claro)
- **Texto:** #333 (Cinza escuro)

### Tipografia
- **Títulos:** Playfair Display (serif) - 700
- **Corpo:** Roboto (sans-serif) - 400, 500, 600

### Responsividade
- **Desktop:** Grid de 4-5 colunas
- **Tablet:** Grid de 2-3 colunas
- **Mobile:** Grid de 1 coluna

---

## Comentários no Código

O código contém comentários explicativos nas principais seções:
- Descrição de cada componente e suas props
- Explicação da lógica de filtragem
- Detalhes sobre manipulação de estado
- Notas sobre eventos e callbacks

---

## Aprendizados Demonstrados

1. **Componentes React** - Criação e reutilização de componentes funcionais
2. **Props** - Passagem de dados entre componentes
3. **Estado (useState)** - Gerenciamento de estado local
4. **Eventos** - Manipulação de eventos do usuário
5. **Renderização Condicional** - Exibição condicional de elementos
6. **Listas Dinâmicas** - Renderização de listas com map()
7. **Filtros** - Implementação de filtros complexos
8. **CSS Puro** - Estilização sem frameworks
9. **Responsividade** - Design responsivo com media queries
10. **Boas Práticas** - Código organizado, legível e bem comentado

---

## Notas Importantes

- O projeto foi desenvolvido seguindo boas práticas de desenvolvimento web
- Não utiliza TypeScript, Context API, ThemeProvider ou bibliotecas UI avançadas
- Foco em simplicidade, clareza e funcionalidade
- Código adequado para um projeto acadêmico de graduação
- Todos os requisitos da atividade foram atendidos

---

## Conclusão

Este projeto demonstra o domínio dos conceitos fundamentais de React, incluindo componentes, props, estado, eventos e renderização dinâmica. A aplicação é funcional, bem estruturada e segue as melhores práticas de desenvolvimento web com React.

---

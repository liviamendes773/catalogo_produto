import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import { products, categories } from './data/products';
import './App.css';

/**
 * Componente principal App
 * Gerencia o estado da aplicação e coordena todos os componentes
 * 
 * Funcionalidades:
 * - Busca de produtos por nome
 * - Filtro por categoria
 * - Sistema de favoritos
 * - Contador de produtos encontrados
 */
function App() {
  // Estado para armazenar o termo de busca
  const [searchTerm, setSearchTerm] = useState('');
  
  // Estado para armazenar a categoria selecionada
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  // Estado para armazenar os IDs dos produtos favoritados
  const [favorites, setFavorites] = useState([]);

  // Função para filtrar produtos baseado em busca e categoria
  const filteredProducts = products.filter((product) => {
    // Verifica se o nome do produto contém o termo de busca (case-insensitive)
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Verifica se a categoria do produto corresponde à categoria selecionada
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    
    // Retorna true apenas se ambas as condições forem atendidas
    return matchesSearch && matchesCategory;
  });

  // Função para alternar o status de favorito de um produto
  const handleToggleFavorite = (productId) => {
    setFavorites((prevFavorites) => {
      // Se o produto já está nos favoritos, remove
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter((id) => id !== productId);
      }
      // Caso contrário, adiciona
      return [...prevFavorites, productId];
    });
  };

  return (
    <div className="app">
      {/* Cabeçalho da aplicação */}
      <Header favoriteCount={favorites.length} />

      <main className="main-content">
        <div className="container">
          {/* Barra de busca */}
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {/* Filtro por categoria */}
          <div className="filter-section">
            <h2 className="filter-title">Filtrar por Categoria</h2>
            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Contador de produtos encontrados */}
          <div className="results-info">
            <p className="results-count">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
            </p>
          </div>

          {/* Lista de produtos */}
          <ProductList
            products={filteredProducts}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>
      </main>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; 2024 Catálogo de Produtos. Projeto Acadêmico - Lívia Mendes</p>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import ProductCard from './ProductCard';

/**
 * Componente ProductList
 * Exibe a lista de produtos em um grid
 * 
 * Props:
 * - products: array de produtos a exibir
 * - favorites: array com IDs dos produtos favoritados
 * - onToggleFavorite: função chamada ao favoritar/desfavoritar um produto
 */
function ProductList({ products, favorites, onToggleFavorite }) {
  // Se não há produtos, exibe mensagem
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-message">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default ProductList;

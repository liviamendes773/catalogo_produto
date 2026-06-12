import React from 'react';

/**
 * Componente ProductCard
 * Exibe um card individual de produto com imagem, nome, preço e botão de favoritar
 * 
 * Props:
 * - product: objeto com dados do produto (id, name, price, category, description, image)
 * - isFavorite: booleano indicando se o produto está favoritado
 * - onToggleFavorite: função chamada ao clicar no botão de favoritar
 */
function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        <button
          className={`favorite-button ${isFavorite ? 'favorite-active' : ''}`}
          onClick={() => onToggleFavorite(product.id)}
          title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <span className="product-category">{product.category}</span>
        <div className="product-footer">
          <span className="product-price">R$ {product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

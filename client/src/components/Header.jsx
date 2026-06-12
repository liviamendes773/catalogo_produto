import React from 'react';

/**
 * Componente Header
 * Exibe o cabeçalho da aplicação com título e informações gerais
 * 
 * Props:
 * - favoriteCount: número de produtos favoritados
 */
function Header({ favoriteCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">Catálogo de Produtos</h1>
          <p className="header-subtitle">Projeto Acadêmico - Desenvolvimento Web com React</p>
        </div>
        <div className="header-info">
          <span className="favorite-badge">❤️ {favoriteCount} Favoritos</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

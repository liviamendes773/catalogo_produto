import React from 'react';

/**
 * Componente SearchBar
 * Campo de busca para filtrar produtos por nome
 * 
 * Props:
 * - searchTerm: valor atual da busca
 * - onSearchChange: função chamada quando o usuário digita
 */
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Buscar produtos por nome..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

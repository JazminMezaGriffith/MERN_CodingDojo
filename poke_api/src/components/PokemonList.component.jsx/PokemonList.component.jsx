import React from 'react';

const PokemonList = ({ pokemon }) => {
  return (
    <div>
      <ul>
        {pokemon.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;

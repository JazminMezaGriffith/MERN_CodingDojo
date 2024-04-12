import React, { useState } from 'react';
import axios from 'axios';
import Button from './components/Button/Button.component';
import PokemonList from './components/PokemonList.component.jsx/PokemonList.component';
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      const pokemonNames = response.data.results.map(p => p.name);
      setPokemon(pokemonNames);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  return (
    <div className="container">
      <Button onClick={fetchPokemon} />
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;

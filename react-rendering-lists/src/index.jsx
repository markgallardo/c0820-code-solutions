import React from 'react';
import ReactDOM from 'react-dom';

const Pokedex = [
  {
    number: '001',
    name: 'Bulbasaur'
  },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const PokemonList = Pokedex.map(props =>
  <li key={props.number}>{props.name}</li>
);
ReactDOM.render(
  <ul>{PokemonList}</ul>,
  document.getElementById('root')
);

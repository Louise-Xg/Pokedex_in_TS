import { useState } from "react";
import "./reset.css";
import "./App.css";
import PokemonCard from "./components/PokemonCard.tsx";
import MyComponent from "./components/MyComponent.tsx";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      {/* <MyComponent /> */}

      <nav>
        {pokemonList.map((pokemon) => (
          <button
            key={pokemon.name} //keeping list items in order, here each pokemon is associated to an img+name
            type="button"
            onClick={() => setPokemonName(pokemon.name)} //by adding this, the img + name of the pokemon change (they do not stay as bulbasaur despite clicking on other buttons)
          >
            {pokemon.name}
          </button>
        ))}
      </nav>
      <PokemonCard pokemon={pokemon} />
      {/* //a rendered list: a list of elements from an array */}
    </div>
  );
}

export default App;

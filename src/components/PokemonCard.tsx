type pokemonprops = {
  pokemon: {
    name: string; 
    imgSrc?: string;} //? for optional
}

function PokemonCard({pokemon}:pokemonprops) {
  
  return (
    pokemon.imgSrc !== undefined ? (
      <figure>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    ) : (
      <p>???</p>
    )
  );
}

export default PokemonCard;
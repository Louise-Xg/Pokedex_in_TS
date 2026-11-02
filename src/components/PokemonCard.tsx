import style from "./PokemonCard.module.css";

type pokemonprops = {
  pokemon: {
    name: string;
    imgSrc?: string;
  }; //? for optional
};

function PokemonCard({ pokemon }: pokemonprops) {
  return pokemon.imgSrc !== undefined ? (
    <figure>
      <img className={style.avatar} src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  ) : (
    <figure>
      <p>???</p>
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;

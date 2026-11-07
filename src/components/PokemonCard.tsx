import style from "./PokemonCard.module.css";

type PokemonProps = {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
};

function PokemonCard({ pokemon }: PokemonProps) {
  return pokemon.imgSrc !== undefined ? (
    <figure className={`${style.card} ${style[pokemon.name]}`}>
      <img className={style.avatar} src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption className={`${style.card_legend} ${style[pokemon.name]}`}>
        {pokemon.name}
      </figcaption>
    </figure>
  ) : (
    <figure className={`${style.card} ${style[pokemon.name]}`}>
      <p>???</p>
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;

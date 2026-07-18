export const PokemonCards = ({ PokemonData }) => {
  return (
    <>
      <li className="pokeman-cards">
        <h1 className="pokemon-name">{PokemonData.name}</h1>
        <figure>
          <img
            src={PokemonData.sprites.other.dream_world.front_default}
            alt={PokemonData.name}
            className="pokemon-cards"
          />
        </figure>
        <div className="pokemon-info pokemon-highlight">
          <p>
            {PokemonData.types
              .map((curelement) => curelement.type.name)
              .join(", ")}
          </p>
        </div>

        <div className="grid-three cols">
          <p className="pokemon-info">
            <span>Height:</span>
            {PokemonData.height}
          </p>

          <p className="pokemon-info">
            <span>Weight:</span>
            {PokemonData.weight}
          </p>

          <p className="pokemon-info">
            <span>Speed:</span>
            {PokemonData.stats[5].base_stat}
          </p>
        </div>

        <div className="grid-three cols">
          <div className="pokemon-info">
            <span>Experience:</span> <p>{PokemonData.base_experience}</p>
          </div>
          <div className="pokemon-info">
            <span>Attack:</span> <p>{PokemonData.stats[1].base_stat}</p>
          </div>
          <div className="pokemon-info">
            <span>Abilities:</span>{" "}
            <p>
              {PokemonData.abilities
                .map((abilityinfo) => abilityinfo.ability.name)
                .slice(0, 1)
                .join(", ")}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

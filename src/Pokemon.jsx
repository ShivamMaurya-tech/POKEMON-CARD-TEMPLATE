import "./pokemon1.css"; //css file

import { useEffect, useState } from "react";
import { PokemonCards } from "./PokemonCards";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=150";

  const fetchpokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);

      const detailedpokemonurl = data.results.map(async (curpokemon) => {
        const res = await fetch(curpokemon.url);
        const data = await res.json();
        // console.log(data);
        return data;
      });

      const detailedresponse = await Promise.all(detailedpokemonurl);
      console.log(detailedresponse);
      //   console.log(detailedpokemonurl);

      setPokemon(detailedresponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchpokemon();
  }, []);

  //   Search Functionality
  const searchcards = pokemon.filter((curelement) =>
    curelement.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Let's catch Pokemon</h1>
        </header>
        <div className="pokemon-searh">
          <input
            type="text"
            placeholder="Enter the cards name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <ul className="cards">
            {searchcards.map((curelement) => {
              return (
                <PokemonCards key={curelement.id} PokemonData={curelement} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";
import { fetchPokemon } from "../data/fetcher";
import { Pokemon } from "../data/types/pokemon";

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [hasError, setHasError] = useState(false);

  const randomPokemon = async () => {
    const pokemon = await fetchPokemon(Math.floor(Math.random() * 100));
    setPokemon(pokemon);
  };

  const searchPokemon = async (name: string) => {
    try {
      const pokemon = await fetchPokemon(name);
      setHasError(false);
      setPokemon(pokemon);
    } catch (error) {
      if (error) {
        setHasError(true);
        return;
      }
    }
  };

  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className=" z-10 absolute">
          <PokemonCard
            pokemon={pokemon}
            onSearchAnotherButtonClicked={() => {
              setPokemon(undefined);
            }}
          />
        </div>
        <div className="z-0">
          <SearchBar
            hasError={hasError}
            onRandomButtonClicked={randomPokemon}
            onSearchButtonClicked={searchPokemon}
          />
        </div>
      </div>
    </>
  );
}

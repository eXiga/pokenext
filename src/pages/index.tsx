import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { fetchPokemon } from "../data/fetcher";
import { Pokemon } from "../data/types/pokemon";

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [hasError, setHasError] = useState(false);

  const randomPokemon = async () => {
    const pokemon = await fetchPokemon(Math.floor(Math.random() * 100));
    console.log(pokemon);
  };

  const searchPokemon = async (name: string) => {
    try {
      const pokemon = await fetchPokemon(name);
      setHasError(false);
      console.log(pokemon);
    } catch (error) {
      if (error) {
        setHasError(true);
        return;
      }
    }
  };

  return (
    <SearchBar
      hasError={hasError}
      onRandomButtonClicked={randomPokemon}
      onSearchButtonClicked={searchPokemon}
    />
  );
}

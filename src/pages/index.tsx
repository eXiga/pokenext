import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { fetchPokemon } from "../data/fetcher";
import { Pokemon } from "../data/types/pokemon";

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

  // This code will be commented for a while, I'm focused on layout now lol
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const pokemon = await fetchPokemon(Math.floor(Math.random() * 100));
  //     setPokemon(pokemon);
  //   };

  //   fetchData();
  // }, []);

  // if (!pokemon) return <div>Loading...</div>;

  return <SearchBar />;
}

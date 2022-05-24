import { useEffect, useRef, useState } from "react";
import { fetchPokemon } from "../data/fetcher";
import { Pokemon } from "../data/types/pokemon";

export default function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const pokemon = await fetchPokemon(Math.floor(Math.random() * 100));
      setName(`${pokemon.name}: ${pokemon.id}`);
    };

    fetchData();
  }, []);

  return <h1 className="text-9xl font-bold">{name}</h1>;
}

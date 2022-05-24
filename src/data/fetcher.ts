import { Pokemon } from "./types/pokemon";

export async function fetchPokemon(id: number): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await response.json();
  return new Pokemon(json);
}

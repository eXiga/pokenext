import { Pokemon } from "./types/pokemon";

export async function fetchPokemon(fetchBy: number | string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${fetchBy}`);
  const json = await response.json();
  return new Pokemon(json);
}

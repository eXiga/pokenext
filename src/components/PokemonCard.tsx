import Image from "next/image";
import React from "react";
import { Pokemon } from "../data/types/pokemon";

interface PokemonCardProps {
  pokemon: Pokemon | undefined;
  onSearchAnotherButtonClicked: () => void;
}

export default function PokemonCard({
  pokemon,
  onSearchAnotherButtonClicked,
}: PokemonCardProps) {
  if (pokemon === undefined) {
    return <></>;
  }

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src={pokemon.image}
            alt="Pokemon artwork"
            width={200}
            height={200}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{pokemon.name}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={onSearchAnotherButtonClicked}
            >
              Search another one
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

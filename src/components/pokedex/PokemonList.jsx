import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  
  return (
    <section className="grid px-3 gap-8 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] lg:w-1000px m-32 ">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};

export default PokemonList;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import BarList from "../components/pokemonDetail/BarList";
import { bgPokemon } from "../shared/pokemon";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="p-3 flex justify-center item-center bg-slate-100 m-[12%] mt-[50px] mb-0 rounded h-[50%] ">
      <article className="w-[min(100%,_400px)]   mb-8">
        <header
          className={` flex flex-col h-[100px]   relative mb-8 ${
            bgPokemon[pokemonData?.types[0]]
          }`}
        >
          <div className="absolute  left-1/2 -translate-x-1/2 -bottom-11 h-[120px] aspect-square">
            <img src={pokemonData?.image} alt="" />
          </div>
        </header>

        <section>
          <section className="grid px-3 gap-2 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]  ">
            <span className="text-4xl text-center">#{pokemonData?.id} </span>
            <h3 className="text-2xl font-semibold text-center ">
              {pokemonData?.name}
            </h3>

            <ul className=" grid grid-cols-2 text-center">
              <li>
                <h5 className="font-semibold">peso</h5>
                {pokemonData?.weight}
              </li>
              <li>
                <h5 className="font-semibold"> altura</h5>
                {pokemonData?.height}
              </li>
            </ul>

            <ul className="grid grid-cols-2 text-center">
              <li>
                <h5 className="font-semibold">types</h5>
                <span>
                  {pokemonData?.types[0]} {pokemonData?.types[1]}
                </span>
              </li>
              <li>
                <h5 className="font-semibold">abilities</h5>
                {pokemonData?.abilities.map((abilitie) => (
                  <li className="" key={abilitie.ability.name}>
                    <span>{abilitie.ability.name} </span>
                  </li>
                ))}
              </li>
            </ul>
          </section>
          <BarList stats={pokemonData?.stats} />
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllPokemons, getPokemonsByType } from "../services/pokemons";
import PokemonList from "../components/pokedex/PokemonList";
import { getAllTypes } from "../shared/pokemon";

import { paginateData } from "../utils/pagination";
import {   IconSquareRoundedChevronLeft, IconSquareRoundedChevronRight, IconSquareRoundedChevronsLeft, IconSquareRoundedChevronsRight } from "@tabler/icons-react";
export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [types, setTypes] = useState([]);
  const [currenPage, setCurrenPage] = useState(1);



  const { name } = useSelector((store) => store.trainer);
  const handleChangeImput = (e) => {
    setPokemonName(e.target.value);
  };

  const handleChangeSelect = (e) => {
    setPokemonType(e.target.value);
  };

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currenPage
  );


  useEffect(() => {
    if (!pokemonType) {
      getAllPokemons().then((data) => setPokemons(data));
    }
  }, [pokemonType]);

  useEffect(() => {
    if (pokemonType) {
      getPokemonsByType(pokemonType).then((data) => setPokemons(data));
    }
  }, [pokemonType]);

  useEffect(() => {
    getAllTypes()
      .then((types) => setTypes(types))
      .catch((err) => console.log(err));
  }, []);

  const first_pages = 1;
 
    const handleNextPage = () => {
      setCurrenPage((prevState) => {
        const nextPage = prevState + 1;
        if (nextPage <= lastPage) return nextPage
        return prevState
      });
    };
  
    const handleLastPage = () => setCurrenPage(lastPage);
    
    const handlePreviusPage = () => {
      setCurrenPage((prevPage) => {
        const newPage = prevPage - 1;
        if (newPage >= first_pages) return newPage;
        return prevPage;
      });
    };
  
    const handleFirstPage = () => setCurrenPage(first_pages);
 
 
 
 
 
  return (
    <main>
      <section className="flex flex-col m-2">
        <p className=" text-red-500 font-inter font-semibold text-2xl">Welcome {name } </p> 
        <p className="font-inter font-semibold text-lg">aqui podras encontrar tu pokemon favorito</p>
       
        <form>
          <div>
            <input 
             className="outline-none p-2 shadow-xl w-52 bg-slate-200"
              value={pokemonName}
              onChange={handleChangeImput}
              placeholder="Search pokemon..."
              type="text"
            />
          <button className="bg-red-500 text-white p-2 px-4 hover:bg-red-400">Search</button>
          <select  className="outline-none p-2 shadow-xl w-52 bg-slate-200 m-1  " value={pokemonType} onChange={handleChangeSelect}>
            <option  value="">All pokemos</option>
            {types.map((type) => (
              <option  key={type.name} value={type.name} className="capitalize font-inter  ">
                {type.name}
              </option>
            ))}
          </select>
          </div>
        </form>
      </section>
     {/* <Pagination lasPage= {lastPage}  pagesInCurrentBlock={pagesInCurrentBlock} setCurrenPage={setCurrenPage} currenPage={currenPage} />*/}
      <PokemonList pokemons={itemsInCurrentPage} />
    
      <ul className=" flex justify-center  gap-3 p-4 items-center ">
      <li onClick={handleFirstPage}>{<IconSquareRoundedChevronsLeft className="text-red-500 hover:text-stone-950"/>} </li>
      <li onClick={handlePreviusPage}>{<IconSquareRoundedChevronLeft className="text-red-500 hover:text-stone-950"/>} </li>
      {pagesInCurrentBlock.map((page) => (
        <li
          className={` p-2 ${
            currenPage === page ? "text-white bg-red-500" : ""
          }`}
          key={page}
          onClick={() => setCurrenPage(page)}
        >
          {page}
        </li>
      ))}
      <li onClick={handleNextPage}>{<IconSquareRoundedChevronRight className="text-red-500 hover:text-stone-950"/> } </li>
      <li onClick={handleLastPage}>{<IconSquareRoundedChevronsRight className="text-red-500 hover:text-stone-950"/>} </li>
    </ul>
    
    
    
    
    
    
    
    
    </main>
  );
};
 

export default Pokedex;

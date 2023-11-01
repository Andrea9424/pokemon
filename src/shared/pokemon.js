import axios from "axios";

const bgPokemon = {
  grass: "bg-gradient-to-b from-green-500 to-green-300",
  fire: " bg-gradient-to-b from-orange-500 to-orange-300",
  normal: "bg-gradient-to-b from-orange-900 to-orange-300",

  fighting: "bg-gradient-to-t from-blue-900  to-blue-400",
  flying: "bg-gradient-to-t ",
  poison: "bg-gradient-to-t from-indigo-600  to-indigo-300",
  ground: "bg-gradient-to-t",
  rock: "bg-gradient-to-t",
  bug: "bg-gradient-to-t from-red-500 to-red-300",
  ghost: "bg-gradient-to-t",
  steel: "bg-gradient-to-t",
  water: "bg-gradient-to-t from-blue-300 to-blue-300",
  electric: "bg-gradient-to-t",
  psychic: "bg-gradient-to-t",
  ice: "bg-gradient-to-t",
  dragon: "bg-gradient-to-t",
  dark: "bg-gradient-to-t",
  fairy: "bg-gradient-to-t",
  unknown: "bg-gradient-to-t",
  shadow: "bg-gradient-to-t",
};

const borderPokemon = {
  grass: "border-[5px] border-green-500  ",
  fire: "border-[5px]  border-orange-500",
  normal: "border-[5px] border-orange-900",
  bug: "border-[5px] border-red-500 ",
  poison:"border-[5px] border-indigo-500",
  fighting:"border-[5px] border-blue-900",
  water:"border-[5px] border-blue-300",
};


const getAllTypes = async () =>{
 const {data} = await axios.get("https://pokeapi.co/api/v2/type")
 return data.results
}

export { bgPokemon, borderPokemon, getAllTypes };

import axios from "axios";

export const getAllPokemons = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=1281";
  const { data } = await axios.get(URL);
  return data.results;
};

export const getPokemonsByType = async (pokemonType) => {
  const url = `https://pokeapi.co/api/v2/type/${pokemonType}/`;
  const { data } = await axios.get(url);
  const formatPokemos = data.pokemon.map(({ pokemon }) => pokemon);
  return formatPokemos;
};

export const getPokemonById = async (pokemonId) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

  const { data } = await axios.get(url);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
        .front_default,
    weight: data.weight,
    height: data.height,
    abilities: data.abilities,
  };

  console.log(pokemon);
  return pokemon;
};

export const getPokemonByUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
        .front_default,
  };

  return pokemon;
};

const formatTypes = (types) => {
  return types.map((type) => type.type.name);
};

const formatStats = (stats) => {
  return stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat }));
};

export const joinPokemonTypes = (types = []) => {
  return types.slice(0, 2).join(" / ");
};

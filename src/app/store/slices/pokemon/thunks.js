import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import axios from "axios";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    //TODO: realizar peticion http
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
      .then((response) => {
        const { data } = response;
        dispatch(setPokemons({ pokemons: data.results, nextPage: page + 1 }));
      })
      .catch(() => {
        console.log("Error Data");
      });
  };
};

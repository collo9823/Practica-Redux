import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"



export const getPokemons = (page = 0)=>{
    return async ( dispatch, getState )=>{
        dispatch(startLoadingPokemons() )

        //TODO: realizar petición http
        const apiURL = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`;
        
        //FETCH

        // const resp = await fetch(apiURL) 
        // const data = await resp.json();
        // // const final = JSON.stringify(data);

        //AXIOS
        const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        const {data} = resp

        // console.log({data})
        dispatch(setPokemons({pokemons: data.results, page: page +1}));
        // dispatch(setPokemons({pokemons: data.results, page: page}));
    }
} 
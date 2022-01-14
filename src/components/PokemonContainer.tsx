import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import PokemonService from '../services/PokemonService'
import { IPokemon, IListResponse } from '../types/interfaces';

const PokemonContainer: React.FC = () => {
  const [pageLimit, setPageLimit] = useState<number>(16);
  const [pokeData, setPokeData] = useState<IPokemon[] | []>([]);
  const [next, setNext] = useState<string>("");
  const [prev, setPrev] = useState<string>("");

  const getPokemon = async (action?: string) => {
    const startUrl: string = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pageLimit}`;
    let pokemonUrl: string;

    action ? pokemonUrl = action : pokemonUrl = startUrl;

    const response: IListResponse = await PokemonService.getPokemon(pokemonUrl);
    setPokeData(response.results);
    setNext(response.next);
    setPrev(response.previous);
  }

  useEffect(() => {
    getPokemon();
  }, [])

  return (
    <div>
      <h1>Pokemon App</h1>
      <PokemonList pokeData={pokeData} />
      <div>
        <button onClick={() => getPokemon(prev)}>
          Previous
        </button>
        <button onClick={() => getPokemon(next)} >
          Next
        </button>
      </div>
    </div>
  )
}

export default PokemonContainer

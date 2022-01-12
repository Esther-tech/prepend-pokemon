import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import PokemonService from '../services/PokemonService'

interface IPokemon {
  name: string,
  url: string
}

interface ApiResponse {
  count: number,
  next: string,
  previous: string,
  results: IPokemon[]
}

const PokemonContainer: React.FC = () => {
  const [pokeData, setPokeData] = useState<IPokemon[] | []>([]);
  const [next, setNext] = useState<string>("");
  const [prev, setPrev] = useState<string>("");

  const getPokemon = async (action?: string) => {
    const response: ApiResponse = await PokemonService.getList(action);
    setPokeData(response.results);
    setNext(response.next);
    setPrev(response.previous);
  }


  useEffect(() => {
    getPokemon();
  }, [])

  return (
    <div>
      <h1>Pokemon</h1>
      <PokemonList pokeData={pokeData} />
      <div>
        Pagination
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

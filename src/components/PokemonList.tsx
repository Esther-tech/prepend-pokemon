import React from 'react'
import { IPokemon } from '../types/interfaces'
import PokemonItem from './PokemonItem'
import './components.css'

interface Props {
  pokeData: IPokemon[],
}

const PokemonList: React.FC<Props> = ({ pokeData }) => {

  return (
    <div className="PokemonList">
      {
        pokeData?.map((pokemon: IPokemon, index: number) => {
          return (
            <PokemonItem pokemon={pokemon} key={index} />
          )
        })
      }
    </div>
  )
}

export default PokemonList

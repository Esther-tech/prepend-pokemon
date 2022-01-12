import React from 'react'

interface IPokemon {
  name: string,
  url: string
}

interface Props {
  pokeData: IPokemon[],
}

const PokemonList: React.FC<Props> = ({ pokeData }) => {

  return (
    <div>
      {
        pokeData?.map((pokemon: IPokemon) => {
          return (
            <p>{pokemon.name}</p>
          )
        })
      }
    </div>
  )
}

export default PokemonList

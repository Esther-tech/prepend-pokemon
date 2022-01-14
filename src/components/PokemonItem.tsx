import React, { useState, useEffect } from 'react'
import { IPokemon, IPokeResponse } from '../types/interfaces'
import PokemonService from '../services/PokemonService'
import PokeModal from './PokeModal';

interface Props {
  pokemon: IPokemon,
}

const PokemonItem: React.FC<Props> = ({ pokemon }) => {
  const [poke, setPoke] = useState<IPokeResponse | any>(null);
  const [image, setImage] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const getPokemon = async () => {
    const response: IPokeResponse = await PokemonService.getPokemon(pokemon.url);
    setImage(response.sprites.front_default)
    setPoke(response)
  }

  const handleOpen = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    getPokemon()
  }, [pokemon])

  return (
    <div >
      <div className="PokemonItem" onClick={handleOpen}>
        <img className="ItemImg" src={image} key={2} alt={poke && poke.name} />
        <p>{poke && poke.name}</p>
      </div>
      {
        openModal ?
          <PokeModal handleClose={handleClose} pokemon={poke} />
          :
          null
      }
    </div>
  )
}

export default PokemonItem

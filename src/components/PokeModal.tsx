import React from 'react'
import { IPokeResponse, IPokeStats, IPokeTypes, IPokeMoves } from '../types/interfaces'
import './components.css';

interface Props {
  handleClose: () => void,
  pokemon: IPokeResponse
}

const PokeModal: React.FC<Props> = ({ handleClose, pokemon }) => {
  console.log(pokemon)
  const name = pokemon.name;
  const image = pokemon.sprites.front_default
  const weight = pokemon.weight;
  const stats = pokemon.stats;
  const types = pokemon.types;
  const moves = pokemon.moves;

  return (
    <div className="ModalContainer">
      <div className="ModalBox">
        <h3>{name}</h3>
        <img className="ModalImg" alt={name} src={image} />
        <div className="DetailList">
          <div><h4>Weight:</h4> {weight}</div>
          <div><h4>Stats:</h4> {stats.map((stat: IPokeStats, index: number) => <p className="Detail">{index + 1}: {stat.stat.name} - {stat.base_stat} </p>)}</div>
          <div><h4>Types:</h4> {types.map((type: IPokeTypes, index: number) => <p className="Detail">{index + 1}: {type.type.name} </p>)}</div>
          <div className="Moves"><h4 style={{ width: '100%' }}>Moves:</h4> {moves.map((move: IPokeMoves, index: number) => <p className="Detail">{index + 1}: {move.move.name} </p>)}</div>
        </div >
        <button onClick={handleClose}>Close</button>
      </div >
    </div >
  )
}

export default PokeModal

export interface IPokemon {
  name: string,
  url: string
}

export interface IListResponse {
  count: number,
  next: string,
  previous: string,
  results: IPokemon[]
}

export interface IPokeStats {
  base_stat: number,
  effort: number,
  stat: {
    name: string,
    url: string
  }
}

export interface IPokeMoves {
  move: {
    name: string,
    url: string
  }
}

export interface IPokeTypes {
  slot: number,
  type: {
    name: string,
    url: string
  }
}

export interface IPokeResponse {
  id: number,
  name: string,
  weight: number,
  species: {
    name: string,
    url: string
  },
  stats: IPokeStats[],
  moves: IPokeMoves[],
  sprites: {
    front_default: string
  },
  types: IPokeTypes[]
}
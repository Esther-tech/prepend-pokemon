export default class PokemonService {
  static getPokemon = async (url?: string) => {
    const pokemonUrl: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=16';
    try {
      const response = await fetch(pokemonUrl);
      const responseJson = await response.json();
      console.log(responseJson);
      return { responseJson };
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
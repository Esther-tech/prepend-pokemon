export default class PokemonService {

  static getList = async (url?: string) => {
    const startUrl: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=16';
    let pokemonUrl: string;

    url ? pokemonUrl = url : pokemonUrl = startUrl;

    try {
      const response = await fetch(pokemonUrl);
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (e) {
      console.log(e);
      return [];
    }
  }


}
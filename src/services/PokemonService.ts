export default class PokemonService {

  static getPokemon = async (url: string) => {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
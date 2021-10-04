function getCharactersFromApi() {
  return fetch(`https://rickandmortyapi.com/api/character `)
  .then(response => response.json())
  .then(json => {
    return json.results.map(character => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        specie: character.species,
        origin: character.origin.name,
        image: character.image,
        episodes: character.episode.length,
      };
    })

  });
}
export default getCharactersFromApi;

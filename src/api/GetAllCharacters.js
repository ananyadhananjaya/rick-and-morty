export const GetAllCharacters = () => {
   return fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(
      (result) => {
        return result.results
      }
    )
    .catch(e => console.log(e))
};

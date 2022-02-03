export const GetAllCharacters = () => {
   return fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(
      (result) => {
          console.log(result.results)
        return result.results
      }
    )
    .catch(e => console.log(e))
};

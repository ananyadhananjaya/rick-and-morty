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

export const GetIndividualCharacter = (id) =>{
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then(res => res.json())
  .then( res => { return res })
  .catch(e => console.log(e))
}
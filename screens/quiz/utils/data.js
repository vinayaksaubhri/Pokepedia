import { list as pokemonList } from "./pokemonListQuiz";
const min = 1;
const max = 1008;

function getRandomPokemon() {
  const result = [];

  //get 3 random numbers
  while (result.length < 3) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }

  //get pokemon from pokemonList using random numbers
  return result.map((number) => pokemonList[number]);
}
function selectCurrentPokemon(pokemonSelectedList) {
  const randomIndex = Math.floor(Math.random() * pokemonSelectedList.length);
  return pokemonSelectedList[randomIndex];
}

export { getRandomPokemon, selectCurrentPokemon };

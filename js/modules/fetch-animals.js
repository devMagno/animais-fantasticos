import initAnimatedNumbers from "./animated-numbers.js"

export default function initFetchAnimals() {
  async function fetchAnimals(url) {
    const animalsResponse = await fetch(url)
    const animalsJSON = await animalsResponse.json();
    const numbersGrid = document.querySelector('.numeros-grid')
    animalsJSON.forEach(animal => {
      const animalDiv = createAnimal(animal)
      numbersGrid.appendChild(animalDiv)
    })
    initAnimatedNumbers()
  }
  
  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = 
    `
    <h3>${animal.especie}</h3>
    <span data-numero>${animal.total}</span>
    `
    return div
  }
  
  fetchAnimals('./animalsAPI.json')
}

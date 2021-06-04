import AnimatedNumbers from './animated-numbers.js'

export default function fetchAnimals(url, target) {
  const numbersGrid = document.querySelector(target)

  function createAnimalElement(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `
    <h3>${animal.especie}</h3>
    <span data-numero>${animal.total}</span>
    `
    return div
  }
  
  function addAnimalsToDOM(animal) {
    const animalDiv = createAnimalElement(animal)
    numbersGrid.appendChild(animalDiv)
  }

  function animatedAnimalsNumbers() {
    const animatedNumbers = new AnimatedNumbers(
      '[data-numero]',
      '.numeros',
      'ativo'
    )
    animatedNumbers.init()
  }

  async function createAnimals() {
    try {
      const animalsResponse = await fetch(url)
      const animalsJSON = await animalsResponse.json()

      animalsJSON.forEach((animal) => addAnimalsToDOM(animal))
      animatedAnimalsNumbers()
    } catch (error) {
      console.log(Error(error))
    }
  }

  return createAnimals()
}

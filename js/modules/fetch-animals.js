import AnimatedNumbers from './animated-numbers.js'

export default function initFetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `
    <h3>${animal.especie}</h3>
    <span data-numero>${animal.total}</span>
    `
    return div
  }
  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url)
      const animalsJSON = await animalsResponse.json()
      const numbersGrid = document.querySelector('.numeros-grid')
      animalsJSON.forEach((animal) => {
        const animalDiv = createAnimal(animal)
        numbersGrid.appendChild(animalDiv)
      })
      const animatedNumbers = new AnimatedNumbers(
        '[data-numero]',
        '.numeros',
        'ativo'
      )
      animatedNumbers.init()
    } catch (error) {
      console.log(Error(error))
    }
  }

  fetchAnimals('./animalsAPI.json')
}

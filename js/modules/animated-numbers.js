export default class AnimatedNUmbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass

    this.handleMutation = this.handleMutation.bind(this)
  }

  static increment(number) {
    const total = Number(number.innerText)
    const increment = Math.floor(total / 100)

    let start = 0
    const timer = setInterval(() => {
      start += increment
      number.innerText = start
      if (start > total) {
        clearInterval(timer)
        number.innerText = total
      }
    }, 25 * Math.random())
  }

  animateNumbers() {
    this.numbers.forEach((number) => this.constructor.increment(number))
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.animateNumbers()
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {
    if (this.numbers.length && this.observerTarget && this.observerClass) {
      this.addMutationObserver()
    }
    return this
  }
}

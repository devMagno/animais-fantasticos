export default class AnimateOnScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.halfScreen = window.innerHeight * 0.6

    this.checkDistance = this.checkDistance.bind(this)
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const { offsetTop } = section
      return {
        element: section,
        offsetTop: Math.floor(offsetTop - this.halfScreen),
      }
    })
  }

  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offsetTop) {
        section.element.classList.add('ativo')
      } else if (section.element.classList.contains('ativo')) {
        section.element.classList.remove('ativo')
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.getDistance()
      this.checkDistance()
      window.addEventListener('scroll', this.checkDistance)
    }
    return this
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance)
  }
}

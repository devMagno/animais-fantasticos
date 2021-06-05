export default class AnimateOnScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.halfScreen = window.innerHeight * 0.6

    this.animateOnScroll = this.animateOnScroll.bind(this)
  }

  animateOnScroll() {
    this.sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top
      const isSectionVisible = sectionTop - this.halfScreen < 0
      if (isSectionVisible) {
        item.classList.add('ativo')
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo')
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.animateOnScroll()
      window.addEventListener('scroll', this.animateOnScroll)
    }
  }
}

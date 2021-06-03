export default class tabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu)
    this.tabContent = document.querySelectorAll(content)
    this.activeClass = 'ativo'
  }

  activateTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass)
    })
    this.tabContent[index].classList.add(
      this.activeClass,
      this.tabContent[index].dataset.anime
    )
  }

  addTabMenuEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activateTab(index))
    })
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.addTabMenuEvent()
      this.activateTab(0)
      return this
    }
  }
}

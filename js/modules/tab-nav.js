// function activeTab(index) {
//   tabContent.forEach((section) => {
//     section.classList.remove(this.activeClass)
//   })
//   tabContent[index].classList.add(this.activeClass, tabContent[index].dataset.anime)
// }
// if (tabMenu.length && tabContent.length) {
//   tabContent[0].classList.add(this.activeClass)

//   tabMenu.forEach((itemMenu, index) => {
//     itemMenu.addEventListener('click', () => activeTab(index))
//   })
// }

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
    }
  }
}

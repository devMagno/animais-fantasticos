import outsideClick from './outside-click.js'

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    this.activeClass = 'ativo'
    if (events === undefined) {
      this.events = ['touchstart', 'click']
    } else {
      this.events = events
    }

    this.activateDropdownMenu = this.activateDropdownMenu.bind(this)
  }

  activateDropdownMenu(event) {
    const element = event.currentTarget
    event.preventDefault()
    element.classList.add(this.activeClass)
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass)
    })
  }

  addDropdownMenuEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activateDropdownMenu)
      })
    })
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvents()
    }
    return this
  }
}

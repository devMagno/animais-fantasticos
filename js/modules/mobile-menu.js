import outsideClick from './outside-click.js'

export default class MobileMenu {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton)
    this.menuList = document.querySelector(menuList)
    if (events === undefined) {
      this.events = ['touchstart', 'click']
    } else {
      this.events = events
    }
    this.activeClass = 'active'
    this.openMenu = this.openMenu.bind(this)
  }

  openMenu(event) {
    event.preventDefault()
    this.menuButton.classList.add(this.activeClass)
    this.menuList.classList.add(this.activeClass)
    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass)
      this.menuList.classList.remove(this.activeClass)
    })
  }

  addMobileMenuEvents() {
    this.events.forEach((userEvent) =>
      this.menuButton.addEventListener(userEvent, this.openMenu)
    )
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMobileMenuEvents()
    }
    return this
  }
}

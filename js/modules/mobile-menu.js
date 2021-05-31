import outsideClick from './outside-click.js'

export default function initMobileMenu() {
  const events = ['click', 'touchstart']
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')

  function openMenu() {
    menuButton.classList.add('active')
    menuList.classList.add('active')
    outsideClick(menuList, ['click', 'touch-start'], () => {
      menuButton.classList.remove('active')
      menuList.classList.remove('active')
    })
  }
  if (menuButton) {
    events.forEach((userEvent) =>
      menuButton.addEventListener(userEvent, openMenu)
    )
  }
}

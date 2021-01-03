const activeClass = 'ativo'
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass)

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass)
      })
      tabContent[index].classList.add(activeClass)
    }
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index))
    })
  }
}

initTabNav()

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)
  
    function activeAccordion(event) {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })  
  }
}
initAccordion()

function initSmoothScroll() {
  const internalAnchors = document.querySelectorAll('.js-menu a[href^="#"]')
  
  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  internalAnchors.forEach((item) => {
    item.addEventListener('click', scrollToSection)
  })
}
initSmoothScroll()
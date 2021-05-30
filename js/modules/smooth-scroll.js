export default function initSmoothScroll() {
  const internalAnchors = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]')
  
  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  
  internalAnchors.forEach((item) => {
    item.addEventListener('click', scrollToSection)
  })
}

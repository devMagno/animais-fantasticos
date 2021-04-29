export default function initAnimateOnScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')
  const halfScreen = window.innerHeight * 0.6
  function animateOnScroll() {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top
      const isSectionVisible = (sectionTop - halfScreen) < 0
      if(isSectionVisible) {
        item.classList.add('ativo')
      }
      else {
        item.classList.remove('ativo')
      }
    })
  }
  animateOnScroll()
  window.addEventListener('scroll', animateOnScroll)
}
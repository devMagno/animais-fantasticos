export default function initAnimatedNumbers() {
  function animateNumbers() {
    const numbers = document.querySelectorAll('[data-numero]')

    numbers.forEach((number) => {
      const total = Number(number.innerText)
      const increment = Math.floor(total / 100)

      let start = 0
      const timer = setInterval(() => {
        start += increment
        number.innerText = start
        if (start > total) {
          clearInterval(timer)
          number.innerText = total
        }
      }, 25 * Math.random())
    })
  }

  const observer = new MutationObserver(handleMutation)
  const observeTarget = document.querySelector('.numeros')
  observer.observe(observeTarget, { attributes: true })

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect()
      animateNumbers()
    }
  }
}

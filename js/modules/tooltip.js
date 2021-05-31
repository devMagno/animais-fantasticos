export default function initTooltip() {
  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    return tooltipBox
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`
      this.tooltipBox.style.left = `${event.pageX + 20}px`
    },
  }
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave)
      this.element.removeEventListener('mousemove', onMouseMove)
    },
  }
  function onMouseOver() {
    const tooltipBox = createTooltipBox(this)

    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this
    onMouseMove.tooltipBox = tooltipBox
    this.addEventListener('mouseleave', onMouseLeave)
    this.addEventListener('mousemove', onMouseMove)
  }

  const tooltips = document.querySelectorAll('[data-tooltip]')
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onMouseOver)
  })
}

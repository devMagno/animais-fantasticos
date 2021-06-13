import Slide from './slide.js'

export default class SlideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper)
    this.bindControlEvents()
  }

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev)
    this.nextElement = document.querySelector(next)
    this.addArrowEvents()
  }

  addArrowEvents() {
    this.prevElement.addEventListener('click', this.activatePrevSlide)
    this.nextElement.addEventListener('click', this.activateNextSlide)
  }

  createControls() {
    const control = document.createElement('ul')
    control.dataset.control = 'slide'
    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">Ir para o ${
        index + 1
      }° slide</a></li>`
    })
    this.wrapper.appendChild(control)
    return control
  }

  controlsEvent(item, index) {
    item.addEventListener('click', (event) => {
      event.preventDefault()
      this.changeSlide(index)
    })
    this.wrapper.addEventListener('changeEvent', this.activateControlItem)
  }

  activateControlItem() {
    this.controlsArray.forEach((item) => {
      item.classList.remove(this.activeClass)
    })
    this.controlsArray[this.index.active].classList.add(this.activeClass)
  }

  addControls(customControl) {
    this.control =
      document.querySelector(customControl) || this.createControls()
    this.controlsArray = [...this.control.children]
    this.controlsArray.forEach(this.controlsEvent)

    this.activateControlItem()
  }

  bindControlEvents() {
    this.controlsEvent = this.controlsEvent.bind(this)
    this.activateControlItem = this.activateControlItem.bind(this)
  }
}

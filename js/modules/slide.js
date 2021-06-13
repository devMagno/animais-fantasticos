import debounce from './debounce.js'

export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)
    this.distance = { finalPosition: 0, startX: 0, movement: 0 }
    this.activeClass = 'active'
    this.changeEvent = new Event('changeEvent')
  }

  transition(active) {
    this.slide.style.transition = active ? 'transform .3s' : ''
  }

  updatePosition(clientX) {
    this.distance.movement = (this.distance.startX - clientX) * 1.6
    return this.distance.finalPosition - this.distance.movement
  }

  moveSlide(distanceX) {
    this.distance.movedTo = distanceX
    this.slide.style.transform = `translate3D(${distanceX}px, 0, 0)`
  }

  onStart(event) {
    let moveType
    if (event.type === 'mousedown') {
      event.preventDefault()
      this.distance.startX = event.clientX
      moveType = 'mousemove'
    } else {
      this.distance.startX = event.changedTouches[0].clientX
      moveType = 'touchmove'
    }
    this.wrapper.addEventListener(moveType, this.onMove)
    this.transition(false)
  }

  onExit(event) {
    const moveType = event.type === 'mouseup' ? 'mousemove' : 'touchmove'
    this.wrapper.removeEventListener(moveType, this.onMove)
    this.distance.finalPosition = this.distance.movedTo
    this.transition(true)
    this.changeSlideOnExit()
  }

  changeSlideOnExit() {
    if (this.distance.movement > 200 && this.index.next !== undefined) {
      this.activateNextSlide()
    } else if (this.distance.movement < -200 && this.index.prev !== undefined) {
      this.activatePrevSlide()
    } else {
      this.changeSlide(this.index.active)
    }
  }

  onMove(event) {
    const pointerPosition =
      event.type === 'mousemove'
        ? event.clientX
        : event.changedTouches[0].clientX
    event.preventDefault()
    const finalPosition = this.updatePosition(pointerPosition)
    this.moveSlide(finalPosition)
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart)
    this.wrapper.addEventListener('touchstart', this.onStart)
    this.wrapper.addEventListener('mouseup', this.onExit)
    this.wrapper.addEventListener('touchend', this.onExit)
  }

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2
    return -(slide.offsetLeft - margin)
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element)
      return { element, position }
    })
  }

  slidesNavigationIndex(index) {
    const lastItem = this.slideArray.length - 1
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === lastItem ? undefined : index + 1,
    }
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index]
    this.moveSlide(activeSlide.position)
    this.slidesNavigationIndex(index)
    this.distance.finalPosition = activeSlide.position
    this.changeActiveClass()
    this.wrapper.dispatchEvent(this.changeEvent)
  }

  changeActiveClass() {
    this.slideArray.forEach((slide) => {
      slide.element.classList.remove(this.activeClass)
    })
    this.slideArray[this.index.active].element.classList.add(this.activeClass)
  }

  activatePrevSlide() {
    if (this.index.prev !== undefined) {
      this.changeSlide(this.index.prev)
    }
  }

  activateNextSlide() {
    if (this.index.next !== undefined) {
      this.changeSlide(this.index.next)
    }
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig()
      this.changeSlide(this.index.active)
    }, 1000)
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize)
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onExit = this.onExit.bind(this)
    this.onResize = debounce(this.onResize.bind(this), 200)

    this.activatePrevSlide = this.activatePrevSlide.bind(this)
    this.activateNextSlide = this.activateNextSlide.bind(this)
  }

  init() {
    if (this.slide && this.wrapper) {
      this.transition(true)
      this.bindEvents()
      this.addSlideEvents()
      this.addResizeEvent()
      this.slidesConfig()
      this.changeSlide(0)
    }
    return this
  }
}

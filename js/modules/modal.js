export default class Modal {
  constructor(openButton, closeButton, modalContainer) {
    this.openButton = document.querySelector(openButton)
    this.closeButton = document.querySelector(closeButton)
    this.modalContainer = document.querySelector(modalContainer)
  
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.clickOutsideOfModal = this.clickOutsideOfModal.bind(this)
  }

  toggleModal() {
    this.modalContainer.classList.toggle('ativo')
  }
  
  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal()
  }

  clickOutsideOfModal(event) {
    if(event.target === this.modalContainer) {
      this.toggleModal()
    }
  }

  addModalEvents() {
    this.openButton.addEventListener('click', this.eventToggleModal)
    this.closeButton.addEventListener('click', this.eventToggleModal)
    this.modalContainer.addEventListener('click', this.clickOutsideOfModal)
  }

  init() {
    if (this.openButton && this.closeButton && this.modalContainer) {
      this.addModalEvents()
    }
    return this
  }
}
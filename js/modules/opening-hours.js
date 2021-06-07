export default class OpeningHours {
  constructor(openingHours, activeClass) {
    this.openingHours = document.querySelector(openingHours)
    this.activeClass = activeClass
  }

  getOpeningHoursData() {
    this.weekDays = this.openingHours.dataset.semana.split(',').map(Number)
    this.weekHours = this.openingHours.dataset.horario.split(',').map(Number)
  }

  getNowData() {
    this.now = new Date()
    this.dayOfTheWeek = this.now.getDay()
    this.actualHour = this.now.getUTCHours() - 3
  }

  isOpen() {
    const isOpenToday = this.weekDays.indexOf(this.dayOfTheWeek) !== -1
    const isOpenOnActualHour =
      this.actualHour >= this.weekHours[0] &&
      this.actualHour < this.weekHours[1]

    return isOpenToday && isOpenOnActualHour
  }

  activateWhenOpen() {
    if (this.isOpen()) this.openingHours.classList.add(this.activeClass)
  }

  init() {
    if (this.openingHours) {
      this.getOpeningHoursData()
      this.getNowData()
      this.activateWhenOpen()
    }
    return this
  }
}

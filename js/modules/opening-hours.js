export default function initOpeningHours() {
  const openingHours = document.querySelector('[data-semana]')
  const weekDays = openingHours.dataset.semana.split(',').map(Number)
  const weekHours = openingHours.dataset.horario.split(',').map(Number)
  
  const now = new Date();
  const dayOfTheWeek = now.getDay();
  const actualHour = now.getHours()
  
  const isOpenToday = weekDays.indexOf(dayOfTheWeek) !== -1
  const isOpenOnActualHour = actualHour >= weekHours[0] && actualHour < weekHours[1]
  
  if (isOpenToday && isOpenOnActualHour) {
    openingHours.classList.add('aberto')
  }
}

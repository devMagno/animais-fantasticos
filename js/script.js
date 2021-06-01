import SmoothScroll from './modules/smooth-scroll.js'
import initAnimateOnScroll from './modules/animate-on-scroll.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tab-nav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMobileMenu from './modules/mobile-menu.js'
import initOpeningHours from './modules/opening-hours.js'
import initFetchAnimals from './modules/fetch-animals.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"')
smoothScroll.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
)
tabNav.init()

initAnimateOnScroll()
initModal()
initTooltip()
initDropdownMenu()
initMobileMenu()
initOpeningHours()
initFetchAnimals()
initFetchBitcoin()

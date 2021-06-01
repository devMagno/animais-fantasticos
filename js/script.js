import SmoothScroll from './modules/smooth-scroll.js'
import initAnimateOnScroll from './modules/animate-on-scroll.js'
import initAccordion from './modules/accordion.js'
import initTabNav from './modules/tab-nav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMobileMenu from './modules/mobile-menu.js'
import initOpeningHours from './modules/opening-hours.js'
import initFetchAnimals from './modules/fetch-animals.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"')
smoothScroll.init()
initAnimateOnScroll()
initAccordion()
initTabNav()
initModal()
initTooltip()
initDropdownMenu()
initMobileMenu()
initOpeningHours()
initFetchAnimals()
initFetchBitcoin()

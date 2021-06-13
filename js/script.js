import SmoothScroll from './modules/smooth-scroll.js'
import AnimateOnScroll from './modules/animate-on-scroll.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tab-nav.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import DropdownMenu from './modules/dropdown-menu.js'
import MobileMenu from './modules/mobile-menu.js'
import OpeningHours from './modules/opening-hours.js'
import fetchAnimals from './modules/fetch-animals.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import SlideNav from './modules/slide-nav.js'

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]')
smoothScroll.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
)
tabNav.init()

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
)
modal.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

const animateOnScroll = new AnimateOnScroll('[data-anime="scroll"]')
animateOnScroll.init()

const dropdownMenu = new DropdownMenu('[data-dropdown]')
dropdownMenu.init()

const mobileMenu = new MobileMenu('[data-menu="button"]', '[data-menu="list"]')
mobileMenu.init()

const openingHours = new OpeningHours('[data-semana]', 'aberto')
openingHours.init()

fetchAnimals('../../animalsAPI.json', '.numeros-grid')
fetchBitcoin('https://blockchain.info/ticker', 'span.btc-price')

const slide = new SlideNav('.slide', '.slide-wrapper')
slide.init()
slide.addControls('.custom-controls')

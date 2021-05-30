export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPrice = document.querySelector('span.btc-price')
      btcPrice.innerText = (1000 / bitcoin.BRL.sell).toFixed(4)
    }).catch((error) => console.log(Error(error)))
}

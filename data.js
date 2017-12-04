var axios = require('axios')
var RAND = 0
var COINAPI = '0dc480a338e23d13ae6beec364931599'

setInterval(btc(), 3000)
setInterval(rand(), 3000)

function btc() {
  document.querySelector('#btc-loader').style.visibility = 'visible'
  axios.get('https://api.mybitx.com/api/1/ticker?pair=XBTZAR')
  .then(function (response) {
    document.querySelector('#btc-loader').style.visibility = 'hidden'
    document.querySelector('#bitcoin-price').innerHTML = `R ${parseFloat(response.data.bid)}`
  })
  .catch(function (error) {
    document.querySelector('#eth-price').innerHTML = 'Failed'
  });
}

function rand() {
  document.querySelector('#rand-loader').style.visibility = 'visible'
  axios.get(`http://www.apilayer.net/api/live?access_key=${COINAPI}&format=1`)
  .then(function (response) {
    document.querySelector('#rand-loader').style.visibility = 'hidden'
    RAND = parseFloat(response.data.quotes.USDZAR)
    document.querySelector('#sa-rand').innerHTML = `R ${parseFloat(response.data.quotes.USDZAR)}`
    eth()
  })
  .catch(function (error) {
    document.querySelector('#sa-rand').innerHTML = 'Failed'
  });
}

function eth() {
  document.querySelector('#eth-loader').style.visibility = 'hidden'
  axios.get('https://api.coinmarketcap.com/v1/ticker/')
  .then(function (response) {
    document.querySelector('#eth-loader').style.visibility = 'hidden'
    document.querySelector('#eth-rand-price').innerHTML = `R ${ parseFloat(RAND * parseFloat(response.data[1].price_usd), 2) }`
    document.querySelector('#eth-price').innerHTML = `$ ${parseFloat(response.data[1].price_usd)}`
  })
  .catch(function (error) {
    document.querySelector('#eth-price').innerHTML = 'Failed'
  });
}

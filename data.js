var axios = require('axios')

axios.get('https://api.mybitx.com/api/1/ticker?pair=XBTZAR')
.then(function (response) {
  document.querySelector('#bitcoin-price').innerHTML = response.data.bid
})
.catch(function (error) {
  console.log(error);
});


axios.get('https://api.coinmarketcap.com/v1/ticker/')
.then(function (response) {
  document.querySelector('#eth-price').innerHTML = response.data[1].price_usd
})
.catch(function (error) {
  console.log(error);
});
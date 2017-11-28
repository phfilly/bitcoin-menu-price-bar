var menubar = require('menubar')
var axios = require('axios')
var remote = require('electron').remote

var mb = menubar({
  tooltip: 'View them crypto prices will yah!',
  icon: 'bitcoin.png',
})

mb.on('ready', function ready () {
  console.log('Something is cooking.')
});


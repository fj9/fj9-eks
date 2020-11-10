const express = require('express')
const app = express()
const port = 3000
const https = require('https');
var cron = require('node-cron');
let bitcoin_price = getBitcoinPrice();

cron.schedule('* * * * *', () => {
  getBitcoinPrice();
});

function getBitcoinPrice() {
  https.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    
    resp.on('end', () => {
      var bitcoin_price_json = JSON.parse(data);
      console.log(bitcoin_price_json);
      bitcoin_price = bitcoin_price_json.bpi.USD.rate;
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
};

app.get('/', (req, res) => { 
  res.send('$'+ bitcoin_price)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

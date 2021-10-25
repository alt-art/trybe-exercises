import fetch from 'node-fetch';

const URL = `https://api.coincap.io/v2/assets`;

const CURRENCY_URL =
  'https://v6.exchangerate-api.com/v6/e168f2f5ace1329c0d599379/latest/USD';

fetch(URL)
  .then((res) => res.json())
  .then((res) => {
    res.data.forEach((coin) => {
      fetch(CURRENCY_URL)
        .then((res) => res.json())
        .then((res) => {
          const usdPrice = parseFloat(coin.priceUsd);
          const brlPrice = usdPrice * res.conversion_rates.BRL;
          console.log(`${coin.name} is trading at ${brlPrice.toFixed(2)} BRL`);
        });
    });
  });

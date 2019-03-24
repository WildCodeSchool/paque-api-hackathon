const {
    Router
} = require('express');
const Stock = require('./stock.service')
const {
    setInterval
} = require('timers')
const router = new Router();
require('express-ws')(router);

const chocolateStock = new Stock(2.5, 125, 0.5, 500, 'g');
const eggStock = new Stock(4.5, 55, 0.5, 1000, 'g');
const milkStock = new Stock(25, 1000, 1, 1000, 'l');

router.ws('/chocolates', function (ws, req) {
    setInterval(() => {
        ws.send(JSON.stringify(chocolateStock.increment()));
    }, 250);
});

router.ws('/eggs', function (ws, req) {
    setInterval(() => {
        ws.send(JSON.stringify(eggStock.increment()));
    }, 250);
});

router.ws('/milks', function (ws, req) {
    setInterval(() => {
        ws.send(JSON.stringify(milkStock.increment()));
    }, 250);
});


module.exports = router;
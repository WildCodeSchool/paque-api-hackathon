const {
    Router
} = require('express');
const Stock = require('./stock.service')
const { EMIT_INTERVAL } = require('../../configuration/environment')

const router = new Router();
require('express-ws')(router);

const chocolateStock = new Stock(15.86, 125, 0.5, 500, 'g');
const eggStock = new Stock(4.5, 55, 0.5, 1000, 'g');
const milkStock = new Stock(25, 1000, 1, 1000, 'l');

chocolateStock.startAutoIncrement(EMIT_INTERVAL);
eggStock.startAutoIncrement(EMIT_INTERVAL);
milkStock.startAutoIncrement(EMIT_INTERVAL);

router.ws('/chocolates', (ws, req) => {
    chocolateStock.addClient(ws);
});

router.ws('/eggs', (ws, req) => {
    eggStock.addClient(ws)
});

router.ws('/milks', (ws, req) => {
    milkStock.addClient(ws)
});

module.exports = router;
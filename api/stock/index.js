const {
    Router
} = require('express');
const Stock = require('./stock.service')
const { EMIT_INTERVAL } = require('../../configuration/environment')
const {
    setInterval,
    clearInterval
} = require('timers')
const router = new Router();
require('express-ws')(router);

const chocolateStock = new Stock(2.5, 125, 0.5, 500, 'g');
const eggStock = new Stock(4.5, 55, 0.5, 1000, 'g');
const milkStock = new Stock(25, 1000, 1, 1000, 'l');

router.ws('/chocolates', (ws, req) => {
    openStock(ws, chocolateStock.increment.bind(chocolateStock));
});

router.ws('/eggs', (ws, req) => {
    openStock(ws, eggStock.increment.bind(eggStock));

});

router.ws('/milks', (ws, req) => {
    openStock(ws, milkStock.increment.bind(milkStock));
});

const openStock = (ws, increment) => {
    const id = setInterval(() => {
        if (ws.readyState === 1) {
            ws.send(JSON.stringify(increment()));
        } else if (ws.readyState === 3) {
            clearInterval(id);
        }
    }, EMIT_INTERVAL);
}


module.exports = router;
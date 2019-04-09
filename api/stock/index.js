const {
    Router
} = require('express');
const Stock = require('./stock.service')
const StaticStock = require('./static-stock.service')
const {
    EMIT_INTERVAL
} = require('../../configuration/environment')

const router = new Router();
require('express-ws')(router);

const chocolateStock = new Stock(15.86, 125, 0.5, 500, 'g');
const eggStock = new Stock(4.5, 55, 0.5, 1000, 'g');
const milkStock = new Stock(25, 1000, 1, 1000, 'l');

chocolateStock.startAutoIncrement(EMIT_INTERVAL);
eggStock.startAutoIncrement(EMIT_INTERVAL);
milkStock.startAutoIncrement(EMIT_INTERVAL);


router.get('/chocolates', extractParams, (req, res) => {
    const staticStock = new StaticStock(15.86, 125, 0.5, 500, 'g', new Date(req.min));
    const data = staticStock.startAutoIncrement(req.interval);
    res.status(200).json(data)
});

router.get('/eggs', extractParams, (req, res) => {
    const staticStock = new StaticStock(4.5, 55, 0.5, 1000, 'g', new Date(req.min));
    const data = staticStock.startAutoIncrement(req.interval);
    res.status(200).json(data)
});

router.get('/milks', extractParams, (req, res) => {
    const staticStock = new StaticStock(25, 1000, 1, 1000, 'l', new Date(req.min));
    const data = staticStock.startAutoIncrement(req.interval);
    res.status(200).json(data)
});

router.ws('/chocolates', (ws, req) => {
    chocolateStock.addClient(ws);
});

router.ws('/eggs', (ws, req) => {
    eggStock.addClient(ws)
});

router.ws('/milks', (ws, req) => {
    milkStock.addClient(ws)
});

function extractParams(req, res, next) {
    try {
        req.min = +req.query.min;
    } catch (err) {
        res.status(400).json({
            message: 'Min date must me a valid timestamp'
        })
        return;
    }
    try {
        req.interval = req.query.interval ? +req.query.interval : +EMIT_INTERVAL;
    } catch (err) {
        res.status(400).json({
            message: 'Interval must me a valid number'
        })
        return;
    }
    next()
}

module.exports = router;
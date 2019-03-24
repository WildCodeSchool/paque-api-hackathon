const { Router } = require('express');
const service = require('./egg.service')
const router = new Router();

router.get('', function(req, res) {
    const eggs = service.getAll();
    res.status(200).json(eggs);
});

router.get('/:id', function(req, res) {
    const egg = service.get(req.params.id);
    if (egg) {
        res.status(200).json(egg);
    } else {
        res.status(404).end();
    }
});

router.get('/random', function(req, res) {
    const eggs = service.random();
    if (eggs) {
        res.status(200).json(eggs);
    } else {
        res.status(404).end();
    }
});

router.post('', function(req, res) {
    const egg = service.save(req.body);
    res.status(201).json(egg);
});

module.exports = router;
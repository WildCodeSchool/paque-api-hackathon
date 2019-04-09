const {
    Router
} = require('express');
const service = require('./egg.service')
const router = new Router();

router.get('', function (req, res) {
    const eggs = service.getAll();

    for (let i = 0; i < eggs.length; i++) {
        const egg = eggs[i];
        egg.validity = getValidity();
    }

    res.status(200).json(eggs);
});

router.get('/random', function (req, res) {
    const egg = service.random();

    egg.validity = getValidity();

    if (egg) {
        res.status(200).json(egg);
    } else {
        res.status(404).end();
    }
});

router.get('/:id', function (req, res) {
    const egg = service.get(req.params.id);
    egg.validity = getValidity();
    
    if (egg) {
        res.status(200).json(egg);
    } else {
        res.status(404).end();
    }
});

router.post('', function (req, res) {
    const egg = service.save(req.body);
    res.status(201).json(egg);
});

router.put('/:id', function (req, res) {
    const egg = service.update(req.params.id, req.body);
    res.status(200).json(egg);
});

router.delete('/:id', function (req, res) {
    const egg = service.remove(req.params.id);
    res.status(204).json(egg);
});

const getValidity = () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + randomNumber());
    return date;
}
const randomNumber = () => {
    return Math.floor(Math.random() * (+300 - +30)) + +30
}

module.exports = router;
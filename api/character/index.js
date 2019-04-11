const { Router } = require('express');
const service = require('./character.service')
const router = new Router();

router.get('', function(req, res) {
    const characters = service.getAll();
    res.status(200).json(characters);
});

router.get('/random', function(req, res) {
    const characters = service.random();
    if (characters) {
        res.status(200).json(characters);
    } else {
        res.status(404).end();
    }
});

router.get('/:id', function(req, res) {
    const character = service.get(req.params.id);
    if (character) {
        res.status(200).json(character);
    } else {
        res.status(404).end();
    }
});

router.post('', godMode, function(req, res) {
    const character = service.save(req.body);
    res.status(201).json(character);
});

router.put('/:id', godMode, function(req, res) {
    const character = service.update(req.params.id, req.body);
    res.status(200).json(character);
});

router.delete('/:id', godMode, function(req, res) {
    const character = service.remove(req.params.id);
    res.status(204).json(character);
});

const godMode = (req, res) => {
    if (req.query.godMode === process.env.GOD_MOD) {
        next();
    } else {
        res.status(404).end()
    }
}

module.exports = router;
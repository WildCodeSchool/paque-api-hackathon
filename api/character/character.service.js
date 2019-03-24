const { characters } = require('../../configuration/connection');

function save(fields) {
    return characters().insert(fields);
}

function get(id) {
    return characters().get(id);
}

function random() {
    const size = characters().count();

    const index = Math.floor(Math.random() * size);

    return characters().get(index);
}

function getAll() {
    return characters().find({});
}

module.exports = { save, get, getAll, random}
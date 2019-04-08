const { characters } = require('../../configuration/connection');

function save(fields) {
    return characters().insert(fields);
}

function update(id, fields) {
    return characters().update(fields);
}

function get(id) {
    return characters().findOne({'id': id});
}

function remove(id) {
    return characters().findAndRemove({'id': id})
}

function random() {
    const size = characters().count();
    const skip = randomIndex(1, size);

    const character = characters().chain().find({}).offset(skip).limit(1).data()[0];;

    return character;
}

function getAll() {
    return characters().find({});
}

function randomIndex(min, max) {
    const value = Math.random() * (+max - +min) + +min;

    return value
}

module.exports = { save, get, getAll, update, remove, random}
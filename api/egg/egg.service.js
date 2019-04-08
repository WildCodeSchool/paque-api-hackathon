const { eggs } = require('../../configuration/connection');

function save(fields) {
    return eggs().insert(fields);
}

function update(id, fields) {
    return eggs().update(fields);
}

function get(id) {
    return eggs().findOne({'id': id});
}

function remove(id) {
    return eggs().findAndRemove({'id': id})
}

function random() {
    const size = eggs().count();
    const skip = randomIndex(1, size);

    const character = eggs().chain().find({}).offset(skip).limit(1).data()[0];

    return character;
}

function getAll() {
    return eggs().find({});
}

function randomIndex(min, max) {
    const value = Math.random() * (+max - +min) + +min;

    return value
}

module.exports = { save, get, getAll, update, remove, random}
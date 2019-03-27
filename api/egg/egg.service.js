const { eggs } = require('../../configuration/connection');

function save(fields) {
    return eggs().insert(fields);
}

function update(id, fields) {
    return eggs().update(fields);
}

function get(id) {
    return eggs().findOne({'id.$oid': id});
}

function remove(id) {
    return eggs().findAndRemove({'id.$oid': id})
}

function random() {
    const size = eggs().count();
    const skip = randomIndex(1, size);

    const character = eggs().chaine().findOne().offset(skip);

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
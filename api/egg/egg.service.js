const { eggs } = require('../../configuration/connection');

function save(fields) {
    return eggs().insert(fields);
}

function get(id) {
    return eggs().get(id);
}

function random() {
    const size = eggs().count();

    const index = Math.floor(Math.random() * size);

    return eggs().get(index);
}

function getAll() {
    return eggs().find({});
}

module.exports = { save, get, getAll, random}
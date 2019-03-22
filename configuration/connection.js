const Loki = require('lokijs')

const db = new Loki('db.json', {
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    autosaveInterval: 4000
});

// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
    checkCollection('eggs');
    checkCollection('characters');
    // kick off any program logic or start listening to external events
    // runProgramLogic();
}

function checkCollection(name) {
    var entries = db.getCollection(name);
    if (entries === null) {
        entries = db.addCollection(name);
    }
}

// example method with any bootstrap logic to run after database initialized
function runProgramLogic() {
    var entryCount = db.getCollection("entries").count();
    console.log("number of entries in database : " + entryCount);
}

module.exports = { db , databaseInitialize};
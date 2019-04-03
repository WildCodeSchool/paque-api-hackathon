const app = require('express')();
const bodyParser = require('body-parser');
const log = require('./configuration/logger');
const {
    NODE_PORT
} = require('./configuration/environment');
const {
    databaseInitialize
} = require('./configuration/connection');
const expressWs = require('express-ws')(app)
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api/eggs', require('./api/egg'));
app.use('/api/characters', require('./api/character'));
app.use('/api/stocks', require('./api/stock'));

app.get('/api/db', (req, res) => {
    var file = path.join(__dirname, '   db.json');
    res.download(file);
});

async function start() {
    try {
        databaseInitialize();
        // Start the server
        app.listen(process.env.PORT || NODE_PORT, () => {
            log.debug(`Your server is listening on port ${process.env.PORT || NODE_PORT}`);
        });
    } catch (err) {
        log.error('while starting server', err);
    }
}

start();
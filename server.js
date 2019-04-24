const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const log = require('./configuration/logger');
const {
    NODE_PORT
} = require('./configuration/environment');
const {
    databaseInitialize
} = require('./configuration/connection');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const expressWs = require('express-ws')(app);
const swaggerDocument = require('./swagger.json');
const path = require('path');
var https = require('https');
var http = require('http');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api/eggs', require('./api/egg'));
app.use('/api/characters', require('./api/character'));
app.use('/api/stocks', require('./api/stock'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));    

app.get('/api/db', (req, res) => {
    var file = path.join(__dirname, '   db.json');
    res.download(file);
});

app.use('/.well-known', express.static('.well-known', { dotfiles: 'allow' }));

app.use('/api', (req, res) => {
    res.redirect('/api-docs');
});

app.use('/', (req, res) => {
    res.redirect('/api-docs');
});

async function start() {
    try {
        databaseInitialize();
        // Start the server
        http.createServer(app).listen(process.env.PORT || NODE_PORT,() => {
            log.debug(`Your server is listening on port ${process.env.PORT || NODE_PORT}`);
        });

        https.createServer(app).listen(443, () => {
            log.debug(`Your server is listening on port 443`);
        });
    } catch (err) {
        log.error('while starting server', err);
    }
}

start();
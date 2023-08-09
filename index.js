require('dotenv').config();

const Server = require('./server');

const serve = new Server();

serve.listen();

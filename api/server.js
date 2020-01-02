const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const server = express();

server.use(helmet());
server.use(cors());
server.use(logger);
server.use(express.json());


// global logger middleware

function logger(req, res, next) {
    console.log(req.method, req.url, Date.UTC());
    next();
}

module.exports = server;
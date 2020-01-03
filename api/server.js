const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// local imports
const ProjectRoute = require("./routes/projects/route.js");
const AuthRoute = require("./routes/users/route.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(logger);
server.use(express.json());

// local routes
server.use("/projects", ProjectRoute);
server.use("/auth", AuthRoute);

// global logger middleware

function logger(req, res, next) {
  console.log(req.method, req.url, Date.UTC());
  next();
}

module.exports = server;

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// local imports
<<<<<<< HEAD
const ProjectRoute = require("./routes/projects/route.js");
const AuthRoute = require("./routes/users/route.js");
=======
const ProjectRoute = require('./routes/projects/route.js')
const BugRoute = require('./routes/bugs/route.js')

>>>>>>> tommy-kindle

const server = express();

server.use(helmet());
server.use(cors());
server.use(logger);
server.use(express.json());

// local routes
<<<<<<< HEAD
server.use("/projects", ProjectRoute);
server.use("/auth", AuthRoute);
=======
server.use('/projects', ProjectRoute)
server.use('/bugs', BugRoute)

>>>>>>> tommy-kindle

// global logger middleware

function logger(req, res, next) {
  console.log(req.method, req.url, Date.UTC());
  next();
}

module.exports = server;

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// local imports
const AuthRoute = require("./routes/users/route.js");
const ProjectRoute = require("./routes/projects/route.js");
const BugRoute = require("./routes/bugs/route.js");
const NotesRoute = require("./routes/notes_bugs/route.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(logger);
server.use(express.json());

// local routes
server.use("/auth", AuthRoute);
server.use("/projects", ProjectRoute);
server.use("/bugs", BugRoute);
server.use("/notes", NotesRoute);
server.use('/docs', express.static('./docs'))
// global logger middleware

function logger(req, res, next) {
  console.log(req.method, req.url, Date.UTC());
  next();
}

server.get("/", (req, res) => {
  return res.status(200).json(`<h1> server is up and running </h1>`);
});

module.exports = server;

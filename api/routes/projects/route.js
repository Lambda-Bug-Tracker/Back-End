const express = require("express");
const router = express.Router();
const firebaseToUser = require("../../middleware/firebaseMapToUser");
const { getByUserId, addProject, editProject } = require("./model.js");

router.get("/:user_id", firebaseToUser, async (req, res) => {
  console.log("params", req.params);
  const { user_id } = req.params;
  console.log("get.id", user_id);

  getByUserId(user_id)
    .then(projects => res.status(200).json({ projects }))
    .catch(err => res.status(500).json({ err: err.message }));
});

router.post("/:user_id", firebaseToUser, (req, res) => {
  const { user_id } = req.params;
  const body = req.body;

  console.log("id, body:", user_id, body);

  const idIsNum = Number(user_id);
  addProject(body, idIsNum)
    .then(newProject => {
      console.log(newProject);
      res.status(201).json({ newProject });
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

router.put("/:user_id/:project_id", firebaseToUser, (req, res) => {
  const { user_id, project_id } = req.params;
  const changes = req.body;

  editProject(user_id, project_id, changes)
    .then(updates => res.status(204).json(updates))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;

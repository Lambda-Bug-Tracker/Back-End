  const express = require("express");
const router = express.Router();
const firebaseToUser = require("../../middleware/firebaseMapToUser");
const {
  getByUserId,
  addProject,
  editProject,
  deleteProject
} = require("./model.js");

router.get("/:user_id", firebaseToUser, async (req, res) => {
  const { user_id } = req.params;

  getByUserId(user_id)
    .then(projects => res.status(200).json({ projects }))
    .catch(err => res.status(500).json({ err: err.message }));
});

router.post("/:user_id", firebaseToUser, (req, res) => {
  const { user_id } = req.params;
  const body = req.body;

  const idIsNum = Number(user_id);
  addProject(body, idIsNum)
    .then(newProject => res.status(201).json({ newProject }))
    .catch(err => res.status(500).json({ error: err.message }));
});

router.put("/:user_id/:project_id", firebaseToUser, (req, res) => {
  const { user_id, project_id } = req.params;
  const changes = req.body;

  editProject(user_id, project_id, changes)
    .then(updates => res.status(204).json(updates))
    .catch(err => res.status(500).json({ error: err.message }));
});

router.delete("/:user_id/:project_id", firebaseToUser, (req, res) => {
  const { user_id, project_id } = req.params;

  deleteProject(user_id, project_id)
    .then(project => res.status(200).json({ success: "deleted" }))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;

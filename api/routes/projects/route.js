const express = require("express");
const router = express.Router();
const firebaseToUser = require("../../middleware/firebaseMapToUser");
const { getByUserId, addProject } = require("./model.js");

router.get("/:user_id", firebaseToUser, async (req, res) => {
  console.log("params", req.params);
  const { user_id } = req.params;
  console.log("get.id", user_id);

  getByUserId(user_id)
    .then(projects => res.status(200).json({ projects }))
    .catch(err => res.status(500).json({ err: err.message }));
});

router.post("/:user_id", firebaseToUser, (req, res) => {
  const { id } = req.params;
  const body = req.body;

  console.log("id, body:", id, body);

  const idIsNum = Number(id);
  addProject(body, idIsNum)
    .then(newProject => {
      console.log(newProject);
      res.status(201).json({ newProject });
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;

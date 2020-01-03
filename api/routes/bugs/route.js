const express = require("express");
const router = express.Router();
const { getByProjectId, createBug, createProjectBug } = require("./model.js");

/* @api */

router.get("/:project_id", (req, res) => {
  const { project_id } = req.params;

  getByProjectId(project_id)
    .then(bugs => res.status(200).json({ bugs }))
    .catch(err => res.status(500).json({ err: err.message }));
});

router.post("/:project_id", async (req, res) => {
  const { project_id } = req.params;
  try {
    if (req.body) {
      const bug = await createBug(req.body);
      const IDs = {
        bug_id: bug[0],
        project_id: project_id
      };
      await createProjectBug(IDs);
      res.status(201).json({ message: "Success 🍻" });
    } else {
      res.status(400).json({ message: "Need to send bug in body of request." });
    }
  } catch (err) {
    res.status(500).json({ errMessage: err.message, devMessage: "💩" });
  }
});

module.exports = router;

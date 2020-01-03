const express = require("express");
const router = express.Router();
const firebaseToUser = require("../../middleware/firebaseMapToUser.js");

const { getNotesByBugId } = require("./model.js");

router.get("/:bug_id", (req, res) => {
  const { bug_id } = req.params;

  getNotesByBugId(bug_id)
    .then(notes => res.status(200).json({ notes }))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;

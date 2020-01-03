const express = require("express");
const router = express.Router();
const firebaseToUser = require("../../middleware/firebaseMapToUser.js");

const { getNotesByBugId, addNote, deleteNote } = require("./model.js");

router.get("/:bug_id", (req, res) => {
  const { bug_id } = req.params;

  getNotesByBugId(bug_id)
    .then(notes => res.status(200).json({ notes }))
    .catch(err => res.status(500).json({ error: err.message }));
});

router.post("/:bug_id", (req, res) => {
  const { bug_id } = req.params;
  const note = req.body;

  addNote(bug_id, note)
    .then(newNotes => res.status(201).json({ newNotes }))
    .catch(err => res.status(500).json({ error: err.message }));
});

router.delete("/:bug_id/:note_id", (req, res) => {
  const { bug_id, note_id } = req.params;

  console.log("bug_id", bug_id);
  console.log("note_id", note_id);

  deleteNote(bug_id, note_id)
    .then(() => res.status(200).json({ success: "deleted" }))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;

const db = require("../../../database/dbConfig.js");

module.exports = {
  getNotesByBugId,
  addNote,
  deleteNote
};

function getNotesByBugId(bugID) {
  return db("notes_bugs as nb")
    .join("additional_notes as an", "an.id", "nb.additional_note_id")
    .join("bugs", "bugs.id", "nb.bug_id")
    .select("an.note as additional_note")
    .where("nb.bug_id", bugID);
}

async function addNote(bugID, newNote) {
  const id = await db("additional_notes").insert(newNote);

  const note = {
    additional_note_id: id[0],
    bug_id: bugID
  };

  await db("notes_bugs").insert(note);

  return getNotesByBugId(bugID);
}

function deleteNote(bugID, noteID) {
  const id = noteID;
  return getNotesByBugId(bugID).then(res => {
    return db("additional_notes")
      .where({ id })
      .del()
      .then(() => res);
  });
}

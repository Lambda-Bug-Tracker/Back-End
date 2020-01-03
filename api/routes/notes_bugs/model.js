const db = require('../../../database/dbConfig.js')

module.exports = {
    getNotesByBugId
}

function getNotesByBugId(bugID) {
    return db('notes_bugs as nb')
        .join('additional_notes as an', "an.id", 'nb.additional_note_id')
        .join('bugs', 'bugs.id', 'nb.bug_id')
        .select("an.note as additional_note")
        .where("nb.bug_id", bugID)
}
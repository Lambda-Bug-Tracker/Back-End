exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("notes_bugs")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("notes_bugs").insert([
        { id: 1, additional_note_id: 1, bug_id: 1 },
        { id: 2, additional_note_id: 2, bug_id: 2 },
        { id: 3, additional_note_id: 3, bug_id: 3 }
      ]);
    });
};

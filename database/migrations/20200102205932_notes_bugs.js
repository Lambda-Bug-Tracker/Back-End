exports.up = function(knex) {
  return knex.schema.createTable("notes_bugs", tbl => {
    tbl.increments();
    tbl
      .integer("additional_note_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("additional_notes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("bug_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("bugs")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('notes_bugs')
};

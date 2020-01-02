exports.up = function(knex) {
  return knex.schema.createTable("additional_notes", tbl => {
    tbl.increments();
    tbl.text("note").notNullable;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("additional_notes");
};

exports.up = function(knex) {
  return knex.schema.createTable("project_bugs", tbl => {
    tbl.increments();
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
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
  return knex.schema.dropTableIfExists("project_bugs");
};

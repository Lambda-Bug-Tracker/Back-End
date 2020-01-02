exports.up = function(knex) {
  return knex.schema.createTable("member_bugs", tbl => {
    tbl.increments();
    tbl
      .integer("project_bug_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("project_bugs")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("project_member_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("project_members")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("member_bugs");
};

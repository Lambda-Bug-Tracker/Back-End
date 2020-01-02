exports.up = function(knex) {
  return knex.schema.createTable("bugs", tbl => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl.text("description").notNullable();
    tbl.integer("priority_tag").defaultTo(0);
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("bugs");
};

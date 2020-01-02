exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .integer("firebase_id")
      .unique()
      .notNullable();
    tbl
      .string("email", 128)
      .unique()
      .notNullable();
    tbl.string("display_name", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};

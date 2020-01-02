exports.up = function(knex) {
  return knex.schema.createTable("progress_tag", tbl => {
    tbl.increments();
    tbl
      .string("tag_name", 128)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("progress_tag");
};
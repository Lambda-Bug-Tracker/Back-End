exports.up = function(knex) {
  return knex.schema.createTable("hashtag", tbl => {
    tbl.increments();
    tbl
      .string("tag_name")
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("hashtag");
};

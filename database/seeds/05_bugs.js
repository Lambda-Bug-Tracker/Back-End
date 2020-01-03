
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bugs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('bugs').insert([
        { id: 1, name: 'bug1', description: "test bug 1", priority_tag: 1, created_at: new Date() },
      ]);
    });
};

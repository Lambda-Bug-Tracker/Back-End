
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('additional_notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('additional_notes').insert([
        {id: 1, note: '💩'},
        {id: 2, note: '💩'},
        {id: 3, note: '💩'}
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('additional_notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('additional_notes').insert([
        {id: 1, note: 'dis a note on a bug 🐛'},
        {id: 2, note: 'dis a note on a bug 🦋'},
        {id: 3, note: 'dis a note on a bug 🐜'}
      ]);
    });
};

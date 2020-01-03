
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('progress_tags').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('progress_tags').insert([
        {id: 1, tag_name: '1'},
        {id: 2, tag_name: '2'},
        {id: 3, tag_name: '3'},
        {id: 4, tag_name: '4'}
      ]);
    });
};

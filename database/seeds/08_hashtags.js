
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hashtags').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('hashtags').insert([
        {id: 1, tag_name: 'front-end'},
        {id: 2, tag_name: 'back-end'},
        {id: 3, tag_name: 'styles'}
      ]);
    });
};

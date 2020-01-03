
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bugs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('bugs').insert([
        {id: 1, name: 'bug1', description: 'testing bugs', priority_tag: 1, progress_tag: 1, hash_tag: 2, created_at: Date.now()},
        {id: 2, name: 'bug2', description: 'testing bugs', priority_tag: 1, progress_tag: 1, hash_tag: 2, created_at: Date.now()},
        {id: 3, name: 'bug3', description: 'testing bugs', priority_tag: 1, progress_tag: 1, hash_tag: 2, created_at: Date.now()}
      ]);
    });
};

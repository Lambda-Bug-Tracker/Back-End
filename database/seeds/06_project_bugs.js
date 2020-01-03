exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_bugs")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("project_bugs").insert([
        { id: 1, project_id: 1, bug_id: 1 },
        { id: 2, project_id: 2, bug_id: 2 },
        { id: 3, project_id: 3, bug_id: 3 }
      ]);
    });
};

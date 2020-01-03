exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user_projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("user_projects").insert([
        { id: 1, user_id: 1, project_id: 1, is_admin: false },
        { id: 2, user_id: 2, project_id: 2, is_admin: false },
        { id: 3, user_id: 3, project_id: 3, is_admin: false }
      ]);
    });
};

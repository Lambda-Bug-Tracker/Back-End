exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_members")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("project_members").insert([
        { id: 1, is_project_admin: 0, user_id: 1, project_id: 2 },
        { id: 2, is_project_admin: 0, user_id: 2, project_id: 3 },
        { id: 3, is_project_admin: 0, user_id: 3, project_id: 1 }
      ]);
    });
};

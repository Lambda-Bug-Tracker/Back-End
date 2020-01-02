exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { id: 1, name: "project1", description: "this is project uno" },
        { id: 2, name: "project2", description: "this is project dos" },
        { id: 3, name: "project3", description: "this is project tres" }
      ]);
    });
};

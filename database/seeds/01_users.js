
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          firebase_id: 12345,
          email: "dancingqueen@gmail.com",
          display_name: "Marge"
        },
        {
          id: 2,
          firebase_id: 67890,
          email: "bananas@gmail.com",
          display_name: "Margie"
        },
        {
          id: 3,
          firebase_id: 8657309,
          email: "pete@gmail.com",
          display_name: "Pete"
        }
      ]);
    });
};

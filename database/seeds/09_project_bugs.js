exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_bugs")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("project_bugs").insert([
        {
          id: 1,
          project_id: 2,
          bug_id: 1,
          additional_note_id: 1,
          progress_tag_id: 1,
          hashtag_id: 1
        },
        {
          id: 2,
          project_id: 2,
          bug_id: 2,
          additional_note_id: 2,
          progress_tag_id: 2,
          hashtag_id: 1
        },
        {
          id: 3,
          project_id: 2,
          bug_id: 3,
          additional_note_id: 3,
          progress_tag_id: 3,
          hashtag_id: 1
        }
      ]);
    });
};

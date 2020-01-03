const db = require("../../../database/dbConfig");

module.exports = {
  getByProjectId,
  createBug,
  createProjectBug,
  findBug,
  updateBug
};

function getByProjectId(projectID) {
  console.log("projectID: ", projectID);
  return (
    db("project_bugs as pb")
      .join("bugs", "bugs.id", "=", "pb.bug_id")
      .join("projects", "projects.id", "=", "pb.project_id")
      // .select("bugs.name as bugs_name", "bugs.description as bugs_description",
      //     "bugs.priority_tag as priority_tag", "bugs.created_at as created_at"
      // )
      .select(
        "bugs.id",
        "bugs.name as bug_name",
        "bugs.description",
        "bugs.priority_tag",
        "bugs.progress_tag",
        "bugs.hash_tag",
        "bugs.created_at"
      )
      .where("pb.project_id", projectID)
  );
}

function createBug(bug) {
  return db("bugs").insert(bug);
}

function createProjectBug(IDs) {
  return db("project_bugs").insert(IDs);
}

function findBug(id) {
  return db("bugs")
    .where({ id })
    .first();
}

async function updateBug(bug, id) {
  await db("bugs")
    .where({ id })
    .update(bug);
  return findBug(id);
}

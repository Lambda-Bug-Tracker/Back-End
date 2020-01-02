const db = require("../../../database/dbConfig.js");
module.exports = {
  getByUserId,
  addProject
};

function getByUserId(userID) {
  return db("user_projects as up")
    .join("users", "users.id", "=", "up.user_id")
    .join("projects", "projects.id", "=", "up.project_id")
    .select("projects.name as project_name", "projects.description")
    .where("up.user_id", userID);
}

async function addProject(project, userID) {
  const id = await db("projects").insert(project);

  const newUserProject = {
    user_id: userID,
    project_id: id[0]
  };

   await db("user_projects").insert(newUserProject);

  return getByUserId(userID);
}

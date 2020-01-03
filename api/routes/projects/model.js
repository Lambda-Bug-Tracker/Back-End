const db = require("../../../database/dbConfig.js");
module.exports = {
  getByUserId,
  addProject,
  editProject,
  deleteProject,
  getProjectById
};

function getProjectById(id){
  return db('projects')
  .where({id})
  .first()
}

// not finding multiple
function getByUserId(userID) {
  return db("user_projects as up")
    .join("users", "users.id", "up.user_id")
    .join("projects", "projects.id", "up.project_id")
    .select(
      "up.id as user_project_id",
      "projects.id as project_id",
      "projects.name as project_name",
      "projects.description",
      "up.is_admin"
    )
    .where("up.user_id", userID);
}

async function addProject(project, userID) {
  const id = await db("projects").insert(project);
  const newUserProject = {
    user_id: userID,
    project_id: id[0],
    is_admin: true
  };
  await db("user_projects").insert(newUserProject);

  return getByUserId(userID);
}

async function editProject(userID, projectID, changes) {
  const id = projectID;
  return getByUserId(userID).then(res => {
    return db("projects")
      .where({ id })
      .update(changes, "id");
  });
}

function deleteProject(userID, projectID) {
  const id = projectID;
  return getByUserId(userID).then(res => {
    return db("projects")
      .where({ id })
      .del()
      .then(() => res);
  });
}

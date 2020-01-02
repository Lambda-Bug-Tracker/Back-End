const db = require("../../../database/dbConfig.js");
module.exports = {
  getByUserId
};

function getByUserId(userID) {
  console.log("userId: ", userID);

  return db("user_projects as up")
    .join("users", "users.id", "=", "up.user_id")
    .join("projects", "projects.id", "=", "up.project_id", )
    .select("projects.name as project_name", "projects.description")
    .where("up.user_id", userID);
}

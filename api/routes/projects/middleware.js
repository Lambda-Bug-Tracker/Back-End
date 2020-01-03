const { getProjectById } = require("./model.js");

module.exports = {
  validateProjectID
};

function validateProjectID(req, res, next) {
  const { project_id } = req.params;

  getProjectById(project_id).then(project => {
    if (project) {
      next();
    } else {
      res.status(400).json({ message: "project id does not exists" });
    }
  });
}

const { getBugById } = require("./model.js");

module.exports = {
  validateBugId
};

function validateBugId(req, res, next) {
  const { bug_id } = req.params;

  getBugById(bug_id).then(bug => {
    if (bug) {
      next();
    } else {
      res.status(400).json({ message: "bug id does not exists" });
    }
  });
}

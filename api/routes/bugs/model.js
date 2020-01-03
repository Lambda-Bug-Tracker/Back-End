const db = require('../../../database/dbConfig');

module.exports = {
    getByProjectId
}

function getByProjectId(projectID) {
    return db("project_bugs as pb")
        .join("bugs", "bugs.id", "=", "pb.bug_id")
        .join("projects", "projects.id", "=", "pb.project_id")
        .select("bugs.name as bugs_name", "bugs.description as bugs_description",
            "bugs.priority_tag as priority_tag", "bugs.created_at as created_at"
        )
        .where("pb.project_id", projectID)
}

const db = require('../../../database/dbConfig.js')
module.exports = {
    getByUserId
}
function getByUserId(userID) {
    return db('project_members as pm')
    .join('users', 'users.id', 'pm.user_id')
    .join('projects', 'projects.id', 'pm.project_id')
    .select('pm.id', 'pm.is_project_admin', 'projects.name', 'projects.description')
    .where(userID)
}
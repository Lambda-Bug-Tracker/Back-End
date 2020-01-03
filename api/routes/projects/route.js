const express = require("express");
const router = express.Router();
const firebaseToUser = require("../../middleware/firebaseMapToUser");
const {
  getByUserId,
  addProject,
  editProject,
  deleteProject
} = require("./model.js");

/**
 * @api {get} /projects/:user_id
 * @apiSuccessExample {json} Success-Response-Example:
 *    HTTP/1.1 200 OK    
 *    {
        "projects": [
          {
            "project_name": "A Project",
            "description": "dis is a project description"
          }
        ]
      }
 */

router.get("/:user_id", firebaseToUser, async (req, res) => {
  const { user_id } = req.params;

  getByUserId(user_id)
    .then(projects => res.status(200).json({ projects }))
    .catch(err => res.status(500).json({ err: err.message }));
});

/**
 * @api {post} /projects/:user_id
 * @apiParam {String{...128}} name Name of project
 * @apiParam {String} description Description of project
 * 
 * @apiSuccessExample {json} Success-Response-Example:
 *    HTTP 1.1 201 Created
 *    {
        "newProject": [
          {
            "project_name": "project 23",
            "description": " dis is 23"
          },
          {
            "project_name": "project 24",
            "description": " dis is 24"
          }
        ]
      }
 */

router.post("/:user_id", firebaseToUser, (req, res) => {
  const { user_id } = req.params;
  const body = req.body;

  const idIsNum = Number(user_id);
  addProject(body, idIsNum)
    .then(projects => res.status(201).json({ projects }))
    .catch(err => res.status(500).json({ error: err.message }));
});

/**
 * @api {put} /projects/:user_id
 * @apiParam {String{...128}} name Name of project
 * @apiPara {String} description Description of project
 *
 * @apiSuccessExample {json} Success-Response-Example:
 *    HTTP 1.1 204 No Content
 */

router.put("/:user_id/:project_id", firebaseToUser, (req, res) => {
  const { user_id, project_id } = req.params;
  const changes = req.body;

  editProject(user_id, project_id, changes)
    .then(updatedProject => res.status(204).json({ updatedProject }))
    .catch(err => res.status(500).json({ error: err.message }));
});

/**
 * @api {delete} /projects/:user_id/:project_id
 *
 * @apiSuccessExample {json} Success-Response-Example:
 *    HTTP 1.1 200 OK
 *    {
        "success": "deleted"
      }
 */

router.delete("/:user_id/:project_id", firebaseToUser, (req, res) => {
  const { user_id, project_id } = req.params;

  deleteProject(user_id, project_id)
    .then(project => res.status(200).json({ success: "deleted" }))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;

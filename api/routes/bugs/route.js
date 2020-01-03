const express = require("express");
const router = express.Router();
const {
  getByProjectId,
  getByBugId,
  createBug,
  createProjectBug,
  findBug,
  updateBug,
  removeBug
} = require("./model.js");

/**
 * @api {get} /bugs/:project_id
 * @apiSuccessExample {json} Success-Response-Example:
 *    HTTP/1.1 200 OK
 *    {
 *      "bugs": [
 *        {
 *          "id": 1,
 *          "bug_name": "bug1",
 *          "description": "testing bugs",
 *          "priority_tag": 1,
 *          "progress_tag": 1,
 *          "hash_tag": 2,
 *          "created_at": 1578069493115
 *        }
 *      ]
 *    }
 */

router.get("/:project_id", (req, res) => {
  const { project_id } = req.params;

  getByProjectId(project_id)
    .then(bugs => res.status(200).json({ bugs }))
    .catch(err => res.status(500).json({ err: err.message }));
});

/**
 * @api {get} /bugs/specific/:bug_id
 * @apiSuccessExample {json} Success-Response-Example:
 *    HTTP/1.1 200 OK
 *    {
 *      "bugs": [
 *        {
 *          "id": 1,
 *          "bug_name": "bug1",
 *          "description": "testing bugs",
 *          "priority_tag": 1,
 *          "progress_tag": 1,
 *          "hash_tag": 2,
 *          "created_at": 1578069493115
 *        }
 *      ]
 *    }
 */

router.get("/specific/:bug_id", (req, res) => {
  const { bug_id } = req.params;

  getByBugId(bug_id)
    .then(bugs => res.status(200).json({ bugs }))
    .catch(err => res.status(500).json({ err: err.message }));
});

/**
 * @api {post} /bugs/:project_id
 * @apiParam {String{...128}} name Name of bug may not be unique.
 * @apiParam {String} description Description of bug.
 * @apiParam {Integer} priority_tag Indicates how high on the priority list this bug is.
 * @apiParam {Integer} progress_tag Indicates how far along in the process the bug is. Is defaulted to 1 and is not required in body of request.
 * @apiParam {Integer} hash_tag Describes what coding area the bug falls under (front end, back end, UI).
 * @apiParam {Timestamp} created_at Let's us know when the bug was created.
 *
 * @apiSuccessExample {json} Success-Response-Example:
 *    HTTP/1.1 201 Created
 *    {
 *      "name": "A new bug",
 *      "description": "It keeps breaking my code",
 *      "priority_tag": 1,
 *      "hash_tag": 1,
 *      "created_at": "2020-01-3"
 *    }
 */

router.post("/:project_id", async (req, res) => {
  const { project_id } = req.params;
  try {
    if (req.body) {
      const bug = await createBug(req.body);
      const IDs = {
        bug_id: bug[0],
        project_id: project_id
      };
      await createProjectBug(IDs);
      res.status(201).json({ message: "Success 🍻" });
    } else {
      res.status(400).json({ message: "Need to send bug in body of request." });
    }
  } catch (err) {
    res.status(500).json({ errMessage: err.message, devMessage: "💩" });
  }
});

/**
 * @api {put} /bugs/:bug_id
 * @apiParam {String{...128}} name Name of bug may not be unique.
 * @apiParam {String} description Description of bug.
 * @apiParam {Integer} priority_tag Indicates how high on the priority list this bug is.
 * @apiParam {Integer} progress_tag Indicates how far along in the process the bug is.
 * @apiParam {Integer} hash_tag Describes what coding area the bug falls under (front end, back end, UI).
 * @apiParam {Timestamp} created_at Let's us know when the bug was created.
 *
 * @apiSuccessExample {json} Success-Response-Example:
 *    HTTP/1.1 200 Created
 *    {
 *      "name": "A new bug",
 *      "description": "It keeps breaking my code",
 *      "priority_tag": 1,
 *      "hash_tag": 1,
 *      "created_at": "2020-01-3"
 *    }
 */

router.put("/:bug_id", async (req, res) => {
  const { bug_id } = req.params;
  const bugChanges = req.body;
  try {
    const bug = await findBug(bug_id);
    if (bug) {
      const freshBug = await updateBug(bugChanges, bug_id);

      res.status(201).json({ message: "Success 🍻", bug: freshBug });
    } else {
      res.status(400).json({ message: "Need to send bug in body of request." });
    }
  } catch (err) {
    res.status(500).json({ errMessage: err.message, devMessage: "💩" });
  }
});

/**
 * @api {delete} /bugs/:project_id
 * @apiSuccessExample {json} Success-Response-Example:
 *    HTTP/1.1 200 OK
 *
 */

router.delete("/:bug_id", async (req, res) => {
  const { bug_id } = req.params;

  try {
    const deletedBug = await removeBug(bug_id);

    if (deletedBug) {
      res
        .status(200)
        .json({ message: "Bug has been successfully deleted. 👌" });
    } else {
      res.status(404).json({ message: "Bug was not found. 🤷‍♂" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server err 💩", error: err.message });
  }
});

module.exports = router;

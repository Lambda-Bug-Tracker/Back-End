const express = require("express");
const router = express.Router();
const { getByUserId } = require("./model.js");

router.get("/:id", async(req, res) => {
  console.log("params", req.params);
  const { id } = req.params;
  console.log("get.id", id);
//   const projects = await getByUserId(id)
//     res.status(200).json(projects)
    getByUserId(id)
    .then(projects => res.status(200).json({ projects }))
    .catch(err => res.status(500).json({ err: err.message }));
});

module.exports = router;

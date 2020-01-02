const express = require("express");
const router = express.Router();
const { getByUserId } = require("./model.js");


router.get("/:user_id", (req, res) => {
  const id = req.params.user_id;
  getByUserId(id)
    .then(projects => res.status(200).json({ projects }))
    .catch(err => res.status(500).json({ failed: "this failed 💩" }));
});

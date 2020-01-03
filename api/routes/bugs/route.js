const express = require("express");
const router = express.Router();
const { getByProjectId } = require('./model.js');

router.get("/project/:id", (req, res) => {
    const { id } = req.params;

    getByProjectId(id)
        .then(bugs => res.status(200).json({ bugs }))
        .catch(err => res.status(500).json({ err: err.message }))
})

module.exports = router();
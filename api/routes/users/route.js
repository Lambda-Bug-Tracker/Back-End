const express = require("express");
const router = express.Router();
const Auth = require("./model.js");

router.post("/register", validateRequest, async (req, res) => {
  let newUser = req.body;

  try {
    res.status(201).json({
      message: "new user created",
      newUser: await Auth.add(newUser)
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
});

function validateRequest(req, res, next) {
  let newUser = req.body;
  if ((newUser && newUser.firebase_id, newUser.display_name && newUser.email)) {
    next();
  } else {
    res.status(400).json({
      errorMessage:
        "The request body must contain values for 'firebase_id', 'display_name' and 'email'"
    });
  }
}

module.exports = router;

const db = require("../../database/dbConfig.js");

module.exports = async (req, res, next) => {
  const firebaseID = req.params.user_id;
  let user;
  console.log("firebaseID", firebaseID);
  try {
    user = await getUserID(firebaseID);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error " });
  }

  if (!user) {
    console.log("user.id", user);
    res.status(400).json({
      error: `A user with firebaseID: ${firebaseID} could not be found. `
    });
  } else {
    req.params.user_id = user.id;
    next();
  }
};

function getUserID(firebase_id) {
  return db("users")
    .select("id")
    .where({ firebase_id })
    .first();
}

const db = require("../../../database/dbConfig.js");

// Export functions 🚀
module.exports = {
  findById,
  add
};

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

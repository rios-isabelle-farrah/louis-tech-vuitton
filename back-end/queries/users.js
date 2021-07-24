const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
    return error;
  }
};

const createUser = async (newUser) => {
  const { username, password } = newUser;
  try {
    const theUser = await db.one(
      "INSERT INTO users(username, password) VALUES($1, $2) RETURNING *",
      [username, password]
    );
    console.log(theUser)
    return theUser;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (id) => {
  try {
    const user = await db.one(`SELECT * FROM users WHERE id = $1`, id);
    return user;
  } catch (error) {}
};


// create - update password
const updateUser = async (id, user) => {
  const { username, password } = user;
  try {
    const query =
      "UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *";
    const result = await db.one(query, [username, password, id]);
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// delete user account
const deleteUser = async (id) => {
  try {
    const query = `DELETE FROM users WHERE id = $1 RETURNING *`;
    const deletedUser = await db.one(query, id);
    return deletedUser;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
};

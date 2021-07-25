const db = require("../db/dbConfig.js");

// INDEX
const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return { sucess: true, payload: allUsers };
  } catch (error) {
    return { sucess: false, payload: error };
  }
};

// CREATE
const createUser = async (newUser) => {
  const { username, password } = newUser;
  try {
    const theUser = await db.one(
      "INSERT INTO users(username, password) VALUES($1, $2) RETURNING *",
      [username, password]
    );
    console.log(theUser);
    return { sucess: true, payload: theUser };
  } catch (error) {
    return { sucess: false, payload: error };
  }
};

// SHOW
const getUser = async (id) => {
  try {
    const user = await db.one(`SELECT * FROM users WHERE id = $1`, id);
    return { sucess: true, payload: user };
  } catch (error) {
    return { sucess: false, payload: error };
  }
};

// UPDATE
// create - update password
const updateUser = async (id, user) => {
  const { username, password } = user;
  try {
    const query =
      "UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *";
    const result = await db.one(query, [username, password, id]);
    return { sucess: true, payload: result };
  } catch (error) {
    return { sucess: false, payload: error };
  }
};


// DESTROY
// delete user account
const deleteUser = async (id) => {
  try {
    const query = `DELETE FROM users WHERE id = $1 RETURNING *`;
    const deletedUser = await db.one(query, id);
    return { sucess: true, payload: deletedUser };
  } catch (error) {
    return { sucess: false, payload: error };
  }
};

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
};

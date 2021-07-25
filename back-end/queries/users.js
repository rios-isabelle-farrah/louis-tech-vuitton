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
    return { sucess: true, payload: theUser };
  } catch (error) {
    return { sucess: false, payload: error };
  }
};

// not RESTful
const getUser = async (user, pw) => {
  try {
    const user1 = await db.oneOrNone(`SELECT * FROM users WHERE username = $1 AND password = $2`, [user, pw]);
    return { sucess: true, payload: user1 };
  } catch (error) {
    console.log(error)
    return { sucess: false, payload: error };
  }
};

// UPDATE
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

const express = require("express");
const users = express.Router();
const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
} = require("../queries/users");

// INDEX
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  res.json(allUsers);
});

// CREATE
users.post("/", async (req, res) => {
  const newuser = req.body;
  const result = await createUser(newuser);
  //   console.log(result);
  res.json(result);
});

// SHOW - not RESTful
users.get("/login", async (req, res) => {
  const { user, pw } = req.query;
  const user1 = await getUser(user, pw);
  if (user1) {
    res.json(user1);
  } else {
    res.redirect("/404");
  }
});

// UPDATE
users.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { username, password } = body;
  if (!username || !password) {
    res.status(422).json({
      error: true,
      success: false,
      message: "Invalid entry",
    });
  } else {
    const result = await updateUser(params.id, body);
    res.json(result);
  }
});

// DESTROY
users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  res.json(deletedUser);
});

module.exports = users;

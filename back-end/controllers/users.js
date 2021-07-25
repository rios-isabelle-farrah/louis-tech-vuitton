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

// SHOW
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user) {
    res.json(user);
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

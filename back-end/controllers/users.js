const express = require("express");
const users = express.Router();
const { getAllUsers } = require("../queries/users");
const { getUser } = require("../queries/users");
const { deleteUser } = require("../queries/users");
const { updateUser } = require("../queries/users");
const { createUser } = require("../queries/users");

// INDEX
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  res.json({ success: true, payload: allUsers });
});

users.post("/", async (req, res) => {
  const newuser = req.body;
  const result = await createUser(newuser);
//   console.log(result);
  res.json({ success: true, payload: result });
});

users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user) {
    res.json({ success: true, payload: user });
  } else {
    res.redirect("/404");
  }
});

users.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { username, password } = body;
  if (!username || !password) {
    res.status(422).json({
      error: true,
      success: false,
      message: "not!",
    });
  } else {
    const result = await updateUser(params.id, body);
    res.json({ success: true, payload: result });
  }
});

users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  res.json({ success: true, payload: deletedUser });
});

module.exports = users;

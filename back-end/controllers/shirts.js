const express = require("express");
const shirts = express.Router();
const { getAllShirts } = require("../queries/shirts");
const { getShirt } = require("../queries/shirts");
const { deleteShirt } = require("../queries/shirts");
const { updateShirt } = require("../queries/shirts");
const { createShirt } = require("../queries/shirts");

// INDEX
shirts.get("/", async (req, res) => {
  const allShirts = await getAllShirts();
  // console.log(allShirts)
  res.json({ success: true, payload: allShirts });
});

// CREATE
shirts.post("/", async (req, res) => {
  const newShirt = req.body;
  const result = await createShirt(newShirt);
  console.log(result);
  res.json({success: true, payload:result});
});

// SHOW
shirts.get("/:id", async (req, res) => {
  const { id } = req.params;
  const shirt = await getShirt(id);
  if (shirt) {
    res.json({success: true, payload:shirt});
  } else {
    res.redirect("/404");
  }
});

// UPDATE
shirts.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { type_of, size, color, price, in_stock } = body;
  if (!type_of ||!size || !color || !price || !in_stock) {
    res.status(422).json({
      error: true,
      success: false,
      message: "Invalid entry",
    });
  } else {
    const result = await updateShirt(params.id, body);
    res.json({success: true, payload:result});
  }
});

// DESTROY
shirts.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedShirt = await deleteShirt(id);
  res.json({ success: true, payload: deletedShirt });
});

module.exports = shirts;
const db = require("../db/dbConfig.js");

const getAllShirts = async () => {
  try {
    const allShirts = await db.any("SELECT * FROM shirts");
    return allShirts;
  } catch (err) {
    return err;
  }
};

const getShirt = async (id) => {
  try {
    // sanitize query by passing SECOND argument to db.one()
    const shirt = await db.one(`SELECT * FROM shirts WHERE id = $1`, id);
    return shirt;
  } catch (error) {
  }
};

const createShirt = async (newShirt) => {
  const {type_of, size, color, price, in_stock } = newShirt;
  try {
    const theShirt = await db.one(
      "INSERT INTO shirts(type_of, size, color, price, in_stock) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [type_of, size, color, price, in_stock]
    );
    return theShirt;
  } catch (error) {
    console.log(error);
  }
};

const deleteShirt = async (id) => {
  try {
    const query = `DELETE FROM shirts WHERE id = $1 RETURNING *`;
    const deletedShirt = await db.one(query, id);
    return deletedShirt;
  } catch (error) {
    console.log(error);
  }
};



const updateShirt = async (id, shirt) => {
  try {
    const { type_of, size, color, price, in_stock } = shirt;
    const query =
      "UPDATE shirts SET type_of = $1 size = $2, color = $3, price = $4, in_stock = $5 WHERE id = $6 RETURNING *";
    const result = await db.one(query, [type_of, size, color, price, in_stock, id]);
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllShirts,
  getShirt,
  deleteShirt,
  updateShirt,
  createShirt,
};

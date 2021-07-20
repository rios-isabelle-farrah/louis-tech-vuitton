const db = require("../db/dbConfig.js");

const getShirt = async (id) => {
  try {
    // sanitize query by passing SECOND argument to db.one()
    const shirt = await db.one(`SELECT * FROM shirts WHERE id = $1`, id);
    // const Shirt = await db.one(`SELECT * FROM Shirts WHERE id = $[id]`, {id:id})
    return shirt;
  } catch (error) {
    //console.log(error);
  }
};

const createShirt = async (newShirt) => {
  const { size, color, price, in_stock } = newShirt;
  try {
    const theShirt = await db.one(
      "INSERT INTO shirts(size, color, price, in_stock) VALUES($1, $2, $3, $4) RETURNING *",
      [size, color, price, in_stock]
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

const getAllShirts = async () => {
  try {
    const allShirts = await db.any("SELECT * FROM shirts");
    return allShirts;
  } catch (err) {
    return err;
  }
};

const updateShirt = async (id, shirt) => {
  try {
    const { size, color, price, in_stock } = shirt;
    const query =
      "UPDATE shirts SET size = $1, color = $2, price = $3, in_stock = $4 WHERE id = $5 RETURNING *";
    const result = await db.one(query, [size, color, price, in_stock, id]);
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

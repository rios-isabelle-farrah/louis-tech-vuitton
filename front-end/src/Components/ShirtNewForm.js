import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";
const API = apiURL();
function ShirtNewForm() {
  let history = useHistory();
  const addShirt = async (newShirt) => {
    console.log("ABOUT TO SEND THE REQUEST");
    try {
      await axios.post(`${API}/shirts`, newShirt);
      console.log("SUCCESS, SENDING YOU TO INDEX PAGE");
      history.push(`/shirts`);
    } catch (err) {
      console.log(err);
    }
  };
  const [shirt, setShirt] = useState({
    type_of: "",
    size: "",
    color: "",
    price: "",
    in_stock: false,
  });
  const handleTextChange = (event) => {
    setShirt({ ...shirt, [event.target.id]: event.target.value });
  };
  // const handleCheckboxChange = () => {
  //   setShirt({ ...shirt, in_stock: !shirt.in_stock });
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    addShirt(shirt);
  };
  return (
    <div className="New-Form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="typeOf">Type of:</label>
        <input
          id="typeOf"
          value={shirt.typeOf}
          type="text"
          onChange={handleTextChange}
          placeholder="Type of Shirt"
          required
        />
        <label htmlFor="size">Size:</label>
        <input
          id="size"
          type="text"
          required
          value={shirt.size}
          placeholder="size"
          onChange={handleTextChange}
        />
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          type="text"
          name="color"
          value={shirt.color}
          placeholder="color"
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          name="price"
          value={shirt.price}
          placeholder="price"
          onChange={handleTextChange}
        />
        {/* <label htmlFor="in_stock">available</label>
        <input
          id="in_stock"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={shirt.in_stock}
        /> */}
        <br />
        {/* <input type="submit" /> */}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default withRouter(ShirtNewForm);

















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
      debugger;
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
  const handleCheckboxChange = () => {
    setShirt({ ...shirt, in_stock: !shirt.in_stock });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addShirt(shirt);
  };
  const goBack = () => {
    history.push("/shirts");
  };
  return (
    <div className="New-Form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="type_of">Type of:</label>
        <input
          id="type_of"
          value={shirt.type_of}
          type="text"
          onChange={handleTextChange}
          placeholder="Type of Shirt"
          required
        />
        <label htmlFor="size">Size:</label>
        <input
          id="size"
          type="text"
          value={shirt.size}
          placeholder="size"
          onChange={handleTextChange}
          required
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
        <label htmlFor="in_stock">available</label>
        <input
          id="in_stock"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={shirt.in_stock}
        />
        <br />
        <button type="submit">submit</button>
        <button onClick={goBack}>Go back</button>
      </form>
    </div>
  );
}
export default withRouter(ShirtNewForm);

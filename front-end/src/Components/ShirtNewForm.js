import axios from "axios";
import { useState } from "react";
import { ButtonGroup, FloatingLabel } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Styles/ShirtNewForm.css";

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
        {/* <label for="exampleFormControlSelect1"></label>
    <select  class="form-control form-control-lg" id="exampleFormControlSelect1"  class="form-control form-control-lg">
      <option>Type</option>
      <option value="Tank-Top">Tank-Top</option>
      <option value="Sweat-Shirt">Sweat-Shirt</option>
      <option value="Button-Up">Button-Up</option>
      <option value="Turtle-Neck">Turtle-Neck</option>
      <option value="Short-Sleeve">Short-Sleeve</option>
    </select> */}
        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select
            onChange={handleTextChange}
            required
            class="form-control form-control-lg"
            id="type_of"
            class="form-control form-control-lg"
          >
            <option>Type</option>
            <option value="Tank">Tank</option>
            <option value="Sweat-Shirt">Sweat-Shirt</option>
            <option value="Short-Sleeve">Long-Sleeve</option>
          </select>
        </div>
        <br></br>

   

        <Form.Group className="size">
          <FloatingLabel label="Size">
            <Form.Control
              id="size"
              type="text"
              value={shirt.size}
              placeholder="size"
              onChange={handleTextChange}
              required
            />
          </FloatingLabel>
        </Form.Group>
      
                <div class="form-group">
          <label for="exampleFormControlSelect1">Color</label>
          <select
            onChange={handleTextChange}
            required
            class="form-control form-control-lg"
            id="color"
            class="form-control form-control-lg"
          >
            <option>Color</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Blue">Blue</option>
          </select>
        </div>
        <br></br>

        <Form.Group className="price">
          <FloatingLabel label="Price">
            <Form.Control
              id="price"
              type="number"
              name="price"
              value={shirt.price}
              placeholder="price"
              onChange={handleTextChange}
              required
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          {/* <FloatingLabel Label="Availble" htmlFor="in_stock"> */}
          <Form.Check
            id="in_stock"
            type="checkbox"
            label="Availble"
            onChange={handleCheckboxChange}
            checked={shirt.in_stock}
            required
          />

          {/* </FloatingLabel> */}
        </Form.Group>
        <br />
        <ButtonGroup>
          <Button variant="dark" type="submit">
            Add New
          </Button>
          <Button variant="light" onClick={goBack}>
            Back
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}
export default withRouter(ShirtNewForm);

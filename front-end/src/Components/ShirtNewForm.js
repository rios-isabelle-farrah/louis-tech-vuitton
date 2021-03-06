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

  const [shirt, setShirt] = useState({
    type_of: "",
    size: "",
    color: "",
    price: "",
    in_stock: false,
  });

  const addShirt = async (newShirt) => {
    try {
      await axios.post(`${API}/shirts`, newShirt);
      goBack();
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="form-group">
          <select
            onChange={handleTextChange}
            required
            className="form-control form-control-lg"
            id="type_of"
          >
            <option>Type</option>
            <option value="Tank">Tank</option>
            <option value="Sweat-Shirt">Sweat-Shirt</option>
            <option value="Long-Sleeve">Long-Sleeve</option>
            <option value="Turtle-Neck">Turtle-Neck</option>
           
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

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1"></label>
          <select
            onChange={handleTextChange}
            required
            className="form-control form-control-lg"
            id="color"
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
        <ButtonGroup className="form-btns">
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

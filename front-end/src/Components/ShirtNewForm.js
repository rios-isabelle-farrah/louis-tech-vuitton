import axios from "axios";
import { useState } from "react";
import { ButtonGroup, FloatingLabel } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      <form className="New-Form" onSubmit={handleSubmit}>
        <Form.Group className="item">
          <FloatingLabel label="Item">
            <Form.Control
              id="type_of"
              value={shirt.type_of}
              type="text"
              onChange={handleTextChange}
              placeholder="Type of Shirt"
              required
            />
          </FloatingLabel>
        </Form.Group>
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
        <Form.Group className="color">
          <FloatingLabel label="Color" htmlFor="color">
            <Form.Control
              id="color"
              type="text"
              name="color"
              value={shirt.color}
              placeholder="color"
              onChange={handleTextChange}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="price">
          <FloatingLabel label="Price">
            <Form.Control
              id="price"
              type="number"
              name="price"
              value={shirt.price}
              placeholder="price"
              onChange={handleTextChange}
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
  );
}
export default withRouter(ShirtNewForm);

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ShirtEditForm() {
  let { id } = useParams();
  let history = useHistory();
  const API = apiURL();
  const [shirt, setShirt] = useState({
    type_of: "",
    size: "",
    color: "",
    price: "",
    in_stock: false,
  });

  const updateShirt = async (updatedShirt) => {
    try {
      await axios.put(`${API}/shirts/${id}`, updatedShirt);
      history.push(`/shirts/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleTextChange = (event) => {
    setShirt({ ...shirt, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setShirt({ ...shirt, in_stock: !shirt.in_stock });
  };

  useEffect(() => {
    axios.get(`${API}/shirts/${id}`).then(
      (response) => {
        setShirt(response.data.payload);
      },
      (error) => history.push(`/not-found`)
    );
  }, [API, history, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateShirt(shirt, id);
  };

  return (
    <div className="Edit-Form">
      <form onSubmit={handleSubmit}>
        <Form.Group className="type_of">
          <Form.Label htmlFor="type_of">Item:</Form.Label>
          <Form.Control
            id="type_of"
            value={shirt.type_of}
            type="text"
            onChange={handleTextChange}
            placeholder="type_of of Shirt"
            required
          />
        </Form.Group>

        <Form.Group className="edit_size">
          <Form.Label htmlFor="size">Size:</Form.Label>
          <Form.Control
            id="size"
            type="text"
            required
            value={shirt.size}
            placeholder="size"
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group className="edit_color">
          <Form.Label htmlFor="color">Color:</Form.Label>
          <Form.Control
            id="color"
            type="text"
            name="color"
            value={shirt.color}
            placeholder="artist"
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group className="edit_price">
          <Form.Label htmlFor="price">Price:</Form.Label>
          <Form.Control
            id="price"
            type="number"
            name="price"
            value={shirt.price}
            placeholder="price"
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Check
            htmlFor="in_stock"
            id="in_stock"
            type="checkbox"
            label="In Stock:"
            variant="dark"
            onChange={handleCheckboxChange}
            checked={shirt.in_stock}
          />
        </Form.Group>

        <br />
        <ButtonGroup>
          <Button type="submit" variant="dark">
            Submit
          </Button>
          <Button href={`/shirts/${id}`} variant="light">
            Back
          </Button>
        </ButtonGroup>
      </form>
      {/* <br></br> */}
      {/* <Link to={`/shirts/${id}`}> */}
      {/* </Link> */}
    </div>
  );
}
export default ShirtEditForm;

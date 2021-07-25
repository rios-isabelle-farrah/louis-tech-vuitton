import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams, Link } from "react-router-dom";
import ShirtColors from "./ShirtColors.js";
import { apiURL } from "../util/apiURL";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const API = apiURL();
function ShirtDetails() {
  const [shirt, setShirt] = useState([]);
  const [color, setColor] = useState("");
  const [type_of, setType_of] = useState("");
  let history = useHistory();
  const { id } = useParams();

  const deleteShirt = async () => {
    try {
      await axios.delete(`${API}/shirts/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchShirt = async () => {
    try {
      const result = await axios.get(`${API}/shirts/${id}`);
      // console.log(result);
      setShirt(result.data.payload);
      setColor(result.data.payload.color);
      setType_of(result.data.payload.type_of);
      // console.log(type_of);
    } catch (err) {
      console.log(err);
    }
  };

  const goBack = () => {
    history.push("/shirts");
  };
  useEffect(() => {
    fetchShirt();
  });

  const handleDelete = async () => {
    await deleteShirt();
    goBack();
  };

  return (
    <article>
      <Card className="shirt-show" style={{ width: '12rem'}}>
      <ShirtColors color={color} type_of={type_of}/>
        {/* <Card.Header>{type_of}</Card.Header> */}
      <Card.Body>
              <Card.Title>
              {`${type_of}`}
              </Card.Title>
                <Card.Subtitle>
                {`Color: ${color}`}
                </Card.Subtitle>
                <Card.Subtitle>
                {`Price: $${shirt.price}.00`}
                </Card.Subtitle>
                <Card.Subtitle>
                {`In Stock: ${shirt.in_stock ? "true" : "false"}`}
                </Card.Subtitle>
            </Card.Body>

      </Card>
      <ButtonGroup>
      <Link to={`/shirts/${id}/edit`}>
        <Button variant="dark">Edit</Button>
      </Link>
      <Button variant="light" onClick={goBack}>Back</Button>
      <Button className="show-button" variant="danger" onClick={handleDelete}>Delete</Button>
      </ButtonGroup>

      {/* <p>
        <b>Type:</b> {shirt.type_of}
      </p>
      <p>
        <b>Color:</b> {shirt.color}
      </p>
      <p>
        <b>Size:</b> {shirt.size}
      </p>
      <p>
        <b>Price:</b> {shirt.price}
      </p>
      <p>
        <b>In Stock:</b> {shirt.in_stock ? "true" : "false"}
      </p> */}
    </article>
  );
}

export default withRouter(ShirtDetails);

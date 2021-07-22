import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams, Link } from "react-router-dom";
import ShirtColors from "./ShirtColors.js";
import { apiURL } from "../util/apiURL";

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
      console.log(result);
      setShirt(result.data.payload);
      setColor(result.data.payload.color);
      setType_of(result.data.payload.type_of);
      console.log(type_of);
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
      {/* <ShirtColors color={color} type_of={type_of}/> */}

      <ShirtColors color={color} type_of={type_of} />

      <p>
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
      </p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={goBack}>Back</button>
      <Link to={`/shirts/${id}/edit`}>
        <button>Edit</button>
      </Link>
    </article>
  );
}

export default withRouter(ShirtDetails);

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
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
      debugger;
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
        console.log(response.data);
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
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="type_of">type of:</label>
        <input
          id="type_of"
          value={shirt.type_of}
          type="text"
          onChange={handleTextChange}
          placeholder="type_of of Shirt"
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
          placeholder="artist"
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
        <label htmlFor="in_stock">In Stock:</label>
        <input
          id="in_stock"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={shirt.in_stock}
        />
        <br />
        <input type="submit" />
      </form>
      <br></br>
      <Link to={`/shirts/${id}`}>
        <button>Go back</button>
      </Link>
    </div>
  );
}
export default ShirtEditForm;

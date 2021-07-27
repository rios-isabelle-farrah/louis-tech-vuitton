import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import "../Components/Styles/ShirtDetails.css";
import blackHoodie from "../Components/Images/blackHoodie.png";
import blueTank from "../Components/Images/blueTank.png";
import greenShort from "../Components/Images/greenShort.png";
import yellowTurtle from "../Components/Images/yellowTurtle.png";
import pinkLong from "../Components/Images/pinkLong.png";
import whiteButton from "../Components/Images/whiteButton.png";
import tankWhite from "../Components/Images/tankWhite.png";
import blackTank from "../Components/Images/blackTank.png";
 import blueLong from "../Components/Images/blueLong.png";
import longBlack from "../Components/Images/longBlack.png";
import whiteHoodie from "../Components/Images/whiteHoodie.png";
import blueHoodie from "../Components/Images/blueHoodie.png";
import blackTurtle from "../Components/Images/blackTurtle.png";
import whiteTurtle from "../Components/Images/whiteTurtle.png";
import blueTurtle from "../Components/Images/blueTurtle.png";

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
      {/* <div className="card-div"> */}

      <div className="text-shirt-info">
      {shirt.color === "Blue" && shirt.type_of === "Tank" && (
          <Card.Img
            className="shirtIcon"
            src={blueTank}
            alt="icon"
            style={{ width: '10rem', height: '14rem' }}
          />
        )}
        {shirt.color === "White" && shirt.type_of === "Tank" && (
          <Card.Img
            className="shirtIcon"
            src={tankWhite}
            alt="icon"
            style={{ width: '10rem', height: '14rem' }}
          />
        )}
        {shirt.color === "Black" && shirt.type_of === "Tank" && (
          <Card.Img
            className="shirtIcon"
            src={blackTank}
            alt="icon"
            style={{ width: '13rem', height: '14rem' }}
          />
        )}

        {shirt.color === "Green" && (
          <Card.Img
            className="shirtIcon"
            src={greenShort}
            alt="icon"
            style={{ width: '13rem', height: '14rem' }}
          />
        )}

        {shirt.color === "Black" && shirt.type_of === "Long-Sleeve" && (
          <Card.Img
            className="shirtIcon"
            src={longBlack}
            alt="icon"
            style={{ width: '13rem', height: '14rem' }}
          />
        )}
        {shirt.color === "White" && shirt.type_of === "Long-Sleeve" && (
          <Card.Img
            className="shirtIcon"
            src={whiteButton}
            alt="icon"
            style={{ width: '13rem', height: '14rem' }}
          />
        )}
        {shirt.color === "Blue" && shirt.type_of === "Long-Sleeve" && (
          <Card.Img
            className="shirtIcon"
            src={blueLong}
            alt="icon"
            style={{ width: '13rem', height: '14rem' }}
          />
        )}
        {shirt.color === "Pink" && shirt.type_of === "Long-Sleeve" && (
          <Card.Img
            className="shirtIcon"
            src={pinkLong}
            alt="icon"
            style={{ width: '13rem', height: '14rem' }}
          />
        )}

        {shirt.color === "Black" && shirt.type_of === "Turtle-Neck" && (
          <Card.Img
            className="shirtIcon"
            src={blackTurtle}
            alt="icon"
            style={{ width: '13rem', height: '14rem' }}
          />
        )}
        {shirt.color === "Yellow" && shirt.type_of === "Turtle-Neck" && (
          <Card.Img
            className="shirtIcon"
            src={yellowTurtle}
            alt="icon"
            style={{ width: '13rem', height: '14rem' }}
          />
        )}
        {shirt.color === "White" && shirt.type_of === "Turtle-Neck" && (
          <Card.Img
            className="shirtIcon"
            src={whiteTurtle}
            alt="icon"
            style={{ width: '13rem', height: '14rem' }}
          />
        )}
        {shirt.color === "Blue" && shirt.type_of === "Turtle-Neck" && (
          <Card.Img
            className="shirtIcon"
            src={blueTurtle}
            alt="icon"
            style={{ width: '13rem', height: '14rem' }}
          />
        )}

   
        {shirt.color === "Black" && shirt.type_of === "Sweat-Shirt" && (
          <Card.Img
            className="shirtIcon"
            // src={blackHoodie}
            src={blackHoodie}
            alt="icon"
             style={{ width: '13rem', height: '14rem' }}
          />
        )}

        {shirt.color === "White" && shirt.type_of === "Sweat-Shirt" && (
          <Card.Img
            className="shirtIcon"
            // src={blackHoodie}
            src={whiteHoodie}
            alt="icon"
             style={{ width: '13rem', height: '14rem' }}
          />
        )}
        {shirt.color === "Blue" && shirt.type_of === "Sweat-Shirt" && (
          <Card.Img
            className="shirtIcon"
            // src={blackHoodie}
            src={blueHoodie}
            alt="icon"
             style={{ width: '13rem', height: '14rem' }}
          />
        )}





        <div className="just-text">
          <h3> {type_of}</h3>
          {color}
          <p className="price-p"> ${shirt.price}.00</p>

          {shirt.in_stock && "Available"}
          <br></br>
        </div>
      </div>
      <ButtonGroup>
        <Link to={`/shirts/${id}/edit`}>
          <Button variant="dark">Edit</Button>
        </Link>
        <Button variant="light" onClick={goBack}>
          Back
        </Button>
        <Button className="show-button" variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </ButtonGroup>
    </article>
  );
}

export default withRouter(ShirtDetails);

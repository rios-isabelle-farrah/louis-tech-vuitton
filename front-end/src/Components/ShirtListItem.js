import { CardGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ShirtListItem.css";
import blackHoodie from "../Components/Images/blackHoodie.png";
import blueTank from "../Components/Images/blueTank.png";
import greenShort from "../Components/Images/greenShort.png";
import yellowTurtle from "../Components/Images/yellowTurtle.png";
import pinkLong from "../Components/Images/pinkLong.png";
import whiteButton from "../Components/Images/whiteButton.png";


function ShirtListItem({ shirt }) {
  return (
    <div className="shirt-details">
       <Link to={`/shirts/${shirt.id}`} className="link"> 

        
        <CardGroup /*style={{ width: '10rem', height: '14rem' }}*/>
        <Card >
        {shirt.color === "Blue" && shirt.type_of === "Tank" && (
          <Card.Img
            className="shirtIcon"
            src={blueTank}
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

        {shirt.color === "Pink" && shirt.type_of === "Long-Sleeve" && (
          <Card.Img
            className="shirtIcon"
            src={pinkLong}
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

        {shirt.color === "White" && shirt.type_of === "Button-Up" && (
          <Card.Img
            className="shirtIcon"
            src={whiteButton}
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
            src=""
            alt="icon"
             style={{ width: '13rem', height: '14rem' }}
          />
        )}
            <Card.Body>
              <Card.Title>
              {`${shirt.type_of}`}
              </Card.Title>
                <Card.Subtitle>
                {`Color: ${shirt.color}`}
                </Card.Subtitle>
                <Card.Subtitle>
                {`Price: $${shirt.price}.00`}
                </Card.Subtitle>
            </Card.Body>
          </Card>
             </CardGroup>
      </Link>
    </div>
  );
}

export default ShirtListItem;

// blue
// https://www.freeiconspng.com/thumbs/blank-t-shirt-png/blank-t-shirt-png-8.png

// pink
// https://cdn11.bigcommerce.com/s-n7dyokm269/images/stencil/1280x1280/products/291/1085/Safety_Pink_Short_Sleeve_T_Shirt_Front__12433.1529285685.png?c=2

//green
//https://www.pngkey.com/png/full/807-8075143_youth-heavy-cotton-t-shirt-mint-green-t.png

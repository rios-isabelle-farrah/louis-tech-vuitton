import { CardGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ShirtListItem.css";
import black from "./Images/Black_Turtle_Neck.png"


function ShirtListItem({ shirt }) {
  return (
    <div className="shirt-details">
      <Link to={`/shirts/${shirt.id}`} className="link">
        <CardGroup /*style={{ width: '10rem', height: '20rem' }}*/>
        <Card >
        {shirt.color === "Blue" && shirt.type_of === "Tank" && (
          <Card.Img
            className="shirtIcon"
            src="https://images.squarespace-cdn.com/content/v1/51c322cfe4b032aad705a0fc/1574713949307-XQO1SM9RSD8OHVD7N1WW/Tank-Royal.png?format=1000w"
            alt="icon"
            style={{ width: '13rem', height: '20rem' }}
          />
        )}

        {shirt.color === "Green" && (
          <Card.Img
            className="shirtIcon"
            src="https://www.pngkey.com/png/full/807-8075143_youth-heavy-cotton-t-shirt-mint-green-t.png"
            alt="icon"
            style={{ width: '13rem', height: '20rem' }}
          />
        )}

        {shirt.color === "Pink" && shirt.type_of === "Long-Sleeve" && (
          <Card.Img
            className="shirtIcon"
            src="https://jobbeedu.com/cms/wp-content/uploads/2016/11/unisex-long-sleeve-crew-dry-shirt-light-pink.png"
            alt="icon"
            style={{ width: '13rem', height: '20rem' }}
          />
        )}

        {shirt.color === "Yellow" && shirt.type_of === "Turtle-Neck" && (
          <Card.Img
            className="shirtIcon"
            src="https://www.lenahoschek.com/pub/media/catalog/product/cache/8c780148e21c4290ece7b34a361216c9/t/u/turtleneck-stanley-corn-vorne-aw1920-lena-hoschek-c-lupi-spuma-_kopie_kopie.png"
            alt="icon"
            style={{ width: '13rem', height: '20rem' }}
          />
        )}

        {shirt.color === "White" && shirt.type_of === "Button-Up" && (
          <Card.Img
            className="shirtIcon"
            src="http://cdn.shopify.com/s/files/1/0661/4009/products/white_silver_crop_dffc8a38-9376-4fd5-9f80-ae00c8387246_grande.png?v=1618243605"
            alt="icon"
            style={{ width: '13rem', height: '20rem' }}
          />
        )}

        {shirt.color === "Black" && shirt.type_of === "Sweat-Shirt" && (
          <Card.Img
            className="shirtIcon"
            // src="https://magic-custom.com/14327-large_default/jackboys-black-hoodie-sweatshirt-photo-travis-scott.jpg"
            src={black}
            alt="icon"
            style={{ width: '13rem', height: '20rem' }}
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

        {/* {shirt.color === "Blue" && shirt.type_of === "Tank" && (
          <img
            className="shirtIcon"
            src="https://images.squarespace-cdn.com/content/v1/51c322cfe4b032aad705a0fc/1574713949307-XQO1SM9RSD8OHVD7N1WW/Tank-Royal.png?format=1000w"
            alt="icon"
          ></img>
        )}

        {shirt.color === "Green" && (
          <img
            className="shirtIcon"
            src="https://www.pngkey.com/png/full/807-8075143_youth-heavy-cotton-t-shirt-mint-green-t.png"
            alt="icon"
          ></img>
        )}

        {shirt.color === "Pink" && shirt.type_of === "Long-Sleeve" && (
          <img
            className="shirtIcon"
            src="https://jobbeedu.com/cms/wp-content/uploads/2016/11/unisex-long-sleeve-crew-dry-shirt-light-pink.png"
            alt="icon"
          ></img>
        )}

        {shirt.color === "Yellow" && shirt.type_of === "Turtle-Neck" && (
          <img
            className="shirtIcon"
            src="https://www.lenahoschek.com/pub/media/catalog/product/cache/8c780148e21c4290ece7b34a361216c9/t/u/turtleneck-stanley-corn-vorne-aw1920-lena-hoschek-c-lupi-spuma-_kopie_kopie.png"
            alt="icon"
          ></img>
        )}

        {shirt.color === "White" && shirt.type_of === "Button-Up" && (
          <img
            className="shirtIcon"
            src="http://cdn.shopify.com/s/files/1/0661/4009/products/white_silver_crop_dffc8a38-9376-4fd5-9f80-ae00c8387246_grande.png?v=1618243605"
            alt="icon"
          ></img>
        )}

        {shirt.color === "Black" && shirt.type_of === "Sweat-Shirt" && (
          <img
            className="shirtIcon"
            src="https://magic-custom.com/14327-large_default/jackboys-black-hoodie-sweatshirt-photo-travis-scott.jpg"
            alt="icon"
          ></img>
        )} */}

      {/* {`Type: ${shirt.type_of}`}
      <br></br>
      {`Color: ${shirt.color}`}
      <br></br>
      {`Price: $${shirt.price}.00`} */}

      </Link>
    </div>
    //   </td>
    // </tr>
  );
}

export default ShirtListItem;

// blue
// https://www.freeiconspng.com/thumbs/blank-t-shirt-png/blank-t-shirt-png-8.png

// pink
// https://cdn11.bigcommerce.com/s-n7dyokm269/images/stencil/1280x1280/products/291/1085/Safety_Pink_Short_Sleeve_T_Shirt_Front__12433.1529285685.png?c=2

//green
//https://www.pngkey.com/png/full/807-8075143_youth-heavy-cotton-t-shirt-mint-green-t.png

import { useEffect, useState } from "react";
import ColorPick from "./ColorPick";
import Black_Turtle from "./Images/Black_Turtle_Neck.png";
import Blue_Short from "./Images/Blue_Short_Sleeve.png";
import Green_Tank from "./Images/Green_Tank_Top.png";
import Pink_Tank from "./Images/Pink_Tank_Top.png";
import White_Tank from "./Images/White_Tank_Top.png";
import Yellow_Button from "./Images/Yellow_Button_Up.png";
import Yellow_Short from "./Images/Yellow_Short_Sleeve.png";
import Yellow_Tank from "./Images/Yellow_Tank_Top.png";
// import color as props and put conditional to make button not show if color is picked
function ShirtColors({ color, type_of }) {
  const allTypes = [
    Black_Turtle,
    Blue_Short,
    // Blue_Tank_Top,
    Green_Tank,
    // Green_Turtle_Neck,
    Pink_Tank,
    White_Tank,
    Yellow_Button,
    Yellow_Short,
    Yellow_Tank,
  ];

  //   const [shirtColor, setShirtColor] = useState("");
  const [shirtType, setShirtType] = useState("");
  const [allColors, setAllColors] = useState([]);
  //  const [imageSrc, setImageSrc] = useState(false);

  const shirtDisplay = () => {
    //   let imageSrc =

    setShirtType(type_of.split("-")[0]);
    // setShirtColor(color)
    console.log("the shirt type", shirtType);
    let stringType = allTypes.map((el) => {
      return {
        theColor: el.split("/")[3].split(".")[0].split("_")[0],
        theType: el.split("/")[3].split(".")[0].split("_")[1],
      };
    });

    let colorArray = stringType.map((el) => {
      return el.theColor;
    });
    let typeArray = stringType.map((el) => {
      return el.theType;
    });
    console.log("typeArray", typeArray);
    console.log("colorArray", colorArray);
    console.log("stringTye", stringType);

    if (typeArray.includes(shirtType)) {
      console.log("yes type");
      let filteredShirtsforcolor = stringType
        .filter((el) => {
          return el.theType === shirtType;
        })
        .map((el) => {
          return el.theColor;
        });
      setAllColors(filteredShirtsforcolor);
      console.log("fil", allColors);
    }

    // console.log(color+type_of)

    console.log(shirtType);
  };

  // const changeColor = (color)=>{

  // }

  useEffect(() => {
    shirtDisplay();
  });

  return (
    <div className="colors">
      <div className="original-shirts">
        {" "}
        {color === "Blue" && shirtType === "Tank" && (
          <img
            className="shirtIcon"
            src="https://images.squarespace-cdn.com/content/v1/51c322cfe4b032aad705a0fc/1574713949307-XQO1SM9RSD8OHVD7N1WW/Tank-Royal.png?format=1000w"
            alt="icon"
          ></img>
        )}
        {color === "Green" && (
          <img
            className="shirtIcon"
            src="https://www.pngkey.com/png/full/807-8075143_youth-heavy-cotton-t-shirt-mint-green-t.png"
            alt="icon"
          ></img>
        )}
        {color === "Pink" && shirtType === "Long" && (
          <img
            className="shirtIcon"
            src="https://jobbeedu.com/cms/wp-content/uploads/2016/11/unisex-long-sleeve-crew-dry-shirt-light-pink.png"
            alt="icon"
          ></img>
        )}
        {color === "Yellow" && shirtType === "Turtle" && (
          <img
            className="shirtIcon"
            src="https://www.lenahoschek.com/pub/media/catalog/product/cache/8c780148e21c4290ece7b34a361216c9/t/u/turtleneck-stanley-corn-vorne-aw1920-lena-hoschek-c-lupi-spuma-_kopie_kopie.png"
            alt="icon"
          ></img>
        )}
        {color === "White" && shirtType === "Button" && (
          <img
            className="shirtIcon"
            src="http://cdn.shopify.com/s/files/1/0661/4009/products/white_silver_crop_dffc8a38-9376-4fd5-9f80-ae00c8387246_grande.png?v=1618243605"
            alt="icon"
          ></img>
        )}
        {color === "Black" && shirtType === "Sweat" && (
          <img
            className="shirtIcon"
            src="https://magic-custom.com/14327-large_default/jackboys-black-hoodie-sweatshirt-photo-travis-scott.jpg"
            alt="icon"
          ></img>
        )}
      </div>
      <ColorPick
        allColors={allColors}
        shirtType={shirtType}
        allTypes={allTypes}
      />
    </div>
  );
}

export default ShirtColors;

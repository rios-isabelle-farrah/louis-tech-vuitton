// import { Link } from "react-router-dom";
 import './ColorPick.css'
// import color as props and put conditional to make button not show if color is picked 
function ColorPick({allColors,changeColor,shirtType,allTypes}) {


  
  return (


    <div className="colors">
      <ul className="ul-button">
{allColors.map((el)=>{
  return <li><button className={el} colorPicked={el}> </button></li>
})}
      </ul>
      </div>

  );
}

export default ColorPick;



// blue
// https://www.freeiconspng.com/thumbs/blank-t-shirt-png/blank-t-shirt-png-8.png


// pink
// https://cdn11.bigcommerce.com/s-n7dyokm269/images/stencil/1280x1280/products/291/1085/Safety_Pink_Short_Sleeve_T_Shirt_Front__12433.1529285685.png?c=2


//green
//https://www.pngkey.com/png/full/807-8075143_youth-heavy-cotton-t-shirt-mint-green-t.png
import ShirtDetails from "../Components/ShirtDetails";

import "../Components/Styles/Show.css"

const showShirt = (theShirt)=>{
console.log(theShirt)
}



function Show() {
  return (
    <div className="Show">
      {/* <h2>Show</h2> */}




      <ShirtDetails showShirt={showShirt}/>
    </div>
  );
}

export default Show;

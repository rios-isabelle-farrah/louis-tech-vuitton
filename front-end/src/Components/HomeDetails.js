// import { Carousel, Container, Button } from "react-bootstrap";

// import BlackTurtleNeck from "./Images/Black_Turtle_Neck.png";
// import GreenTankTop from "./Images/Green_Tank_Top.png"
// import YellowButtonUp from "./Images/Yellow_Button_Up.png"
import "./HomeDetails.css"
export default function Home() {
  return (
    <div className="home-details">
      {/* <Container className="home-container">
      <Carousel className="carousel" variant="dark" style={{ width: '50rem', height: '700px' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BlackTurtleNeck}
            alt="First slide"
            width='10rem'
            height="700px"
          />
          <Carousel.Caption>
            <h3>BLACK TURTLE NECK</h3>
            <p> Luxuriously soft, it is crafted in a slim fit from certified pure merino wool.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={GreenTankTop}
            alt="Second slide"
            width='10rem'
            height="700px"
          />
  
          <Carousel.Caption>
            <h3>GREEN SUMMER TANK TOP </h3>
            <p>A closet staple revisited for the season. This tank top is cut from lightweight, comfortable cotton jersey for easy summer wear.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={YellowButtonUp}
            alt="Third slide"
            width='10rem'
            height="700px"
          />
  
          <Carousel.Caption>
            <h3>BUTTON-UP ORANGE SHIRT</h3>
            <p>
            A reinterpretation of a classic silhouette, this button-up has a modern retro feel.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
          {/* <h3>To the greatest Apparel app!</h3> */}
      {/* </Container>  */}
        {/* // <Button className="shop-button" href="/shirts" variant="dark">Shop</Button> */}

    </div>
  );
}

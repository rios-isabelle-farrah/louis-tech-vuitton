import { Carousel, Container, Button } from "react-bootstrap";

import blackTurtle from "./Images/blackTurtle.png";
import blueHoodie from "./Images/blueHoodie.png";
import greenShort from "./Images/greenShort.png";
import "./HomeDetails.css";
export default function Home() {
  return (
    <div className="home-details">
      <Container className="home-container">
        <Carousel
          className="carousel"
          variant="dark"
          style={{ width: "50rem", height: "700px" }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={blackTurtle}
              alt="First slide"
              width="10rem"
              height="700px"
            />
            <Carousel.Caption>
              <h3>BLACK TURTLE NECK</h3>
              <p>
                {" "}
                Luxuriously soft, it is crafted in a slim fit from certified
                pure merino wool.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={blueHoodie}
              alt="Second slide"
              width="10rem"
              height="700px"
            />

            <Carousel.Caption>
              <h3>BLUE FALL WEATHER HOODIE </h3>
              <p>
                A closet staple revisited for the season. This blue hoodie is cut
                from lightweight, comfortable cotton cashmere for comforting warm winter
                wear.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={greenShort}
              alt="Third slide"
              width="10rem"
              height="700px"
            />

            <Carousel.Caption>
              <h3>BUTTON-UP GREEN SHIRT</h3>
              <p>
                A reinterpretation of a classic silhouette, this button-up has a
                modern retro feel.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Button className="shop-button" href="/shirts" variant="dark">
        Shop
      </Button>
    </div>
  );
}

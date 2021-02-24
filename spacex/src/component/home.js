import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
function app() {
  return (
    <>
    <div style={{height:"calc(100vh - 64px)"}}>
<Carousel>

  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://static01.nyt.com/newsgraphics/2020/05/27/spacex-crew-dragon/assets/images/demo-1-horizon-1050.jpg?text=First slide"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Space Exploration Technologies Corp.</h3>
      <p>SpaceX is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://images.firstpost.com/wp-content/uploads/2020/02/1280px-SpaceX_Crew_Dragon_More_cropped-1.jpg?text=Second slide"
      style={{objectFit: "cover"}}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Rocket</h3>
      <p>SpaceX’s Starship spacecraft and Super Heavy rocket represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship will be the world’s most powerful launch vehicle ever developed, with the ability to carry in excess of 100 metric tonnes to Earth orbit.</p>
      <button type="button" class="btn btn-light border-secondary bg-black text-light pr-4 pl-4">
        Explore
      </button>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://www.spacex.com/static/images/backgrounds-new/Desktop_StarL19_DSC_1291.webp?text=Third slide"
      style={{objectFit: "cover"}}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Launches</h3>
      <p>The Record</p>
      <button type="button" class="btn btn-light border-secondary bg-black text-light pr-4 pl-4">
        See All
      </button>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel></div>
    </>
  );
}
export default app;

import React from "react";
import {Carousel} from "react-bootstrap";
import usePageTitle from "Hooks/usePageTitle";

import charactersBanner from "Assets/Images/charactersBanner.jpg";
import episodesBanner from "Assets/Images/episodesBanner.jpg";
import locationsBanner from "Assets/Images/locationsBanner.jpg";

function Home() {
  usePageTitle("Home");

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height: "42vw"}}
          src={charactersBanner}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Characters</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height: "42vw"}}
          src={episodesBanner}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Episodes</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height: "42vw"}}
          src={locationsBanner}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Locations</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;

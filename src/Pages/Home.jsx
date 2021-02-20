import React from "react";
import {Carousel} from "react-bootstrap";
import usePageTitle from "Hooks/usePageTitle";

import charactersBanner from "Assets/Images/charactersBanner.jpg";
import episodesBanner from "Assets/Images/episodesBanner.jpg";
import locationsBanner from "Assets/Images/locationsBanner.jpg";

import styles from "./Home.module.scss";

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
        <Carousel.Caption className={`${styles.txtBg}`}>
          <h3>Rick And Morty</h3>
          <p>
            <a href="https://rickandmortyapi.com/" target="_blank">See the original API</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height: "42vw"}}
          src={episodesBanner}
          alt="Third slide"
        />

        <Carousel.Caption className={`${styles.txtBg}`}>
          <h3>Rick And Morty</h3>
          <p>
            <a href="https://rickandmortyapi.com/" target="_blank">See the original API</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height: "42vw"}}
          src={locationsBanner}
          alt="Third slide"
        />

        <Carousel.Caption className={`${styles.txtBg}`}>
          <h3>Rick And Morty</h3>
          <p>
            <a href="https://rickandmortyapi.com/" target="_blank">See the original API</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;

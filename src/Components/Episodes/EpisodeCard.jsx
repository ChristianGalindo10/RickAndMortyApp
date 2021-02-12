import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import styles from "./EpisodeCard.module.scss";

import seasonOne from "Assets/Images/season1.png";
import seasonTwo from "Assets/Images/season2.png";
import seasonThree from "Assets/Images/season3.png";
import seasonFour from "Assets/Images/season4.jpg";

function EpisodeCard({ id, name, air_date, episode, characters = {} }) {
    var episodeName = episode.substr(1,2);
  return (
    <Card className="text-white">
      {episodeName == "01" && (
        <Card.Img
          className={`${styles.cardImg}`}
          src={seasonOne}
          alt="Card image"
        />
      )}
      {episodeName == "02" && (
        <Card.Img
          className={`${styles.cardImg}`}
          src={seasonTwo}
          alt="Card image"
        />
      )}
      {episodeName == "03" && (
        <Card.Img
          className={`${styles.cardImg}`}
          src={seasonThree}
          alt="Card image"
        />
      )}
      {episodeName == "04" && (
        <Card.Img
          className={`${styles.cardImg}`}
          src={seasonFour}
          alt="Card image"
        />
      )}
      <Card.ImgOverlay className={`${styles.cardBody}`}>
        <br></br>
        <Card.Title className={`${styles.cardTitle}`}>{name}</Card.Title>
        <Card.Text className={`${styles.cardTitle}`}>{episode}</Card.Text>
        <Card.Text>
          Air Date: {air_date}
        </Card.Text>
        <Button variant="secondary" as={Link} to={`/characters/${id}`} className={`${styles.cardButton}`}>
          Ver personajes
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default EpisodeCard;
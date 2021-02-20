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
      <Card.Img
          className={`${styles.cardImg}`}
          src={srcImage(episodeName)}
          alt="Card image"
        />
      <Card.ImgOverlay className={`${styles.cardBody}`}>
        <br></br>
        <Card.Title className={`${styles.cardTitle}`}>{name}</Card.Title>
        <Card.Text className={`${styles.cardTitle}`}>{episode}</Card.Text>
        <Card.Text>
          Air Date: {air_date}
        </Card.Text>
        <Button variant="info" as={Link} to={`/episodes/${id}`} className={`${styles.cardButton}`}>
          See Characters
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}

function srcImage(episodeName){
  switch (episodeName) {
    case "01":
      return seasonOne;
      break;
    case "02":
      return seasonTwo;
      break;
    case "03":
      return seasonThree;
      break;
    case "04":
        return seasonFour;
        break;  
    default:
      break;
  }
}

export default EpisodeCard;
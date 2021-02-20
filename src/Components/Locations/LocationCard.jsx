import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import styles from "./LocationCard.module.scss";

import locationImg from "Assets/Images/location.jpg";

function LocationCard({ id, name, type, dimension, residents = {} }) {
  return (
    <Card className={`${styles.cardContainer} text-white`}>
      <Card.Img
          className={`${styles.cardImg}`}
          src={locationImg}
          alt="Card image"
        />
      <Card.ImgOverlay className={`${styles.cardBody}`}>
        <Card.Title className={`${styles.cardTitle}`}>{name}</Card.Title>
        <Card.Text>Type: {type}</Card.Text>
        <Card.Text>
          Dimension: {dimension}
        </Card.Text>
        <Button variant="info" as={Link} to={`/locations/${id}`} className={`${styles.cardButton}`}>
          Ver residentes
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default LocationCard;
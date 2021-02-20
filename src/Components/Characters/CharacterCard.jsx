import React from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styles from './CharacterCard.module.scss'

function CharacterCard({id, name, status, species, gender, image, origin = {} }) {
  return(
  <Card bg="info" text="white" className="mb-2">
    {<Card.Img variant="top" src={image} alt={name} title={name} />}
    <Card.Header>
      {name} ({status})
    </Card.Header>
    <Card.Body>
      <ul>
        <li>Species: {species}</li>
        <li>Gender: {gender}</li>
        <li>Origin: {origin.name}</li>
      </ul>
      <Button variant="dark" as={Link} to={`/characters/${id}`}>
          See Details
        </Button>
    </Card.Body>
  </Card>
  );
}

export default CharacterCard;
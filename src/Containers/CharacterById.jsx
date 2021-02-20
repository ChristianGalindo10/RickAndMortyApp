import React from "react";
import { Link } from 'react-router-dom';
import useFetch from "Hooks/useFetch";
import Episodes from 'Containers/Episodes';
import { getEndNumber } from "../Utils/URLTools";
import { getCharacterById } from "Utils/Requester";
import NotFound from "Pages/NotFound";
import {Card} from 'react-bootstrap';
import styles from './CharacterById.module.scss'

function CharacterById({ id }) {
  const { data, loading, error } = useFetch(() => getCharacterById({ id }), [
    id,
  ]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <NotFound />
      ) : (
        <>
        <h1>Character Details</h1>
          <Card bg="primary" text="white" className={`${styles.cardRow} mb-2`}>
            <div className={`${styles.cardColumn}`}>
            <Card.Img variant="top" src={data.image} alt={name} title={name} />
            </div>
            <div className={`${styles.cardColumn}`}>
            <Card.Header>
              {data.name} ({data.status})
            </Card.Header>
            <Card.Body>
              <ul>
                <li>Species: {data.species}</li>
                {data.type != "" && <li>Type: {data.type}</li>}
                <li>Gender: {data.gender}</li>
                <li>Origin: {data.origin.name}</li>
                <li>Location:<Link to={`/locations/${getEndNumber(data.location.url)}`} activeClassName="active">{data.location.name}</Link></li>
              </ul>
            </Card.Body>
            </div>
          </Card>
          <h2>List of episodes</h2>
          <Episodes ids={data.episode.map(getEndNumber).join(',')}/>
          </>
      )}
    </>
  );
}
export default CharacterById;

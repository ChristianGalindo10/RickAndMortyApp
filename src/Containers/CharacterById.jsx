import React from "react";

import useFetch from "Hooks/useFetch";

import { getCharacterById } from "Utils/Requester";

function CharacterById({ id }) {
  const { data, loading, error } = useFetch(() => getCharacterById({ id }), [
    id,
  ]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <div>
          <img src={data.image} />
          <h1>Name: {data.name}</h1>
          <h1>Status: {data.status}</h1>
          <h1>Species: {data.species}</h1>
          {data.type != "" && <h1>Type: {data.type}</h1>}
          <h1>Gender: {data.gender}</h1>
          <h1>Origin: {data.origin.name}</h1>
          <h1>Episode:</h1>
          <ul>
            {data.episode.map((value, index) => {
              return <li key={index}>{value.split()}</li>;
            })}
          </ul>
          {<h1>Location: {data.location.name}</h1>}
        </div>
      )}
    </>
  );
}
export default CharacterById;

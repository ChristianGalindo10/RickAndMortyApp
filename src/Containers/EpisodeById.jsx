import React from "react";

import useFetch from "Hooks/useFetch";

import { getEpisodeById } from "Utils/Requester";
import { getEndNumber } from "../Utils/URLTools";
import Characters from 'Containers/Characters';
import NotFound from "Pages/NotFound";

function EpisodeById({ id }) {
  const { data, loading, error } = useFetch(() => getEpisodeById({ id }), [
    id,
  ]
  );
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <NotFound />
      ) : (
        <>
          <h1>{data.name} ({data.episode})</h1>
          <h2>Air Date: {data.air_date}</h2>
          <h2>List of characters</h2>
          <Characters ids={data.characters.map(getEndNumber).join(',')}/>
        </>
      )}
    </>
  );
}

export default EpisodeById;

import React from "react";

import useFetch from "Hooks/useFetch";

import { getLocationById } from "Utils/Requester";
import { getEndNumber } from "../Utils/URLTools";
import Characters from 'Containers/Characters';
import NotFound from "Pages/NotFound";

function LocationById({id}) {
  const { data, loading, error } = useFetch(() => getLocationById({ id }), [
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
          <h1>{data.name}</h1>
          <h2>Type: {data.type}</h2>
          <h2>Dimension: {data.dimension}</h2>
          <h2>Residents:</h2>
          {data.residents.length!=0 ? (<Characters ids={data.residents.map(getEndNumber).join(',')}/>):(<p>No residents</p>) }
        </>
      )}
    </>
  );
}
export default LocationById;

import React, { useState } from "react";

import ListGrid from "Components/Shared/ListGrid";
import PaginationBar from "Components/Shared/PaginationBar";

import CharacterFilters from "Components/Characters/CharacterFilters";
import CharacterCard from "Components/Characters/CharacterCard";

import useFormControl from "Hooks/useFormControl";
import useFetch from "Hooks/useFetch";

import { getCharacters } from "Utils/Requester";
import { getCharactersByIds } from "Utils/Requester";
import Loading from "Components/Shared/Loading";
import NotFound from "Pages/NotFound";

function Characters({ ids }) {
  // Esta es la sección de la variable de estado Page y sus funciones
  const [page, setPage] = useState(1);
  const [filters, handleChange, handleSubmit] = useFormControl({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  const { data, loading, error, reFetch } = useFetch(
    () =>
      !ids ? getCharacters({ page, ...filters }) : getCharactersByIds(ids),
    [page] // Dependencias, al cambiar la variable de estado "page", se vuelve a hacer una nueva petición
  );

  const resetPage = () => {
    // Cambiar la viariable de estado "page"
    if (page === 1) {
      reFetch();
    } else {
      setPage(1);
    }
  };

  return (
    <>
      {!ids && (
        <>
          <CharacterFilters
            readOnly={loading}
            inputs={filters}
            onChange={handleChange}
            onSubmit={handleSubmit(resetPage)}
          />
          <PaginationBar
            readOnly={loading}
            current={page}
            max={!(loading || error) ? +data.info.pages : 1}
            onChangePage={setPage}
          />
        </>
      )}
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound />
      ) : Array.isArray(data) ? (
        <ListGrid>
          {data.map((item) => (
            <CharacterCard key={item.id} {...item} />
          ))}
        </ListGrid>
      ) : data.hasOwnProperty("results") ? (
        <ListGrid>
          {data.results.map((item) => (
            <CharacterCard key={item.id} {...item} />
          ))}
        </ListGrid>
      ) : (
      <ListGrid>
          <CharacterCard key={data.id} {...data} />
        </ListGrid>)}
    </>
  );
}
export default Characters;

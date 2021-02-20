import React, { useState } from 'react';
import ListGrid from 'Components/Shared/ListGrid';
import PaginationBar from 'Components/Shared/PaginationBar';

import EpisodeFilters from 'Components/Episodes/EpisodeFilters';
import EpisodeCard from 'Components/Episodes/EpisodeCard';

import useFormControl from 'Hooks/useFormControl';
import useFetch from 'Hooks/useFetch';

import { getEpisodes } from 'Utils/Requester';
import { getEpisodesByIds } from "Utils/Requester";
import Loading from 'Components/Shared/Loading';
import NotFound from "Pages/NotFound";


function Episodes({ids}) {
  // Esta es la sección de la variable de estado Page y sus funciones
  const [page, setPage] = useState(1);
  const [filters, handleChange, handleSubmit] = useFormControl({
    name: '',
    episode: '',
  });
  const { data, loading, error, reFetch } = useFetch(
    () => !ids ? getEpisodes({ page, ...filters }) : getEpisodesByIds(ids),
    [page] // Dependencias, al cambiar la variable de estado "page", se vuelve a hacer una nueva petición
  );

  const resetPage = () => {
    if (page === 1) {
      reFetch();
    } else {
      setPage(1);
    }
  };

  return (
    <>
      {!ids && (<><EpisodeFilters
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
      /></>)}
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound />
      ) : Array.isArray(data) ? (
        <ListGrid>
          {data.map((item) => (
            <EpisodeCard key={item.id} {...item} />
          ))}
        </ListGrid>
      ) : data.hasOwnProperty("results") ? (
        <ListGrid>
          {data.results.map((item) => (
            <EpisodeCard key={item.id} {...item} />
          ))}
        </ListGrid>
      ) : (
      <ListGrid>
          <EpisodeCard key={data.id} {...data} />
        </ListGrid>)
      }
    </>
  );
}
export default Episodes;
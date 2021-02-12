import React, { useState } from 'react';
import ListGrid from 'Components/Shared/ListGrid';
import PaginationBar from 'Components/Shared/PaginationBar';

import LocationFilters from 'Components/Locations/LocationFilters';
import LocationCard from 'Components/Locations/LocationCard';

import useFormControl from 'Hooks/useFormControl';
import useFetch from 'Hooks/useFetch';

import { getLocations } from 'Utils/Requester';
import Loading from 'Components/Shared/Loading';


function Episodes() {
  // Esta es la sección de la variable de estado Page y sus funciones
  const [page, setPage] = useState(1);
  const [click, setClick] = useState(true);
  const [filters, handleChange, handleSubmit] = useFormControl({
    name: '',
    type: '',
    dimension: '',
  });
  const { data, loading, error } = useFetch(
    () => getLocations({ page, ...filters }),
    [click,page] // Dependencias, al cambiar la variable de estado "page", se vuelve a hacer una nueva petición
  );

  const resetPage = () => {
    setPage(1); // Cambiar la viariable de estado "page"
    setClick(!click);
  };

  return (
    <>
      <LocationFilters
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
      {loading ? (
        <Loading />
      ) : error ? (
        <p>Ha ocurrido un error ({error.message})</p>
      ) : (
        <ListGrid>
          {data.results.map(item => (
            <LocationCard key={item.id} {...item} />
          ))}
        </ListGrid>
      )}
    </>
  );
}
export default Episodes;
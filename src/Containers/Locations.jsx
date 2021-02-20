import React, { useState } from 'react';
import ListGrid from 'Components/Shared/ListGrid';
import PaginationBar from 'Components/Shared/PaginationBar';

import LocationFilters from 'Components/Locations/LocationFilters';
import LocationCard from 'Components/Locations/LocationCard';

import useFormControl from 'Hooks/useFormControl';
import useFetch from 'Hooks/useFetch';

import { getLocations } from 'Utils/Requester';
import Loading from 'Components/Shared/Loading';
import NotFound from "Pages/NotFound";


function Locations() {
  // Esta es la sección de la variable de estado Page y sus funciones
  const [page, setPage] = useState(1);
  const [filters, handleChange, handleSubmit] = useFormControl({
    name: '',
    type: '',
    dimension: '',
  });
  const { data, loading, error, reFetch } = useFetch(
    () => getLocations({ page, ...filters }),
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
        <NotFound />
      ) : (
        <ListGrid>
          {data.results.map((item) => (
            <LocationCard key={item.id} {...item} />
          ))}
        </ListGrid>
      ) 
      }
    </>
  );
}
export default Locations;
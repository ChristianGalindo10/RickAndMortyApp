import React from 'react';
import { useParams } from 'react-router-dom';

import usePageTitle from 'Hooks/usePageTitle';
import LocationById from '../Containers/LocationById';

function LocationByIdPage() {
  const { locationId } = useParams();
  usePageTitle('Location Detail');

  return (
    <section className="container py-3">
      <LocationById id={locationId} />
    </section>
  );
}

export default LocationByIdPage;
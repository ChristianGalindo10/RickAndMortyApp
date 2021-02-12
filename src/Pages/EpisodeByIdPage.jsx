import React from 'react';
import { useParams } from 'react-router-dom';

import usePageTitle from 'Hooks/usePageTitle';

function EpisodeByIdPage() {
  const { episodeId } = useParams();
  usePageTitle('Episode Detail');

  return (
    <section className="container py-3">
      {/* <LocationById id={locationId} /> */}
    </section>
  );
}

export default EpisodeByIdPage;
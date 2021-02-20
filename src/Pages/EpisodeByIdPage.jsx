import React from 'react';
import { useParams } from 'react-router-dom';

import usePageTitle from 'Hooks/usePageTitle';
import EpisodeById from '../Containers/EpisodeById';

function EpisodeByIdPage() {
  const { episodeId } = useParams();
  usePageTitle('Episode Detail');

  return (
    <section className="container py-3">
      <EpisodeById id={episodeId} />
    </section>
  );
}

export default EpisodeByIdPage;
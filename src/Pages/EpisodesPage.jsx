import React from 'react';
import usePageTitle from 'Hooks/usePageTitle';

import Episodes from 'Containers/Episodes';

function EpisodesPage() {
  usePageTitle('Episodes');

  return (
    <section className="container py-3">
      <h3 className="text-center">All Episodes</h3>
      <Episodes />
    </section>
  );
}

export default EpisodesPage;
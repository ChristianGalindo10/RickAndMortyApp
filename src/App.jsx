import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from 'Components/Shared/Layout';

import Home from 'Pages/Home';
import CharactersPage from 'Pages/CharactersPage';
import CharacterByIdPage from 'Pages/CharacterByIdPage';
import LocationsPage from 'Pages/LocationsPage';
import LocationByIdPage from 'Pages/LocationByIdPage.jsx';
import EpisodesPage from 'Pages/EpisodesPage';
import EpisodeByIdPage from 'Pages/EpisodeByIdPage.jsx';
import NotFound from 'Pages/NotFound';

import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={CharactersPage} />
          <Route
            path="/characters/:characterId"
            component={CharacterByIdPage}
          />
          <Route exact path="/locations" component={LocationsPage} />
          <Route path="/locations/:locationId" component={LocationByIdPage} />
          <Route exact path="/episodes" component={EpisodesPage} />
          <Route path="/episodes/:episodeId" component={EpisodeByIdPage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
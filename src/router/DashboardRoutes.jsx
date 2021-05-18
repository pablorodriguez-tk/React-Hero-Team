import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { HeroDetailScreen } from '../components/hero/HeroDetailScreen';

import { HeroScreen } from '../components/hero/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/heroteam" component={HeroScreen} />
          <Route exact path="/hero/:heroeId" component={HeroDetailScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/heroteam" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;

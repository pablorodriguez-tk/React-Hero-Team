import React from 'react';

import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { HeroDetailScreen } from '../components/hero/HeroDetailScreen';
import { HeroScreen } from '../components/hero/HeroScreen';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const auth = true; //TODO:crear estado para verificar autenticacion
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={auth} //TODO:crear estado para verificar autenticacion
          />
          <PrivateRoute
            exact
            path="/"
            component={HeroScreen}
            isAuthenticated={auth} //TODO:crear estado para verificar autenticacion
          />
          <PrivateRoute
            exact
            path="/hero/:HeroId"
            component={HeroDetailScreen}
            isAuthenticated={auth} //TODO:crear estado para verificar autenticacion
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const auth = false; //TODO:crear estado para verificar autenticacion
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
            path="/"
            component={DashboardRoutes}
            isAuthenticated={auth} //TODO:crear estado para verificar autenticacion
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

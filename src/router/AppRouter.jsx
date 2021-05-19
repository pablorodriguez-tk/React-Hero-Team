import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={isLoggedIn}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

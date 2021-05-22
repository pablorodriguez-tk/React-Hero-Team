import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { startLogout } from '../actions/auth';

const AppRouter = () => {
  const dispatch = useDispatch();
  let token = localStorage.getItem('token');
  useSelector((state) => state.auth);

  useEffect(() => {
    // if user have no token on reload page, start logout immediately
    if (token === null) {
      dispatch(startLogout());
    }
  }, [dispatch, token]);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={!!token}
          />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={!!token}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LoginScreen } from '../pages/auth/LoginScreen';
import { startLogout } from '../state/action-creators/auth';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const dispatch = useDispatch();
  let token = localStorage.getItem('token');
  const { isLoggedIn } = useSelector((state) => state.auth);

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

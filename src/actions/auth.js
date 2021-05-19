import { getToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const token = await getToken(email, password);
    if (token) {
      localStorage.setItem('token', token);
      dispatch(login(email));
    }
  };
};

const login = (email) => ({
  type: types.authLogin,
  payload: {
    email,
  },
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({
  type: types.authLogout,
});

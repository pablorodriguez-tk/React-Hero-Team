import { loginWithEmailAndPassword } from '../helpers/fetch';
import { types } from '../types/types';

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    const { data } = await loginWithEmailAndPassword(email, password);
    const { token } = data;
    if (token) {
      localStorage.setItem('token', token);
      dispatch(login(email));
    }
  };
};

export const login = (email) => ({
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

export const logout = () => ({
  type: types.authLogout,
});

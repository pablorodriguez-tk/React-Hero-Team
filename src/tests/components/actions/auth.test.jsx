import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  login,
  logout,
  startLogout,
} from '../../../state/action-creators/auth';
import { types } from '../../../state/action-types/types';

axios.defaults.adapter = require('axios/lib/adapters/http');
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({ auth: { isLoggedIn: true, email: 'test@test.com' } });

describe('Test on Auth actions', () => {
  test('Should work all actions', async () => {
    const loginAction = login('test@test.com');
    const logoutAction = logout();

    expect(loginAction).toEqual({
      type: types.authLogin,
      payload: { email: 'test@test.com' },
    });

    expect(logoutAction).toEqual({
      type: types.authLogout,
    });

    await store.dispatch(startLogout());
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: types.authLogout });
    expect(actions[1]).toEqual({ type: types.HeroLogout });
  });
});

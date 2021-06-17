import { types } from '../../../state/action-types/types';
import { authReducer } from '../../../state/reducers/authReducer';

describe('Test on authReducer', () => {
  test('Should return initial state', () => {
    const state = authReducer({ isLoggedIn: false }, {});
    expect(state).toEqual({ isLoggedIn: false });
  });
  test('Should authenticate', () => {
    const action = {
      type: types.authLogin,
      payload: { email: 'test@test.com' },
    };
    const state = authReducer({ isLoggedIn: false }, action);
    expect(state).toEqual({ isLoggedIn: true, email: 'test@test.com' });
  });

  test('Should to logout', () => {
    const action = {
      type: types.authLogout,
    };
    const state = authReducer(
      { isLoggedIn: true, email: 'test@test.com' },
      action
    );
    expect(state).toEqual({ isLoggedIn: false });
  });
});

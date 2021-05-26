import { types } from '../../../types/types';
import { login, logout } from '../../../actions/auth';
describe('Test on Auth actions', () => {
  test('Should work all actions', () => {
    const loginAction = login('test@test.com');
    const logoutAction = logout();

    expect(loginAction).toEqual({
      type: types.authLogin,
      payload: { email: 'test@test.com' },
    });

    expect(logoutAction).toEqual({
      type: types.authLogout,
    });
  });
});

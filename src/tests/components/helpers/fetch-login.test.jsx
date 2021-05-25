import { loginWithEmailAndPassword } from '../../../helpers/fetch';
import '@testing-library/jest-dom/extend-expect';
import { Alert } from '../../../components/Alert/Alert';

jest.mock('../../../components/Alert/Alert', () => ({
  Alert: jest.fn(),
}));

describe('Test on Fetch Helper', () => {
  test('loginWithEmailAndPassword function should work', async () => {
    const resp = await loginWithEmailAndPassword(
      'challenge@alkemy.org',
      'react'
    );
    expect(resp.status).toBe(200);
  });
  test('loginWithEmailAndPassword function should show alert message', async () => {
    await loginWithEmailAndPassword('challenge@alkemy.org', 'badpassword');
    expect(Alert).toHaveBeenCalledWith(
      'Error',
      'Invalid email or password',
      'error'
    );
  });
});

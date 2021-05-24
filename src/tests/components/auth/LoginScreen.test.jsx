import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, cleanup, waitFor } from '@testing-library/react';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { startLogin } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
  startLogin: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initState = {
  auth: {
    isLoggedIn: false,
  },
  heroes: {
    heroTeam: [],
  },
  _persist: {
    version: -1,
    rehydrated: true,
  },
};

const store = mockStore(initState);
store.dispatch = jest.fn();

afterEach(cleanup);

describe('Test on <LoginScreen/>', () => {
  test('Should have te initial values on each input', () => {
    const wrapper = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
    expect(wrapper.getByPlaceholderText(/email/i)).toHaveValue(
      'challenge@alkemy.org'
    );
    expect(wrapper.getByPlaceholderText(/password/i)).toHaveValue('react');
  });

  test('Should trigger startLogin function', async () => {
    const wrapper = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
    const loginButton = wrapper.getByRole('button');
    fireEvent.click(loginButton);

    await waitFor(() =>
      expect(startLogin).toHaveBeenCalledWith({
        email: 'challenge@alkemy.org',
        password: 'react',
      })
    );
  });

  test('Should change input values', async () => {
    const wrapper = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );

    const emailInput = wrapper.getByPlaceholderText(/email/i);
    const passwordInput = wrapper.getByPlaceholderText(/password/i);

    fireEvent.change(emailInput, {
      target: { value: 'test@test.com', name: 'email' },
    });

    fireEvent.change(passwordInput, {
      target: { value: 'anotherpassword', name: 'password' },
    });

    await waitFor(() => expect(emailInput.value).toBe('test@test.com'));
    await waitFor(() => expect(passwordInput.value).toBe('anotherpassword'));
  });

  test('Should show email and password error, and login button has to be disabled', async () => {
    const wrapper = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );

    const emailInput = wrapper.getByPlaceholderText(/email/i);
    const passwordInput = wrapper.getByPlaceholderText(/password/i);
    const loginButton = wrapper.getByRole('button');

    fireEvent.change(emailInput, {
      target: { value: 'test-test.com', name: 'email' },
    });

    fireEvent.blur(emailInput);

    fireEvent.change(passwordInput, {
      target: { value: 'j', name: 'password' },
    });

    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(loginButton).toBeDisabled();
    });

    const emailError = await wrapper.findByTestId('email-error');
    const passwordError = await wrapper.findByTestId('password-error');

    expect(emailError).not.toBeNull();
    expect(passwordError).not.toBeNull();
  });
});

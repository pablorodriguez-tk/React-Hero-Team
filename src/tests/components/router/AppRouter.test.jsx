import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AppRouter from '../../../router/AppRouter';
import { MemoryRouter } from 'react-router';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test on <AppRouter/>', () => {
  test('Should to show login screen if user is not authenticated', async () => {
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

    const wrapper = render(
      <MemoryRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );

    const loginPageTitle = await wrapper.findByTestId('loginScreen');

    await waitFor(() => {
      expect(loginPageTitle).toBeInTheDocument();
    });

    expect(wrapper).toMatchSnapshot();
  });

  test('Should to show Hero screen if user is authenticated', async () => {
    const initState = {
      auth: {
        isLoggedIn: true,
        email: 'challenge@alkemy.org',
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

    const wrapper = render(
      <MemoryRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );

    const heroPageTitle = await wrapper.findByTestId('heroScreen');

    await waitFor(() => {
      expect(heroPageTitle).toBeInTheDocument();
    });
    expect(wrapper).toMatchSnapshot();
  });
});

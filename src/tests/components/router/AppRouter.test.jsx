import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AppRouter from '../../../router/AppRouter';
import { MemoryRouter } from 'react-router';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test on <AppRouter/>', () => {
  test('Should to show login screen if user is not authenticated', () => {
    const initState = {
      auth: {
        isLoggedIn: false,
      },
      heroes: {
        heroSearch: [],
        heroTeam: [],
        HeroFetch: [],
      },
      _persist: {
        version: -1,
        rehydrated: true,
      },
    };

    const store = mockStore(initState);
    store.dispatch = jest.fn();

    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });

  test('Should to show Hero screen if user is authenticated', () => {
    const initState = {
      auth: {
        isLoggedIn: true,
        email: 'challenge@alkemy.org',
      },
      heroes: {
        heroSearch: [],
        heroTeam: [],
        HeroFetch: [],
      },
      _persist: {
        version: -1,
        rehydrated: true,
      },
    };

    const store = mockStore(initState);
    store.dispatch = jest.fn();

    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});

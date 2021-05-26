import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import DashboardRoutes from '../../router/DashboardRoutes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Tests on DashboardRoutes', () => {
  test('Should be displayed correctly', () => {
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
      <Provider store={store}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </Provider>
    );

    const logout = wrapper.queryByText('Logout');
    expect(logout).toBeInTheDocument();
  });
});

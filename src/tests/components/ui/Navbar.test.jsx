import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import { Navbar } from '../../../components/ui/Navbar';
import { startLogout } from '../../../actions/auth';
import { types } from '../../../types/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

let store = mockStore(initState);

store.dispatch = jest.fn();

describe('Test on <Navbar/>', () => {
  beforeEach(() => jest.clearAllMocks());

  test('Should be displayed correctly', () => {
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    const logout = wrapper.queryByText('Logout');
    expect(logout).toBeInTheDocument();
  });

  test('Should call logout and use history', () => {
    const initState = {};
    store = mockStore(initState);
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    // To see problem
    const expectedActions = [
      {
        type: types.authLogout,
      },
      {
        type: types.HeroLogout,
      },
      {
        type: types.authLogout,
      },
      {
        type: types.HeroLogout,
      },
    ];

    fireEvent.click(wrapper.getByTestId('logoutButton'));
    store.dispatch(startLogout());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

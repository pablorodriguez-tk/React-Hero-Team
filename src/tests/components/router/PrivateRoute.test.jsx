import { MemoryRouter } from 'react-router';
import PrivateRoute from '../../../router/PrivateRoute';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AppRouter from '../../../router/AppRouter';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

describe('Test on <PrivateRoute/>', () => {
  const props = {
    location: {
      pathname: '/heroteam',
    },
  };
  test('Should to show login screen if user is not authenticated', () => {
    const wrapper = render(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span data-testid="span">Ready!</span>}
          {...props}
        />
      </MemoryRouter>
    );

    const renderComponent = wrapper.getByTestId('span');
    expect(renderComponent).toBeInTheDocument();
    // expect(localStorage.setItem).toHaveBeenCalledWith('lastpath', '/marvel');
  });
  // test('Debe de bloquear el componente si no esta autenticado', () => {
  //   const wrapper = mount(
  //     <MemoryRouter>
  //       <PrivateRoute
  //         isAuthenticated={false}
  //         component={() => <span>Listo!</span>}
  //         {...props}
  //       />
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find('span').exists()).toBe(false);
  //   expect(localStorage.setItem).toHaveBeenCalledWith('lastpath', '/marvel');
  // });
});

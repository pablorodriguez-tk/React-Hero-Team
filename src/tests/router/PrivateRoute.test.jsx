import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import PrivateRoute from '../../router/PrivateRoute';

describe('Tests on <PrivateRoute/>', () => {
  const props = {
    location: { pathname: '/search' },
  };
  test('Should to show component if is authenticated', () => {
    const wrapper = render(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Testing</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.getByText('Testing')).toBeTruthy();
  });

  test('Should to block component if is not authenticated', () => {
    const wrapper = render(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>Testing</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.queryByText('Testing')).toBeNull();
  });
});

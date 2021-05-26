import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import PublicRoute from '../../router/PublicRoute';

describe('Tests on <PublicRoute/>', () => {
  const props = {
    location: { pathname: '/' },
  };
  test('Should to show component if is authenticated', () => {
    const wrapper = render(
      <MemoryRouter>
        <PublicRoute
          isAuthenticated={true}
          component={() => <span>Login</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.queryByText('Login')).toBeNull();
  });

  test('Should to block component if is not authenticated', () => {
    const wrapper = render(
      <MemoryRouter>
        <PublicRoute
          isAuthenticated={false}
          component={() => <span>Login</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.getByText('Login')).toBeTruthy();
  });
});

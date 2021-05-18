import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';

function HeroTeamApp() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default HeroTeamApp;

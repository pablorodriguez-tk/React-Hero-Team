import { searchHero } from '../helpers/fetch';
import { types } from '../types/types';

export const startSearch = (query) => {
  return async (dispatch) => {
    const data = await searchHero(query);
    const heroes = data;
    if (heroes) {
      localStorage.setItem('heroes', JSON.stringify(heroes));
      dispatch(search(heroes));
    }
  };
};

const search = (heroSearch) => ({
  type: types.heroSearch,
  payload: heroSearch,
});

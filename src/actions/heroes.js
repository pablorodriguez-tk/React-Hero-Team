import { searchHero, getHeroById } from '../helpers/fetch';
import { types } from '../types/types';

export const startSearch = (query) => {
  return async (dispatch) => {
    const data = await searchHero(query);
    const heroes = data;
    console.log(heroes);
    if (heroes) {
      dispatch(search(heroes));
    }
  };
};

const search = (heroSearch) => ({
  type: types.heroSearch,
  payload: heroSearch,
});

export const HeroAdd = ({
  id,
  name,
  powerstats,
  biography,
  appearance,
  work,
  connections,
  image,
}) => ({
  type: types.heroAdd,
  payload: {
    id,
    name,
    powerstats,
    biography,
    appearance,
    work,
    connections,
    image,
  },
});

export const HeroLogout = () => ({
  type: types.HeroLogout,
});

export const startGetHeroesById = (id) => {
  return async (dispatch) => {
    const data = await getHeroById(id);
    console.log(data);
    if (data) {
      dispatch(getHeroesById(data));
    }
  };
};

const getHeroesById = (data) => ({
  type: types.HeroGetById,
  payload: { data },
});

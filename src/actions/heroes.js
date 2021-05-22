import { searchHero, getHeroById } from '../helpers/fetch';
import { types } from '../types/types';

export const startSearch = (query) => {
  return async (dispatch) => {
    const data = await searchHero(query);
    const heroes = data;

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
    try {
      const data = await getHeroById(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const HeroId = (id) => ({
  type: types.HeroId,
  payload: id,
});

export const heroFetch = (data) => ({
  type: types.HeroFetch,
  payload: data,
});

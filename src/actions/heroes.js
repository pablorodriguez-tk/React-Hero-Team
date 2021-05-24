import { getHeroById } from '../helpers/fetch';
import { types } from '../types/types';

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

export const heroFetch = (data) => ({
  type: types.HeroFetch,
  payload: data,
});

export const heroDelete = (id) => ({
  type: types.HeroDelete,
  payload: id,
});

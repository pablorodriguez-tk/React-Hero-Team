import { types } from '../action-types/types';

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

export const heroDelete = (id) => ({
  type: types.HeroDelete,
  payload: id,
});

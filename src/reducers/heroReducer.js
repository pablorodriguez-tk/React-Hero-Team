import { types } from '../types/types';

const initialState = {
  heroTeam: [],
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.heroAdd:
      return { ...state, heroTeam: [...state.heroTeam, action.payload] };
    case types.HeroLogout:
      return { ...initialState };
    case types.HeroDelete:
      return {
        ...state,
        heroTeam: state.heroTeam.filter((hero) => hero.id !== action.payload),
      };
    default:
      return state;
  }
};

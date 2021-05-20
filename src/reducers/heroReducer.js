import { types } from '../types/types';

const initialState = {
  heroSearch: [],
  heroTeamIds: [],
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.heroSearch:
      return { ...state, heroSearch: action.payload };
    case types.heroAdd:
      return { ...state, heroTeamIds: [...state.heroTeamIds, action.payload] };
    case types.HeroLogout:
      return { ...initialState };
    default:
      return state;
  }
};

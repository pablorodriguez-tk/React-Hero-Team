import { types } from '../types/types';

const initialState = {
  heroSearch: [],
  heroTeamIds: [],
  heroTeam: [],
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.heroSearch:
      return { ...state, heroSearch: action.payload };
    case types.heroAdd:
      return { ...state, heroTeamIds: [...state.heroTeamIds, action.payload] };
    case types.HeroLogout:
      return { ...initialState };
    case types.HeroGetById:
      return { ...state, heroTeam: [...state.heroTeam, action.payload] };
    default:
      return state;
  }
};

import { types } from '../types/types';

const initialState = {
  heroSearch: [],
  heroTeamIds: [],
  heroIds: [],
  HeroFetch: [],
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.heroSearch:
      return { ...state, heroSearch: action.payload };
    case types.heroAdd:
      return { ...state, heroTeamIds: [...state.heroTeamIds, action.payload] };
    case types.HeroLogout:
      return { ...initialState };
    case types.HeroId:
      return { ...state, heroIds: [...state.heroIds, action.payload] };
    case types.HeroFetch:
      return { ...state, HeroFetch: action.payload };
    default:
      return state;
  }
};

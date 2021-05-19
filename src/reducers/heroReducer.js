import { types } from '../types/types';

const initialState = {
  heroSearch: [],
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.heroSearch:
      return { ...state, heroSearch: action.payload };

    default:
      return state;
  }
};

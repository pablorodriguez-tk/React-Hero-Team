import { types } from '../types/types';

const initialState = {
  badHero: 0,
  goodHero: 0,
  neutralHero: 0,
};

export const validationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.validationGoodHero:
      return { ...state, goodHero: state.goodHero + 1 };
    case types.validationBadHero:
      return { ...state, badHero: state.badHero + 1 };
    case types.validationNeutralHero:
      return { ...state, neutralHero: state.neutralHero + 1 };
    case types.validationLogout:
      return { ...initialState };
    default:
      return state;
  }
};

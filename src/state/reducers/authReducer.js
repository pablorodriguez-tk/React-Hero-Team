import { types } from '../../state/action-types/types';

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    case types.authLogout:
      return { isLoggedIn: false };
    default:
      return state;
  }
};

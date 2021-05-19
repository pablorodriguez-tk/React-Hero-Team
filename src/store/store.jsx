import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from '../reducers/authReducer';
import { heroReducer } from '../reducers/heroReducer';

const reducers = combineReducers({ auth: authReducer, heroes: heroReducer });

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

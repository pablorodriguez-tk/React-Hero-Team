import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from '../reducers/authReducer';
import { heroReducer } from '../reducers/heroReducer';
import { validationReducer } from '../reducers/validationReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'heroes', 'validation'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  heroes: heroReducer,
  validation: validationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

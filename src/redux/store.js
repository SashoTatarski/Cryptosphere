import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { LOGIN_SUCCESS, LOGOUT, UPDATE_USER_SUCCESS } from './auth/authTypes';

import rootReducer from './rootReducer';

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type === LOGIN_SUCCESS || UPDATE_USER_SUCCESS) {
    const authState = store.getState().auth.user;
    localStorage.setItem('user', JSON.stringify(authState));
  } else if (action.type === LOGOUT) {
    localStorage.removeItem('user');
  }
  return result;
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk, localStorageMiddleware))
);
export default store;

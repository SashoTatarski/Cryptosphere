import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const localStorageMiddleware = (user) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('user', JSON.stringify(user));
    return result;
  };
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk, localStorageMiddleware))
);
export default store;

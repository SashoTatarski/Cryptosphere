import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { rootReducer } from '../src/redux';
import CryptoContext from '../src/Context/CryptoContext';



const middleware = [thunk];

function render(
  ui,
  {
    initialState,
    store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    ),
    ...renderOptions
  } = {}
) {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <CryptoContext>
          <MemoryRouter>{children}</MemoryRouter>
        </CryptoContext>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };

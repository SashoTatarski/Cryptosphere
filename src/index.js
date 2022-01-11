import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import CryptoContext from './Context/CryptoContext';
import { store } from './redux';

ReactDOM.render(
  <Provider store={store}>
  <CryptoContext>
    <App />
  </CryptoContext>
  </Provider>,
  document.getElementById('app')
);

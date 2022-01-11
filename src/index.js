import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import ReactDOM from 'react-dom';
import App from './App';
import CryptoContext from './Context/CryptoContext';

ReactDOM.render(
  <CryptoContext>
    <App />
  </CryptoContext>,
  document.getElementById('app')
);

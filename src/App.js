import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, NotFound } from './pages';
import { Chart } from './components';
import { store } from './redux';

const App = () => {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Chart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { store } from './redux';

import { Login, NotFound } from './pages';
import { Chart, ProtectedRoute } from './components';

const App = () => {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="stock-market-dashboard/" element={<Login />} />
            <Route
              path="stock-market-dashboard/dashboard"
              element={<ProtectedRoute component={Chart} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

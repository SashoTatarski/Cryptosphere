import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { store } from './redux';

import { Login, NotFound } from './pages';
import { Chart, ProtectedRoute } from './components';

const App = () => {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      <BrowserRouter basename="/stock-market-dashboard">
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="dashboard" element={<ProtectedRoute component={Chart} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

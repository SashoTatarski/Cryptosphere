import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { store } from './redux';

import { Login, NotFound } from './pages';
import { Chart, ProtectedRoute } from './components';

const App = () => {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Login />}>
              <Route
                path="dashboard"
                element={<ProtectedRoute component={Chart} />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Chart, ProtectedRoute } from './components';

import { Login, NotFound, Register, UserProfile } from './pages';

const App = () => {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      <BrowserRouter basename="/stock-market-dashboard">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<ProtectedRoute component={Chart} />} />
          <Route path="user-profile" element={<ProtectedRoute component={UserProfile } />} />
       
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

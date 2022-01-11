import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CoinPage, Dashboard, Login, NotFound, Register } from './pages';
import { store } from './redux';

const App = () => { 

  return (      
    //<div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      <BrowserRouter basename="/stock-market-dashboard">
        <Provider store={store}>          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/coins/:id" element={<CoinPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
      </BrowserRouter>   
  );
};

export default App;

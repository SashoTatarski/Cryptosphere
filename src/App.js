import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { CoinPage, Dashboard, Login, NotFound, Register } from './pages';
import { store } from './redux';

const App = () => {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh',
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.App}>      
      <BrowserRouter basename="/stock-market-dashboard">
        <Provider store={store}>
          <div>
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/coins/:id" element={<CoinPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

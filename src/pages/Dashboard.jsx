import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Banner, Header } from '../components';

const Dashboard = () => {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh'
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Header />
      <Banner />
    </div>
  );
};

export default Dashboard;

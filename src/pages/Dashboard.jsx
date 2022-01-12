import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Banner, Header, CoinsTable } from '../components';

const Dashboard = () => {
  const useStyles = makeStyles(() => ({
    Dashboard: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh'
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.Dashboard}>
      <Header />
      <Banner />
      <CoinsTable />
    </div>
  );
};

export default Dashboard;

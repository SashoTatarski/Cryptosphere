import React from 'react';
import { Banner, CoinsTable, Header } from '../components';
import { StyledDashboard } from '../pages';

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Header />
      <Banner />
      <CoinsTable />
    </StyledDashboard>
  );
};

export default Dashboard;

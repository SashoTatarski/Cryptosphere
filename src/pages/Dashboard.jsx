import React from 'react';
import { Banner, CoinsTable, Header } from '../components';
import { StyledDivDashboard } from '../pages';

const Dashboard = () => {
  return (       
      <StyledDivDashboard>
        <Header />
        <Banner />
        <CoinsTable />
      </StyledDivDashboard>       
  );
};

export default Dashboard;

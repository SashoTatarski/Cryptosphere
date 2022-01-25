import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: RouteComponent }) => {
  const userData = useSelector((state) => state.auth);

  if (userData.isLoggedIn) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};
export default ProtectedRoute;

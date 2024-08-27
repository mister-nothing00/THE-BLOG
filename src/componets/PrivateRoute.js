import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      element={user ? Component : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
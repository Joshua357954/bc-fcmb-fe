import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

// Assuming you have a context for authentication
import { AuthContext } from './AuthContext';

// Define a ProtectedRoute component
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth" />
        )
      )}
    />
  );
};

export default ProtectedRoute;

import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();


export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook for using the user context
export const useUser = () => {
  return useContext(UserContext);
};

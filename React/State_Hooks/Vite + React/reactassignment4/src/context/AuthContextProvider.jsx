import React, { createContext, useState } from "react";


const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

  const [authDetails, setAuthDetails] = useState({
    isLoggedIn: false,
    token: null,
  });

  const login = (token) => {
    setAuthDetails({
      isLoggedIn: true,
      token: token,
    });
  };

  const logout=()=>{
    setAuthDetails({
        isLoggedIn:false,
        token:null,
    })
  }

  return (
    <AuthContext.Provider value={{ authDetails, login , logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthContextProvider;

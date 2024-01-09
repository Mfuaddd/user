import React, { createContext, useState } from "react";

export const userContext = createContext();

function UserContext({ children }) {
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    const res = await fetch("http://localhost:3100/");
    const data = await res.json();
    setUserData(data);
  };

  const data = {
    userData,
    getUserData,
  };

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}

export default UserContext;

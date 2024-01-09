import React, { useContext, useEffect } from "react";
import UsersComponent from "../../components/UsersComponent";
import { userContext } from "../../contexts/UserContext";

function HomePage() {
  const { getUserData } = useContext(userContext);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <UsersComponent />
    </>
  );
}

export default HomePage;

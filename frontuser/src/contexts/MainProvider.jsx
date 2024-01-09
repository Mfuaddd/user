import React from "react";
import UserContext from "./UserContext";
import BasketContext from "./BasketContext";

function MainProvider({ children }) {
  return (
    <BasketContext>
      <UserContext>{children}</UserContext>
    </BasketContext>
  );
}

export default MainProvider;

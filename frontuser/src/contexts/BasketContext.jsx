import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const basketContext = createContext();

function BasketContext({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      basket[index].count++;
      setBasket([...basket]);
    }
  }

  function deleteBasket(id) {
    const index = basket.findIndex((x) => x._id === id);
    if (index !== -1) {
      setBasket(basket.filter((x) => x._id !== id));
    }
  }
  const data = {
    basket,
    addBasket,
    deleteBasket,
  };
  return (
    <basketContext.Provider value={data}>{children}</basketContext.Provider>
  );
}

export default BasketContext;

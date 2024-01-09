import React, { useContext } from "react";
import "./index.scss";
import { userDelete } from "../../helpers/UsersCrud";
import { userContext } from "../../contexts/UserContext";
import { basketContext } from "../../contexts/BasketContext";

function UserCardComponent({ item }) {
  const { getUserData } = useContext(userContext);
  const { addBasket } = useContext(basketContext);

  const handleClick = (cb, data) => {
    cb(data);
    getUserData();
  };
  return (
    <div className="user-card">
      <ul className="user-card__info">
        <li className="user-card__name">
          Name: {item?.name} {item?.surname}
        </li>
        <li className="user-card__phone">Phone: {item?.phone}</li>
        <li className="user-card__mail">Mail: {item?.mail}</li>
      </ul>
      <div className="user-card__buttons">
        <button onClick={() => addBasket(item)}>Add Basket</button>
        <button>Add Wishlist</button>
        <button onClick={() => handleClick(userDelete, item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCardComponent;

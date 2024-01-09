import React, { useContext } from "react";
import "./index.scss";
import { userContext } from "../../contexts/UserContext";
import UserCardComponent from "../UserCardComponent";

function UsersComponent() {
  const { userData } = useContext(userContext);
  return (
    <div className="users">
      <div className="container">
        <div className="users__header">Users</div>
        <div className="users__cards">
          {userData &&
            userData.map((item) => (
              <UserCardComponent key={item._id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default UsersComponent;

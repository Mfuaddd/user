import React, { useState } from "react";
import "./index.scss";
import { userPost } from "../../helpers/UsersCrud";
import { useNavigate } from "react-router-dom";

function AddComponent() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    userPost({ name, surname, phone, mail });
    navigate("/");
  };
  return (
    <div className="add">
      <form className="add__form" onSubmit={handleSubmit}>
        <label className="add__form__label" htmlFor="FirstName">
          First Name
        </label>
        <input
          className="add__form__input"
          name="FirstName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="add__form__label" htmlFor="LastName">
          Last Name
        </label>
        <input
          className="add__form__input"
          name="LastName"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <label className="add__form__label" htmlFor="phone">
          Phone
        </label>
        <input
          className="add__form__input"
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label className="add__form__label" htmlFor="mail">
          Mail
        </label>
        <input
          className="add__form__input"
          name="mail"
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <input className="add__form__submit" type="submit" value="Add"/>
      </form>
    </div>
  );
}

export default AddComponent;

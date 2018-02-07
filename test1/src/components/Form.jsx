import React from "react";
import Input from "./Input";

function Form({ onSubmit }) {
  return (
    <form className="signup-form mdc-theme--dark" onSubmit={onSubmit}>
      <Input type="text" name="firstName" placeholder="Имя" />
      <Input type="text" name="lastName" placeholder="Фамилия" />
      <Input type="email" name="email" placeholder="Почта" />
      <Input type="password" name="password" placeholder="Пароль" />
      <button
        type="submit"
        className="mdc-button mdc-button--primary mdc-button--raised"
      >
        Зарегистрироваться
      </button>
    </form>
  );
}

export default Form;

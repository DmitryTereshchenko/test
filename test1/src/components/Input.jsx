import React from "react";

function Input({type,name,placeholder}) {
  return (
    <div className="mdc-text-field">
      <input
        type={type}
        name={name}
        className="mdc-text-field__input"
        placeholder={placeholder}
      />
    </div>
  );
}
export default Input;

import React, { useState } from "react";

import "./InputComponent.css";

function InputComponent(props) {
  return (
    <div className="input__container">
      <h6 className="input__label">{props.title}</h6>
      <input
        className="input"
        type={props.type}
        value={props.value}
        onChange={props.onTextChange}
        placeholder={props.placeholder}
        name={props.name}
      />
    </div>
  );
}

export default InputComponent;

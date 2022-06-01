import React, { useState } from "react";

import "./InputComponent.scss";

function InputComponent(props) {
  return (
    <div className="input-container">
      <h6 className="input-container__label">{props.title}</h6>
      <input
        className={props.className}
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

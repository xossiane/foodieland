import React, { useState } from "react";

import "./InputComponent.css";

function InputComponent(props) {
  return (
    <div className="input-container">
      <h6 className="input-container__subtitulo">{props.title}</h6>
      <input
        className="input-container__input"
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

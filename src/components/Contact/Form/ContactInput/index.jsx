import React, { useState } from "react";

import "./InputComponent.css";

function InputComponent(props) {
  return (
    <div className="containerInput">
      <h6 className="subtitulo">{props.title}</h6>
      <input
        className="inputContainer"
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

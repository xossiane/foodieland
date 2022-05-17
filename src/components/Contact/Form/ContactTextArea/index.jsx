import React, { useState } from "react";
import "./TextAreaComponent.css";

function selectComponent(props) {
  return (
    <div className="textArea-container">
      <h6 className="input-container__subtitulo">{props.title}</h6>
      <textarea
        className="textArea-container__text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onTextChange}
        name={props.name}
      />
    </div>
  );
}

export default selectComponent;

import React, { useState } from "react";
import "./TextAreaComponent.css";

function selectComponent(props) {
  return (
    <div className="containerInput">
      <h6 className="subtitulo">{props.title}</h6>
      <textarea
        className="textAreaContainer"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onTextChange}
        name={props.name}
      />
    </div>
  );
}

export default selectComponent;

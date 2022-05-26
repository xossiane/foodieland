import React from "react";
import "./TextAreaComponent.css";

function selectComponent(props) {
  return (
    <div className="textArea__container">
      <h6 className="input__label">{props.title}</h6>
      <textarea
        className="textArea"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onTextChange}
        name={props.name}
      />
    </div>
  );
}

export default selectComponent;

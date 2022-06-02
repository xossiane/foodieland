import React from "react";
import "./TextAreaComponent.scss";

function selectComponent(props) {
  return (
    <div className="textArea-container">
      <h6 className="input-container__label">{props.title}</h6>
      <textarea
        className="textArea-container__textArea"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onTextChange}
        name={props.name}
      />
    </div>
  );
}

export default selectComponent;

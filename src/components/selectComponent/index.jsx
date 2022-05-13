import React, { useState } from "react";

import "./SelectComponent.css";
function selectComponent(props) {
  const list = [
    { id: 0, name: "" },
    { id: 1, name: "Opção 1" },
    { id: 2, name: "Opção 2" },
    { id: 3, name: "Opção 3" },
    { id: 4, name: "Opção 4" },
  ];

  return (
    <div className="containerInput">
      <h6 className="subtitulo">{props.title}</h6>
      <div className="containerSelect">
        <select
          className="selectContainer"
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onTextChange}
        >
          {list.map((item, index) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default selectComponent;

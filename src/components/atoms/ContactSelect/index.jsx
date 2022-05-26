import React from "react";

import "./SelectComponent.css";
function selectComponent(props) {
  const list = [
    { id: 1, name: "Opção 1" },
    { id: 2, name: "Opção 2" },
    { id: 3, name: "Opção 3" },
    { id: 4, name: "Opção 4" },
  ];

  return (
    <div className="select__container">
      <h6 className="input__label">{props.title}</h6>
      <div className="select__div">
        <select
          className="select"
          value={props.value}
          name={props.name}
          onChange={props.onTextChange}
          required
        >
          <option value="" disabled selected>
            Advertising
          </option>
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

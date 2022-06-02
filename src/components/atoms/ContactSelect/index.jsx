import React from "react";

import "./SelectComponent.scss";
function selectComponent(props) {
  const list = [
    { id: 1, name: "Opção 1" },
    { id: 2, name: "Opção 2" },
    { id: 3, name: "Opção 3" },
    { id: 4, name: "Opção 4" },
  ];

  return (
    <div className="select-container">
      <h6 className="input-container__label">{props.title}</h6>
      <div className="select-container__div">
        <select
          className="select-container__select"
          value={props.value}
          name={props.name}
          onChange={props.onTextChange}
          required
        >
          <option value="Advertising" disabled>
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

import React from "react";
import "./CircleAvatar.scss";

function CircleAvatar({ src, alt }) {
  return (
    <div className="circleAvatar__container">
      <img className="circleAvatar__img" src={src} alt={alt} />
    </div>
  );
}

export default CircleAvatar;

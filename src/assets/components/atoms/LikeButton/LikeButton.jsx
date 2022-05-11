import React, { useState } from "react";

import ReadHeart from "../../../public/img/RedHeart.svg";
import GrayHeart from "../../../public/img/GrayHeart.svg";
import "./LikeButton.css";

const LikeButton = () => {
  const [heart, setHeart] = useState(ReadHeart);

  const changeHeartHandler = () => {
    if (heart == ReadHeart) {
      setHeart(GrayHeart);
    } else {
      setHeart(ReadHeart);
    }
  };

  return (
    <button onClick={changeHeartHandler} className="like-button">
      <img className="like-button__img" src={heart} />
    </button>
  );
};

export default LikeButton;

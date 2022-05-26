import React, { useState } from "react";

import RedHeart from "/assets/RedHeart.svg";
import GrayHeart from "/assets/GrayHeart.svg";
import "./LikeButton.scss";

const LikeButton = () => {
  const [heart, setHeart] = useState(GrayHeart);

  const changeHeartHandler = () => {
    if (heart == RedHeart) {
      setHeart(GrayHeart);
    } else {
      setHeart(RedHeart);
    }
  };

  return (
    <div className="like-button">
      <button onClick={changeHeartHandler} className="like-button__button">
        <img src={heart} alt="" />
      </button>
    </div>
  );
};

export default LikeButton;

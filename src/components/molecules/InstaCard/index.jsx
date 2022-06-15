import React from "react";
import { CircleAvatar } from "../../atoms";
import "./InstaCard.scss";

function InstaCard({ src, alt }) {
  return (
    <article className="instaCard">
      <div className="instaCard__title">
        <CircleAvatar
          src={"/assets/instaposts/OvalLogo.png"}
          alt={"Foodieland Logo"}
        />
        <div className="instaCard__titleText">
          <div className="instaCard__titleUserName">
            <span>Foodieland.</span>
            <img
              src="/assets/instaposts/Official-Icon.png"
              alt="verified user"
            />
          </div>
          <span className="instaCard__titleLocation">Tokyo, Japan</span>
        </div>
        <span className="instaCard__titleOptions"></span>
      </div>
      <div className="instaCard__imgContainer">
        <span className="instaCard__imgNumber">1/3</span>
        <img className="instaCard__img" src={src} alt={alt} />
      </div>
      <div className="instaCard__iconsContainer">
        <div className="instaCard__iconsContainer--1">
          <img
            src="/assets/instaposts/Like.png"
            alt="like button from instagram"
          />
          <img
            src="/assets/instaposts/Comment.png"
            alt="comment button from instagram"
          />
          <img
            src="/assets/instaposts/Messanger.png"
            alt="Messanger button from instagram"
          />
        </div>
        <span className="instaCard__iconsContainer--3"></span>
        <div className="instaCard__iconsContainer--2">
          <img
            src="/assets/instaposts/Save.png"
            alt="Save button from instagram"
          />
        </div>
      </div>
      <div className="instaCard__likesInfo">
        <CircleAvatar
          src="/assets/instaposts/OvaluserInsta.png"
          alt="photo from user insta"
        />
        <span className="instaCard__likesInfoText">
          Liked by <span className="bold-text">craig_love</span> and{" "}
          <span className="bold-text">44,686</span>
        </span>
      </div>
      <div className="instaCard__descriptionContainer">
        <span className="instaCard__description">
          <span className="bold-text">Foodieland.</span> Steak never be wrong,
          it's suitable for you who want romantic dinner
        </span>
      </div>
      <span className="instaCard__date">September 19</span>
    </article>
  );
}

export default InstaCard;

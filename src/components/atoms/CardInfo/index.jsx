import "./CardInfo.scss";

import ForkKnife from "/assets/ForkKnife.svg";
import Timer from "/assets/Timer.svg";

const CardInfo = (props) => {
  return (
    <div className={`${`card__info`} ${props.className}`}>
      <div className="card__info__item">
        <img src={ForkKnife} />
        <p className="card__info__text">{props.firstInfo}</p>
      </div>
      <div className="card__info__item">
        <img src={Timer} />
        <p className="card__info__text">{props.secondInfo}</p>
      </div>
    </div>
  );
};

export default CardInfo;

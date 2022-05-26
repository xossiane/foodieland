import "./CardInfo.scss";

import ForkKnife from "/assets/ForkKnife.svg";
import Timer from "/assets/Timer.svg";

const CardInfo = (props) => {
  return (
    <div className="card__info">
      <div className="card__info__item">
        <img src={ForkKnife} />
        <p>{props.firstInfo}</p>
      </div>
      <div className="card__info__item">
        <img src={Timer} />
        <p>{props.secondInfo}</p>
      </div>
    </div>
  );
};

export default CardInfo;

import "./CardInfo.css";

import ForkKnife from "../../../../../../public/assets/ForkKnife.svg";
import Timer from "../../../../../../public/assets/Timer.svg";

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
